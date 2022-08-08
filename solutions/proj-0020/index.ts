// Factorial Digit Sum
// https://projecteuler.net/problem=20

import { factorial } from '../util'

export const factorialDigitSum = () => {
  const result = factorial(100)
  return result
    .split('')
    .map(n => parseInt(n))
    .reduce((sum, num) => sum + num)
}
