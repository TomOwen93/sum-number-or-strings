import sumNumNotString from "./sum-num-string";

test("sumNumNotString returns sum of only number type elements", () => {
  expect(sumNumNotString(["test", 2, 3, 500, "hello", 1, "lol"])).toBe(506);
  expect(sumNumNotString(["test", -2, -3, -500, "hello", -1, "lol"])).toBe(
    -506
  );
});

test("sumNumNotString returns 0 if no number types are found", () => {
  expect(sumNumNotString(["test", "lol", "today", "words"])).toBe(0);
  expect(sumNumNotString(["test21", "l33ol", "tod44ay", "22"])).toBe(0);
});
