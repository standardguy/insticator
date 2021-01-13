import cookie from "js-cookie";
import * as constants from "./constants";
import {
  sessionTimer,
  newSession,
  getCampaign,
  isExpired,
  campaignUpdates,
} from "./utils";
import { newDaySession } from "./session";

jest.useFakeTimers();

jest.mock("./session");
const mockNewDaySession = newDaySession as jest.MockedFunction<
  typeof newDaySession
>;

describe("The timer", () => {
  it("Calls the callback after a duration", () => {
    const currSession = { ...constants.defaultSession };
    cookie.set("instiSession", currSession);

    sessionTimer(new Date(constants.expires), mockNewDaySession);

    expect(mockNewDaySession).not.toBeCalled();
    jest.advanceTimersByTime(35 * 60000);
    expect(mockNewDaySession).toBeCalled();
    expect(mockNewDaySession).toBeCalledWith(currSession);
    expect(mockNewDaySession).toHaveBeenCalledTimes(1);
    mockNewDaySession.mockClear();
  });
});

describe("newSession", () => {
  it("changes the currecnt session id value", () => {
    const newId = newSession("testId");

    const uriRegEx = /testId-\d/; // matches strings like "testId-8"

    expect(newId).toMatch(uriRegEx);
  });
});

describe("getCampaign", () => {
  it("returns the campaign in the query string", () => {
    window.history.pushState({}, "Page Title", "/?campaign=test_mailer");
    const campaign = getCampaign(document);

    expect(campaign).toEqual("test_mailer");
  });
  it("returns a null in no campaign in the query string", () => {
    window.history.pushState({}, "Page Title", "/?campaign=");
    const campaign = getCampaign(document);

    expect(campaign).toBeNull();
  });
});

describe("campaignUpdates", () => {
  it("set the compaign on the session", () => {
    const fakeCampaign = "randomMailer";
    const currSession = { ...constants.defaultSession };

    expect(currSession.campaign).not.toEqual(fakeCampaign);

    const resp = campaignUpdates(currSession, fakeCampaign);

    expect(resp.campaign).toEqual(fakeCampaign);
  });
});

describe("isExpired", () => {
  it("returns true if we are past expiration", () => {
    const _45minsAgo = Date.now() - 45 * 60000;
    const expiredState = isExpired(new Date(_45minsAgo).toString());

    expect(expiredState).toBeTruthy();
  });
  it("returns false if we are *NOT* past expiration", () => {
    const _45minsAhead = Date.now() + 45 * 60000;
    const expState = isExpired(new Date(_45minsAhead).toString());

    expect(expState).toBeFalsy();
  });
});
