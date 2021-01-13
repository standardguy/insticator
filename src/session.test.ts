import cookie from "js-cookie";
import * as constants from "./constants";

import { getSession, updateSession, newDaySession } from "./session";

const uriRegEx = /awd34!@a754-\d*/;

afterEach(() => {
  window.history.pushState({}, "Page Title", "/");
});

describe("Session - ", () => {
  describe("Is set when", () => {
    it("No session exists", () => {
      getSession();
      const newSession = cookie.getJSON("instiSession");

      expect(newSession).toEqual(constants.defaultSession);
    });

    it("No session exists, but URL has a campaign", () => {
      cookie.remove("instiSession");
      window.history.pushState({}, "Page Title", "/?campaign=newest_mailer");

      getSession();
      const newSession = cookie.getJSON("instiSession");

      expect(newSession.id).toEqual(constants.defaultSession.id);
      expect(newSession.campaign).toEqual("newest_mailer");
    });

    it("An valid session exists", () => {
      const _15minsFromNow = Date.now() + 15 * 60000;
      const currSession = {
        ...constants.defaultSession,
        expiration: new Date(_15minsFromNow).toString(),
      };

      updateSession(currSession);
      const newSession = cookie.getJSON("instiSession");

      expect(newSession).toEqual(constants.defaultSession);
    });
  });

  describe("Creates a new session when", () => {
    it("the session is stale", () => {
      const _45minsAgo = Date.now() - 45 * 60000;
      const currSession = {
        ...constants.defaultSession,
        expiration: new Date(_45minsAgo).toString(),
      };

      expect(currSession.id).not.toMatch(uriRegEx);

      updateSession(currSession);
      const newSession = cookie.getJSON("instiSession");

      expect(newSession.id).toMatch(uriRegEx);
    });

    it("the campaign changes", () => {
      const currSession = { ...constants.defaultSession };

      expect(currSession.campaign).not.toEqual("newest_mailer");
      expect(currSession.id).not.toMatch(uriRegEx);

      window.history.pushState({}, "Page Title", "/?campaign=newest_mailer");
      updateSession(currSession);
      const newSession = cookie.getJSON("instiSession");

      expect(newSession.campaign).toEqual("newest_mailer");
      expect(newSession.id).toMatch(uriRegEx);
    });

    describe("It turns midnight and", () => {
      it("The newDaySession is called", () => {
        const currSession = { ...constants.defaultSession };

        expect(currSession.id).not.toMatch(uriRegEx);

        newDaySession(currSession);
        const newSession = cookie.getJSON("instiSession");

        expect(newSession.id).toMatch(uriRegEx);
      });
    });
  });
});
