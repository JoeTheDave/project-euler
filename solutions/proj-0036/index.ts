// Double Base Palindromes
// https://projecteuler.net/problem=36

import { isPalindrome } from '../util'

export const doubleBasePalindromes = () => {
  const results = []
  for (let x = 1; x < 1000000; x++) {
    if (isPalindrome(x) && isPalindrome(Number(x).toString(2))) {
      results.push(x)
    }
  }
  return results.reduce((sum, num) => sum + num, 0)
}
