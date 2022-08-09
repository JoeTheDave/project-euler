// Pandigital Multiples
// https://projecteuler.net/problem=38

import { isPandigital } from '../util'

export const pandigitalMultiples = () => {
  let largestPandigitalProduct = 0
  for (let x = 1; x <= 9999; x++) {
    let panDigitalString = ''
    for (let p = 1; p <= 9; p++) {
      panDigitalString += x * p
      if (panDigitalString.length >= 9) {
        break
      }
    }
    if (isPandigital(panDigitalString)) {
      const pandigitalNumber = parseInt(panDigitalString)
      if (pandigitalNumber > largestPandigitalProduct) {
        largestPandigitalProduct = pandigitalNumber
      }
    }
  }
  return largestPandigitalProduct
}
