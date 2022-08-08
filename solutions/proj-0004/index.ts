// Largest Palindrome Product
// https://projecteuler.net/problem=4

import { isPalindrome } from '../util'

export const largestPalindromeProduct = () => {
  let highestPalindrome = 0
  for (let a = 100; a <= 999; a++) {
    for (let b = 100; b <= a; b++) {
      const product = a * b
      if (isPalindrome(product)) {
        if (product > highestPalindrome) {
          highestPalindrome = product
        }
      }
    }
  }
  return highestPalindrome
}
