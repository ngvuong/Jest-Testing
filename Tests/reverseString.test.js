import { reverse } from "../Functions/reverseString";

it("reverse a string", () => {
  expect(reverse("reverse this string")).toBe("gnirts siht esrever");
});
