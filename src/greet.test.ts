import { sayHello } from "./greet";

it("says hello", () => {
  const resp = sayHello("test");
  expect(resp).toEqual("Hello from test");
});
