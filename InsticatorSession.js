!function i(o,r,s){function a(t,e){if(!r[t]){if(!o[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(u)return u(t,!0);throw(n=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",n}n=r[t]={exports:{}},o[t][0].call(n.exports,function(e){return a(o[t][1][e]||e)},n,n.exports,i,o,r,s)}return r[t].exports}for(var u="function"==typeof require&&require,e=0;e<s.length;e++)a(s[e]);return a}({1:[function(e,t,n){var i,o,r,s;i=function(){function a(){for(var e=0,t={};e<arguments.length;e++){var n,i=arguments[e];for(n in i)t[n]=i[n]}return t}function c(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function e(u){function s(){}function n(e,t,n){if("undefined"!=typeof document){"number"==typeof(n=a({path:"/"},s.defaults,n)).expires&&(n.expires=new Date(+new Date+864e5*n.expires)),n.expires=n.expires?n.expires.toUTCString():"";try{var i=JSON.stringify(t);/^[\{\[]/.test(i)&&(t=i)}catch(e){}t=u.write?u.write(t,e):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var o,r="";for(o in n)n[o]&&(r+="; "+o,!0!==n[o]&&(r+="="+n[o].split(";")[0]));return document.cookie=e+"="+t+r}}function t(e,t){if("undefined"!=typeof document){for(var n={},i=document.cookie?document.cookie.split("; "):[],o=0;o<i.length;o++){var r=i[o].split("="),s=r.slice(1).join("=");t||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var a=c(r[0]),s=(u.read||u)(s,a)||c(s);if(t)try{s=JSON.parse(s)}catch(e){}if(n[a]=s,e===a)break}catch(e){}}return e?n[e]:n}}return s.set=n,s.get=function(e){return t(e,!1)},s.getJSON=function(e){return t(e,!0)},s.remove=function(e,t){n(e,"",a(t,{expires:-1}))},s.defaults={},s.withConverter=e,s}(function(){})},"function"==typeof define&&define.amd&&(define(i),o=!0),"object"==typeof n&&(t.exports=i(),o=!0),o||(r=window.Cookies,(s=window.Cookies=i()).noConflict=function(){return window.Cookies=r,s})},{}],2:[function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});i=i(e("js-cookie"));e("./session").getSession(),console.log(i.default.getJSON("instaSession"))},{"./session":3,"js-cookie":1}],3:[function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.expires=n.newDaySession=n.updateSession=n.setDefaultSession=n.getSession=void 0;var o=i(e("js-cookie")),r=Date.now()+18e5;n.expires=r;function s(){o.default.set("instaSession",u,{expires:new Date(r)})}var a=o.default.getJSON("instaSession"),u={id:"awd34!@a754",expiration:new Date(r).toString(),referrer:document.referrer,campaign:"summer_mailer"};n.setDefaultSession=s;function c(e){var t=document.location.search.split("=")[1];t&&0<t.length&&(e.campaign=t)!==e.campaign&&(e.id=e.id+"-1"),t=e.expiration,18e5<Date.now()-new Date(t)&&(e.id=e.id+"-1"),e.expiration=new Date(r).toString(),o.default.set("instaSession",e,{expires:new Date(r)})}n.updateSession=c;function f(e){e.id=e.id+"-1",e.expiration=new Date(r).toString(),o.default.set("instaSession",e,{expires:new Date(r)})}n.newDaySession=f;n.getSession=function(){var e;e=new Date,e=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1,0,0,0).getTime()-e.getTime(),setTimeout(function(){f(o.default.getJSON("instaSession"))},e),a?s():c(a)}},{"js-cookie":1}]},{},[2]);
//# sourceMappingURL=InsticatorSession.js.map
