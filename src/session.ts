import cookie from "js-cookie";
import * as types from "./types";
import * as constants from "./constants";
import {
  newSession,
  getCampaign,
  resetAtMidnight,
  campaignUpdates,
  determinUpdateType,
} from "./utils";

const setDefaultSession = () => {
  const campaign = getCampaign(document as Document);
  const campaignStr = campaign ? campaign : constants.defaultSession.campaign;
  let firstSession = {
    ...constants.defaultSession,
    campaign: campaignStr,
  };
  cookie.set("instiSession", firstSession);
  console.log("Fist session: %o", cookie.getJSON("instiSession"));
};

const updateSession = (session: types.currSession): void => {
  let updateAction = "";
  const campaign: string = getCampaign(document as Document);

  switch (determinUpdateType(session, campaign)) {
    case "campaignChange":
      session = { ...campaignUpdates(session, campaign) };
      updateAction = " (Campaign)";
      break;
    case "expired":
      session = { ...session, id: newSession(session.id) };
      updateAction = " (Expired)";
      break;
    default:
      // every session get expiration updated
      session = {
        ...session,
        expiration: new Date(constants.expires).toString(),
      };
  }

  cookie.set("instiSession", session);
  console.log(
    "Updated session%s:%o",
    updateAction,
    cookie.getJSON("instiSession")
  );
};

const newDaySession = (currSession: types.currSession): void => {
  currSession = {
    ...currSession,
    id: newSession(currSession.id),
    expiration: new Date(constants.expires).toString(),
  };

  cookie.set("instiSession", currSession);
  console.log("New day session: %o", cookie.getJSON("instiSession"));
  resetAtMidnight();
};

const getSession = () => {
  const currSession = cookie.getJSON("instiSession");
  resetAtMidnight();
  if (currSession == undefined) {
    setDefaultSession();
  } else {
    updateSession(currSession);
  }
};

export { getSession, setDefaultSession, updateSession, newDaySession };
