import cookie from "js-cookie";
import { getSession } from "./session";

getSession();

console.log(cookie.getJSON("instaSession"));
