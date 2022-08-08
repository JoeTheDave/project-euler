// Non Abundant Sums
// https://projecteuler.net/problem=23

import { sumofDivisors } from '../util'

const maxNumber = 28123

export const nonAbundantSums = () => {
  const abundantNums = []
  for (let n = 10; n <= maxNumber; n++) {
    const sum = sumofDivisors(n)
    if (sum > n) {
      abundantNums.push(n)
    }
  }

  const abundantSums = {}
  for (let a = 0; a < abundantNums.length; a++) {
    for (let b = 0; b <= a; b++) {
      const sum = abundantNums[a] + abundantNums[b]
      if (sum <= maxNumber) {
        abundantSums[sum] = 1
      }
    }
  }

  let nonAbundantSums = []
  for (let x = 1; x <= maxNumber; x++) {
    if (!abundantSums[x]) {
      nonAbundantSums.push(x)
    }
  }

  return nonAbundantSums.reduce((sum, num) => sum + num, 0)
}
