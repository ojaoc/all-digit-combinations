export const getAllDigitCombination = (num: number): number[] => {
  const result: number[] = [];
  let digits: string[] = String(num).split("");

  if (digits.length === 1) return digits.map((dig) => Number(dig));

  for (let i = 0; i < digits.length; i++) {
    for (let l = 0; l < digits.length - 1; l++) {
      result.push(Number(digits.join("")));

      [digits[l], digits[l + 1]] = [digits[l + 1], digits[l]];
    }
  }

  return result;
};
