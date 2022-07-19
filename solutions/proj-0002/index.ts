// Even Fibonacci Numbers
// https://projecteuler.net/problem=2

import { getFibonacciSequence } from '../util';

export const evenFibonacciNumbers = () => {
  const fibonacci = getFibonacciSequence(4000000);
  return fibonacci
    .filter((n) => n % 2 === 0)
    .reduce((sum, num) => sum + num, 0);
};
