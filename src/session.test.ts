import cookie from "js-cookie";
import {
  setDefaultSession,
  updateSession,
  newDaySession,
  expires,
} from "./session";

describe("Session - ", () => {
  const defaultSession = {
    id: "awd34!@a754",
    expiration: new Date(expires).toString(),
    referrer: document.referrer,
    campaign: "summer_mailer",
  };
  describe("Is set when", () => {
    it("No session exists", () => {
      setDefaultSession();
      const defSess = cookie.getJSON("instaSession");
      expect(defSess).toEqual(defaultSession);
    });

    it("An valid session exists", () => {
      const _15minsAgo = Date.now() - 15 * 60000;
      const currSession = {
        id: "awd34!@a754",
        expiration: new Date(_15minsAgo).toString(),
        referrer: document.referrer,
        campaign: "summer_mailer",
      };
      updateSession(currSession);
      const defSess = cookie.getJSON("instaSession");
      expect(defSess).toEqual(defaultSession);
    });
  });
  describe("Creates a new session when", () => {
    it("the session is stale", () => {
      const _45minsAgo = Date.now() - 45 * 60000;
      const currSession = {
        id: "awd34!@a754",
        expiration: new Date(_45minsAgo).toString(),
        referrer: document.referrer,
        campaign: "summer_mailer",
      };
      updateSession(currSession);
      const defSess = cookie.getJSON("instaSession");
      defaultSession.id = "awd34!@a754-1";

      expect(defSess).toEqual(defaultSession);
    });

    it("the campaign changes", () => {
      const _45minsAgo = Date.now() - 45 * 60000;
      const currSession = {
        id: "awd34!@a754",
        expiration: new Date(_45minsAgo).toString(),
        referrer: document.referrer,
        campaign: "summer_mailer",
      };
      window.history.pushState({}, "Page Title", "/?campaign=newset_mailer");
      updateSession(currSession);
      defaultSession.id = "awd34!@a754-1";
      defaultSession.campaign = "newset_mailer";
      const defSess = cookie.getJSON("instaSession");
      expect(defSess).toEqual(defaultSession);
    });

    it("it turns midnight", () => {
      const currSession = {
        id: "awd34!@a754",
        expiration: new Date(expires).toString(),
        referrer: document.referrer,
        campaign: "summer_mailer",
      };
      cookie.set("instaSession", currSession);

      newDaySession(currSession);
      const newSession = cookie.getJSON("instaSession");
      currSession.id = "awd34!@a754-1";

      expect(newSession).toEqual(currSession);
    });
  });
});
