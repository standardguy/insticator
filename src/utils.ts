import cookie from "js-cookie";
import { newDaySession } from "./session";

const sessionTimer = (timeToExpire: Date, callback: Function) => {
  var now = new Date();
  const timerDuration = timeToExpire.getTime() - now.getTime();

  setTimeout(function () {
    callback(cookie.getJSON("instaSession"));
  }, timerDuration);
};

const resetAtMidnight = () => {
  var now = new Date();
  var midnight = new Date(
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

export { sessionTimer, newSession, getCampaign, isExpired, resetAtMidnight };
