import { calculator } from "../Functions/calculator";

it("99 + 1 + 3 equals 103", () => {
  expect(calculator.add(99, 1, 3)).toBe(103);
});

it("99 - 1 equals 98", () => {
  expect(calculator.subtract(99, 1)).toEqual(98);
});

it("99.1 * 2 equals 198.2", () => {
  expect(calculator.multiply(99.1, 2)).toEqual(198.2);
});

it("99 / 3 / 11 equals 3", () => {
  expect(calculator.divide(99, 3, 11)).toEqual(3);
});
