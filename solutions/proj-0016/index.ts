// Power Digit Sum
// https://projecteuler.net/problem=16

import { multiplyLargeNumbers } from '../util'

export const powerDigitSum = () => {
  const product: string = Array(20)
    .fill(`${2 ** 50}`)
    .reduce((product, num) => multiplyLargeNumbers(product, num), '1')
  const result = product.split('').reduce((sum, num) => sum + parseInt(num), 0)
  return result
}
