// Smallest Multiple
// https://projecteuler.net/problem=5

import { getPrimeFactors } from '../proj-0003/index';

const mergePrimeFactors = (
  accumlatedPrimeFactors: number[],
  newPrimeFactors: number[],
) => {
  const primes = [...accumlatedPrimeFactors];
  const additions = [];
  newPrimeFactors.forEach((f) => {
    if (primes.includes(f)) {
      primes.splice(primes.indexOf(f), 1);
    } else {
      additions.push(f);
    }
  });
  return [...accumlatedPrimeFactors, ...additions];
};

export const smallestMultiple = () => {
  let primeFactors = [];
  for (let n = 20; n >= 2; n--) {
    primeFactors = mergePrimeFactors(primeFactors, getPrimeFactors(n));
  }
  const result = primeFactors.reduce((product, val) => product * val, 1);
  return result;
};
