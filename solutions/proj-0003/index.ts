// Largest Prime Factor
// https://projecteuler.net/problem=3

import { getPrimeFactors } from '../util'

export const largestPrimeFactor = () => {
  const product = 600851475143
  const primeFactors = getPrimeFactors(product)
  return Math.max(...primeFactors)
}
