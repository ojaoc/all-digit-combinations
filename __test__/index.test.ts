import { getAllDigitCombination } from "..";

describe("Should return all possible combination for a set of digits", () => {
  const sortNumArrayCallback = (a: number, b: number): number => a - b;

  it("'5', 1 result", () => {
    const expectedResult = [5];
    expect(getAllDigitCombination(5)).toEqual(expectedResult);
  });

  it("'43', 2 results", () => {
    const expectedResult = [34, 43];
    expect(getAllDigitCombination(43).sort(sortNumArrayCallback)).toEqual(
      expectedResult
    );
  });

  it("'123', 6 results", () => {
    const expectedResult = [123, 132, 213, 231, 312, 321];
    expect(getAllDigitCombination(123).sort(sortNumArrayCallback)).toEqual(
      expectedResult
    );
  });

  it("'9452', 12 results", () => {
    const expectedResult = [
      2594, 2945, 2954, 4529, 4592, 4952, 5249, 5294, 5429, 9245, 9425, 9452,
    ];
    expect(getAllDigitCombination(9452).sort(sortNumArrayCallback)).toEqual(
      expectedResult
    );
  });

  it("'75234', 20 results", () => {
    const expectedResult = [
      23457, 23475, 23547, 25347, 32475, 34275, 34725, 34752, 43752, 47352,
      47523, 47532, 52347, 52374, 52734, 57234, 74523, 75234, 75243, 75423,
    ];
    expect(getAllDigitCombination(75234).sort(sortNumArrayCallback)).toEqual(
      expectedResult
    );
  });
});
