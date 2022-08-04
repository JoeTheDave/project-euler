// Digit Fifth Powers
// https://projecteuler.net/problem=30

export const digitFifthPowers = () => {
  const magicNumbers = [];
  for (let x = 4000; x <= 200000; x++) {
    const sumOfDigitPowers = `${x}`
      .split('')
      .map((d) => parseInt(d) ** 5)
      .reduce((sum, num) => sum + num, 0);
    if (sumOfDigitPowers === x) {
      magicNumbers.push(x);
    }
  }
  return magicNumbers.reduce((sum, num) => sum + num, 0);
};
