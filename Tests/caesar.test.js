import { caesar } from "../Functions/caesar";

it("returns cipher of string with given shift", () => {
  expect(caesar("AbCdEf! ,", 1)).toBe("BcDeFg! ,");
});

it("returns cipher of string with given shift", () => {
  expect(caesar("encrypt this string", 1)).toBe("fodszqu uijt tusjoh");
});

it("returns cipher with correct wrapping", () => {
  expect(caesar("a to z", 2)).toBe("c vq b");
});
it("returns cipher with correct casing", () => {
  expect(caesar("Hello", 3)).toBe("Khoor");
});

it("returns cipher with correct puntuation", () => {
  expect(caesar("Hello, World!", 1)).toBe("Ifmmp, Xpsme!");
});

it("returns same string back with some shift values", () => {
  expect(caesar("Same string", 26)).toBe("Same string");
});
