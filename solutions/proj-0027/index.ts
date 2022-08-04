// Quadratic Primes
// https://projecteuler.net/problem=27

import { PrimeGenerator } from '../util';

const generator = new PrimeGenerator();

const evaluateQuadraticCoefficients = (a: number, b: number) => {
  let n = -1;
  let exitCondition = false;
  do {
    n++;
    const result = Math.pow(n, 2) + a * n + b;
    if (result <= 1) {
      exitCondition = true;
    }
    if (!generator.isPrime(result)) {
      exitCondition = true;
    }
  } while (!exitCondition);
  return n;
};

export const quadraticPrimes = () => {
  let candidates = [];
  let mostPrimes = 0;
  for (let a = -999; a <= 999; a++) {
    for (let b = -1000; b <= 1000; b++) {
      const result = evaluateQuadraticCoefficients(a, b);
      if (result > mostPrimes) {
        mostPrimes = result;
        candidates = [a, b];
      }
    }
  }

  return candidates[0] * candidates[1];
};
