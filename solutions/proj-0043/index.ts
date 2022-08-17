// Sub String Divisibility
// https://projecteuler.net/problem=43

import { pandigitalPermutator } from '../util'

export const subStringDivisibility = () => {
  const panditialList: string[] = pandigitalPermutator(1234567890, true) as string[]
  const primesList = [2, 3, 5, 7, 11, 13, 17]
  const magicNumbers = []
  panditialList.forEach(num => {
    let isWinner = true
    for (let n = 1; n <= 7; n++) {
      if (parseInt(num.substring(n, n + 3)) % primesList[n - 1] !== 0) {
        isWinner = false
        break
      }
    }
    if (isWinner) {
      magicNumbers.push(parseInt(num))
    }
  })
  return magicNumbers.reduce((sum, num) => sum + num, 0)
}
