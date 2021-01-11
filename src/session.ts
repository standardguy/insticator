import cookie from "js-cookie";

const cookieDuration = 30 * 60000; // mins * millisecs in a minute
const expires = Date.now() + cookieDuration;
const currSession: {
  id: string;
  expiration: string;
  referrer: string;
  campaign: string;
} = cookie.getJSON("instaSession");
let sessionCtr = 0;

const defaultSession = {
  id: "awd34!@a754",
  expiration: new Date(expires).toString(),
  referrer: document.referrer,
  campaign: "summer_mailer",
};
// const currSession = cookie.getJSON("instaSession");
const setDefaultSession = () => {
  cookie.set("instaSession", defaultSession, {
    expires: new Date(expires),
  });
};

const updateSession = (currSession: {
  id: string;
  expiration: string;
  referrer: string;
  campaign: string;
}): void => {
  // update campaign
  const queryStringCampaign = document.location.search.split("=")[1];
  if (queryStringCampaign && queryStringCampaign.length > 0) {
    currSession.campaign = queryStringCampaign;

    if (queryStringCampaign !== currSession.campaign) {
      currSession.id = `${currSession.id}-${sessionCtr + 1}`;
    }
  }
  //update expiration
  const isExpired = (sessionExp: string): boolean =>
    Date.now() - (new Date(sessionExp) as any) > cookieDuration;

  if (isExpired(currSession.expiration as string)) {
    currSession.id = `${currSession.id}-${sessionCtr + 1}`;
  }
  currSession.referrer = document.referrer;
  currSession.expiration = new Date(expires).toString();
  cookie.set("instaSession", currSession, {
    expires: new Date(expires),
  });
};

const newDaySession = (currSession: {
  id: string;
  expiration: string;
  referrer: string;
  campaign: string;
}): void => {
  currSession.id = `${currSession.id}-${sessionCtr + 1}`;
  currSession.expiration = new Date(expires).toString();
  cookie.set("instaSession", currSession, {
    expires: new Date(expires),
  });
};

const resetAtMidnight = () => {
  var now = new Date();
  var night = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1, // the next day, ...
    0,
    0,
    0 // ...at 00:00:00 hours
  );
  const msToMidnight = night.getTime() - now.getTime();

  setTimeout(function () {
    // console.log("it's midnight");
    newDaySession(cookie.getJSON("instaSession"));
  }, msToMidnight);
};

const getSession = () => {
  resetAtMidnight();
  if (currSession == undefined) {
    // console.log("!!currSess");
    setDefaultSession();
  } else {
    // console.log("currSess");
    updateSession(currSession);
  }
};

export { getSession, setDefaultSession, updateSession, newDaySession, expires };
