// Pandigital Prime
// https://projecteuler.net/problem=41

import { isPrime, pandigitalPermutator } from '../util'

export const pandigitalPrime = () => {
  let largestPandigitalPrime = 0
  let seed = ''
  for (let x = 1; x <= 9; x++) {
    seed += x
    const candidateList = pandigitalPermutator(parseInt(seed))
    for (let c = 0; c < candidateList.length; c++) {
      const candidate = candidateList[c]
      if (isPrime(candidate) && candidate > largestPandigitalPrime) {
        largestPandigitalPrime = candidate
      }
    }
  }
  return largestPandigitalPrime
}
