import cookie from "js-cookie";
import { newSession, getCampaign, isExpired, resetAtMidnight } from "./utils";

const cookieDuration = 30 * 60000; // mins * millisecs in a minute
const expires = Date.now() + cookieDuration;
const currSession = cookie.getJSON("instaSession");
let updateAction = "";

const defaultSession = {
  id: "awd34!@a754",
  expiration: new Date(expires).toString(),
  referrer: document.referrer,
  campaign: "summer_mailer",
};

const setDefaultSession = () => {
  const campaign = getCampaign(document as Document);
  const campaignStr = campaign ? campaign : defaultSession.campaign;
  let firstSession = {
    ...defaultSession,
    campaign: campaignStr,
  };
  cookie.set("instaSession", firstSession);
  console.log("Fist session: %o", cookie.getJSON("instaSession"));
};

const updateSession = (currSession: {
  id: string;
  expiration: string;
  referrer: string;
  campaign: string;
}): void => {
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
    expiration: new Date(expires).toString(),
  };
  cookie.set("instaSession", currSession);
  console.log(
    "Updated session%s:%o",
    updateAction,
    cookie.getJSON("instaSession")
  );
};

const newDaySession = (currSession: {
  id: string;
  expiration: string;
  referrer: string;
  campaign: string;
}): void => {
  currSession = {
    ...currSession,
    id: newSession(currSession.id),
    expiration: new Date(expires).toString(),
  };

  cookie.set("instaSession", currSession);
  console.log("New day session: %o", cookie.getJSON("instaSession"));
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

export {
  getSession,
  setDefaultSession,
  updateSession,
  newDaySession,
  defaultSession,
  expires,
};
