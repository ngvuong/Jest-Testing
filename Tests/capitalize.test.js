import { capitalize } from "../Functions/capitalize";

it("capitalize string", () => {
  expect(capitalize("string this")).toBe("String this");
});

it("return already capitalized string", () => {
  expect(capitalize("String that")).toBe("String that");
});
