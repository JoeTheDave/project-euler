// Pandigital Products
// https://projecteuler.net/problem=32

import { isPandigital } from '../util'

export const pandigitalProducts = () => {
  const products = {}
  for (let a = 1; a <= 2000; a++) {
    for (let b = 1; b <= 2000; b++) {
      const p = a * b
      if (isPandigital(`${a}${b}${p}`)) {
        products[p] = true
      }
    }
  }
  return Object.keys(products).reduce((sum, num) => sum + parseInt(num), 0)
}
