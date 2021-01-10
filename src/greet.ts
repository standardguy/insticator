import cookie from "js-cookie";

export const sayHello = (name: string) => {
  cookie.set("testrg", '{ campaign: "testrg" }', { expires: 1 / 48 });
  return `Hello from ${name}`;
};
