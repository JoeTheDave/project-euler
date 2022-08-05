// Digit Factorials
// https://projecteuler.net/problem=34

import { factorial } from '../util';

const factorialCache: { [key: number]: number } = {};
const resolveFactorial = (n: number) => {
  if (!factorialCache[n]) {
    factorialCache[n] = parseInt(factorial(n));
  }
  return factorialCache[n];
};

export const digitFactorials = () => {
  const magicNumbers = [];
  for (let x = 3; x <= 9999999; x++) {
    const factorialSum = `${x}`
      .split('')
      .map((d) => resolveFactorial(parseInt(d)))
      .reduce((sum, num) => sum + num, 0);
    // console.log(`${x} - ${factorialSum} ${factorialSum === x ? '*****' : ''}`);
    if (factorialSum === x) {
      magicNumbers.push(x);
    }
  }
  return 0; //magicNumbers.reduce((sum, num) => sum + num, 0);
};
