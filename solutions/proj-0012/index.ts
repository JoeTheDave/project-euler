// Highly Divisible Triangular Number
// https://projecteuler.net/problem=12

import { getDivisorsList } from '../util'

export const highlyDivisibleTriangularNumber = () => {
  let triangleBase = 0
  let currentTriangleNumber = 0
  let divisorCount = 0
  do {
    triangleBase++
    currentTriangleNumber += triangleBase
    const divisors = getDivisorsList(currentTriangleNumber)
    divisorCount = Math.max(divisorCount, divisors.length)
  } while (divisorCount < 500)

  return currentTriangleNumber
}
