// Amicable Numbers
// https://projecteuler.net/problem=21

import { getDivisorsList } from '../util'

const getSumofDivisors = (num: number) =>
  getDivisorsList(num)
    .slice(0, -1)
    .reduce((sum, num) => sum + num, 0)

export const amicableNumbers = () => {
  const amicable = []
  for (let n = 1; n < 10000; n++) {
    if (!amicable.includes(n)) {
      const sumOfDivisors = getSumofDivisors(n)
      const amicableSum = getSumofDivisors(sumOfDivisors)
      if (amicableSum === n && n !== sumOfDivisors) {
        amicable.push(n)
        amicable.push(sumOfDivisors)
      }
    }
  }

  return amicable.reduce((sum, num) => sum + num, 0)
}
