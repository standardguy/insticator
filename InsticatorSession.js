!(function i(o, r, s) {
  function a(t, e) {
    if (!r[t]) {
      if (!o[t]) {
        var n = "function" == typeof require && require;
        if (!e && n) return n(t, !0);
        if (u) return u(t, !0);
        throw (
          (((n = new Error("Cannot find module '" + t + "'")).code =
            "MODULE_NOT_FOUND"),
          n)
        );
      }
      (n = r[t] = { exports: {} }),
        o[t][0].call(
          n.exports,
          function (e) {
            return a(o[t][1][e] || e);
          },
          n,
          n.exports,
          i,
          o,
          r,
          s
        );
    }
    return r[t].exports;
  }
  for (
    var u = "function" == typeof require && require, e = 0;
    e < s.length;
    e++
  )
    a(s[e]);
  return a;
})(
  {
    1: [
      function (e, t, n) {
        var i, o, r, s;
        (i = function () {
          function a() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
              var n,
                i = arguments[e];
              for (n in i) t[n] = i[n];
            }
            return t;
          }
          function c(e) {
            return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
          }
          return (function e(u) {
            function s() {}
            function n(e, t, n) {
              if ("undefined" != typeof document) {
                "number" ==
                  typeof (n = a({ path: "/" }, s.defaults, n)).expires &&
                  (n.expires = new Date(+new Date() + 864e5 * n.expires)),
                  (n.expires = n.expires ? n.expires.toUTCString() : "");
                try {
                  var i = JSON.stringify(t);
                  /^[\{\[]/.test(i) && (t = i);
                } catch (e) {}
                (t = u.write
                  ? u.write(t, e)
                  : encodeURIComponent(String(t)).replace(
                      /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                      decodeURIComponent
                    )),
                  (e = encodeURIComponent(String(e))
                    .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                    .replace(/[\(\)]/g, escape));
                var o,
                  r = "";
                for (o in n)
                  n[o] &&
                    ((r += "; " + o),
                    !0 !== n[o] && (r += "=" + n[o].split(";")[0]));
                return (document.cookie = e + "=" + t + r);
              }
            }
            function t(e, t) {
              if ("undefined" != typeof document) {
                for (
                  var n = {},
                    i = document.cookie ? document.cookie.split("; ") : [],
                    o = 0;
                  o < i.length;
                  o++
                ) {
                  var r = i[o].split("="),
                    s = r.slice(1).join("=");
                  t || '"' !== s.charAt(0) || (s = s.slice(1, -1));
                  try {
                    var a = c(r[0]),
                      s = (u.read || u)(s, a) || c(s);
                    if (t)
                      try {
                        s = JSON.parse(s);
                      } catch (e) {}
                    if (((n[a] = s), e === a)) break;
                  } catch (e) {}
                }
                return e ? n[e] : n;
              }
            }
            return (
              (s.set = n),
              (s.get = function (e) {
                return t(e, !1);
              }),
              (s.getJSON = function (e) {
                return t(e, !0);
              }),
              (s.remove = function (e, t) {
                n(e, "", a(t, { expires: -1 }));
              }),
              (s.defaults = {}),
              (s.withConverter = e),
              s
            );
          })(function () {});
        }),
          "function" == typeof define && define.amd && (define(i), (o = !0)),
          "object" == typeof n && ((t.exports = i()), (o = !0)),
          o ||
            ((r = window.Cookies),
            ((s = window.Cookies = i()).noConflict = function () {
              return (window.Cookies = r), s;
            }));
      },
      {},
    ],
    2: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.defaultSession = n.expires = void 0);
        var i = Date.now() + 18e5;
        n.expires = i;
        i = {
          id: "awd34!@a754",
          expiration: new Date(i).toString(),
          referrer: document.referrer,
          campaign: "summer_mailer",
        };
        n.defaultSession = i;
      },
      {},
    ],
    3: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          e("./session").getSession();
      },
      { "./session": 4 },
    ],
    4: [
      function (e, t, n) {
        "use strict";
        var i =
            (this && this.__assign) ||
            function () {
              return (i =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  return e;
                }).apply(this, arguments);
            },
          o =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n),
                    Object.defineProperty(e, i, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  });
                }
              : function (e, t) {
                  e.default = t;
                }),
          s =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  "default" !== n &&
                    Object.prototype.hasOwnProperty.call(e, n) &&
                    o(t, e, n);
              return r(t, e), t;
            },
          a =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.newDaySession = n.updateSession = n.setDefaultSession = n.getSession = void 0);
        function u() {
          var e = (e = d.getCampaign(document)) || f.defaultSession.campaign,
            e = i(i({}, f.defaultSession), { campaign: e });
          c.default.set("instiSession", e),
            console.log("Fist session: %o", c.default.getJSON("instiSession"));
        }
        var c = a(e("js-cookie")),
          f = s(e("./constants")),
          d = e("./utils"),
          l = c.default.getJSON("instiSession");
        n.setDefaultSession = u;
        function p(e) {
          var t = "",
            n = d.getCampaign(document);
          null !== n &&
            n !== e.campaign &&
            ((e.id = d.newSession(e.id)),
            (e.campaign = n),
            (t = " (Campaign)")),
            d.isExpired(e.expiration) &&
              ((e.id = d.newSession(e.id)), (t = " (Expired)")),
            (e = i(i({}, e), {
              referrer: document.referrer,
              expiration: new Date(f.expires).toString(),
            })),
            c.default.set("instiSession", e),
            console.log(
              "Updated session%s:%o",
              t,
              c.default.getJSON("instiSession")
            );
        }
        n.updateSession = p;
        n.newDaySession = function (e) {
          (e = i(i({}, e), {
            id: d.newSession(e.id),
            expiration: new Date(f.expires).toString(),
          })),
            c.default.set("instiSession", e),
            console.log(
              "New day session: %o",
              c.default.getJSON("instiSession")
            ),
            d.resetAtMidnight();
        };
        n.getSession = function () {
          d.resetAtMidnight(), null == l ? u() : p(l);
        };
      },
      { "./constants": 2, "./utils": 5, "js-cookie": 1 },
    ],
    5: [
      function (e, t, n) {
        "use strict";
        var i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.resetAtMidnight = n.isExpired = n.getCampaign = n.newSession = n.sessionTimer = void 0);
        function o(e, t) {
          var n = new Date(),
            n = e.getTime() - n.getTime();
          setTimeout(function () {
            t(r.default.getJSON("instiSession"));
          }, n);
        }
        var r = i(e("js-cookie")),
          s = e("./session");
        n.sessionTimer = o;
        n.resetAtMidnight = function () {
          var e = new Date(),
            e = new Date(
              e.getFullYear(),
              e.getMonth(),
              e.getDate() + 1,
              0,
              0,
              0
            );
          console.log("Setting new day timer!!!!"), o(e, s.newDaySession);
        };
        n.newSession = function (e) {
          return e + "-" + (Math.floor(11 * Math.random()) + 1);
        };
        n.getCampaign = function (e) {
          e = e.location.search.split("=")[1];
          return e && 0 < e.length ? e : null;
        };
        n.isExpired = function (e) {
          return 0 < Date.now() - new Date(e).getTime();
        };
      },
      { "./session": 4, "js-cookie": 1 },
    ],
  },
  {},
  [3]
);
//# sourceMappingURL=InsticatorSession.js.map
