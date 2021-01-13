const cookieDuration = 30 * 60000; // mins * millisecs in a minute
const expires = Date.now() + cookieDuration;

const defaultSession = {
  id: "awd34!@a754",
  expiration: new Date(expires).toString(),
  referrer: document.referrer,
  campaign: "summer_mailer",
};

export { expires, defaultSession };
