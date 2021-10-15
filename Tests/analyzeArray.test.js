import { analyze } from "../Functions/analyzeArray";

it("returns object with correct properties and values", () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

it("returns object with correct properties and values", () => {
  expect(analyze([-2, 3, 5])).toEqual({
    average: 2,
    min: -2,
    max: 5,
    length: 3,
  });
});
