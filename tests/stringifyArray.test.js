import { stringifyArray } from "../scripts/stringifyArray";

test("returns a simple string - [1, 2]", () => {
  let array = [1, 2];
  let result = stringifyArray(array);
  expect(result).toBe("[1, 2]");
});

test("returns a nested array - [[1, 2], [3, 4]]", () => {
  let array = [[1, 2], [3, 4]];
  let result = stringifyArray(array);
  expect(result).toBe("[[1, 2], [3, 4]]");
});

test("returns a deeply nested array - [[1, 2], [3, 4], [[5]]]", () => {
  let array = [[1, 2], [3, 4], [[5]]];
  let result = stringifyArray(array);
  expect(result).toBe("[[1, 2], [3, 4], [[5]]]");
});

test("can stringify an empty array", () => {
  let array = [];
  let result = stringifyArray(array);
  expect(result).toBe("[]");
});
