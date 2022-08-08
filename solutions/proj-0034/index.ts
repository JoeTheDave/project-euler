// Digit Factorials
// https://projecteuler.net/problem=34

import { factorial } from '../util'

const factorialCache: { [key: number]: number } = {}
const resolveFactorial = (n: number) => {
  if (!factorialCache[n]) {
    factorialCache[n] = parseInt(factorial(n))
  }
  return factorialCache[n]
}

export const digitFactorials = () => {
  const magicNumbers = []
  for (let x = 3; x <= 99999; x++) {
    const factorialSum = `${x}`
      .split('')
      .map(d => resolveFactorial(parseInt(d)))
      .reduce((sum, num) => sum + num, 0)
    if (factorialSum === x) {
      magicNumbers.push(x)
    }
  }
  return magicNumbers.reduce((sum, num) => sum + num, 0)
}
