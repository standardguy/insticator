import cookie from "js-cookie";
import { sayHello } from "./greet";

const showHello = (divName: string, name: string) => {
  const elt = document.getElementById(divName);
  elt.innerText = sayHello(name);
};
console.log(cookie.getJSON("testrg"));
showHello("greeting", "TypeScript??@@");
