// Summation Of Primes
// https://projecteuler.net/problem=10

import util from '../util';

export const summationOfPrimes = () => {
  const generator = new util.PrimeGenerator();
  do {
    generator.getNext();
  } while (generator.getCurrent() < 2000000);
  const primes = generator.primes;
  primes.pop();
  return primes.reduce((sum, prime) => sum + prime, 0);
};
