import cookie from "js-cookie";
import * as types from "./types";
import * as constants from "./constants";
import { newDaySession } from "./session";

const sessionTimer = (timeToExpire: Date, callback: Function) => {
  const now = new Date();
  const timerDuration = timeToExpire.getTime() - now.getTime();

  setTimeout(function () {
    callback(cookie.getJSON("instiSession"));
  }, timerDuration);
};

const resetAtMidnight = () => {
  const now = new Date();
  const midnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1, // the next day, ...
    0,
    0,
    0 // ...at 00:00:00 hours
  );
  console.log("Setting new day timer!!!!");
  sessionTimer(midnight, newDaySession);
};

const newSession = (id: string): string => {
  const rando = Math.floor(Math.random() * (10 - 0 + 1)) + 1;
  return `${id}-${rando}`;
};

const getCampaign = (document: Document) => {
  const campaign = document.location.search.split("=")[1];
  return campaign && campaign.length > 0 ? campaign : null;
};

const isExpired = (sessionExp: string): boolean => {
  return Date.now() - new Date(sessionExp).getTime() > 0;
};

const campaignUpdates = (session: types.currSession, campaign: string) => {
  session.id = newSession(session.id);
  session.campaign = campaign;
  return {
    ...session,
    referrer: document.referrer,
    expiration: new Date(constants.expires).toString(),
  };
};

const determinUpdateType = (
  session: types.currSession,
  campaign: string
): string => {
  if (campaign !== null && campaign !== session.campaign) {
    return "campaignChange";
  } else if (isExpired(session.expiration as string)) {
    return "expired";
  } else {
    return "updateExp";
  }
};

export {
  sessionTimer,
  newSession,
  getCampaign,
  isExpired,
  resetAtMidnight,
  campaignUpdates,
  determinUpdateType,
};
