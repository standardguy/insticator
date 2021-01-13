import cookie from "js-cookie";
import * as types from "./types";
import * as constants from "./constants";
import { newSession, getCampaign, isExpired, resetAtMidnight } from "./utils";
const currSession = cookie.getJSON("instiSession");

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

const updateSession = (currSession: types.currSession): void => {
  let updateAction = "";
  // update campaign
  const campaign = getCampaign(document as Document);
  if (campaign !== null && campaign !== currSession.campaign) {
    currSession.id = newSession(currSession.id);
    currSession.campaign = campaign;
    updateAction = " (Campaign)";
  }

  //update expiration
  if (isExpired(currSession.expiration as string)) {
    currSession.id = newSession(currSession.id);
    updateAction = " (Expired)";
  }
  currSession = {
    ...currSession,
    referrer: document.referrer,
    expiration: new Date(constants.expires).toString(),
  };
  cookie.set("instiSession", currSession);
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
  resetAtMidnight();
  if (currSession == undefined) {
    setDefaultSession();
  } else {
    updateSession(currSession);
  }
};

export { getSession, setDefaultSession, updateSession, newDaySession };
