// 1000 Digit Fibonacci Number
// https://projecteuler.net/problem=25

import { addLargeNumbers } from '../util';

export const oneThousandDigitFibonacciNumber = () => {
  const fibonacciSequence = ['1', '1'];
  do {
    fibonacciSequence.push(
      addLargeNumbers(fibonacciSequence[fibonacciSequence.length - 1], fibonacciSequence[fibonacciSequence.length - 2]),
    );
  } while (fibonacciSequence[fibonacciSequence.length - 1].length < 1000);
  return fibonacciSequence.length;
};
