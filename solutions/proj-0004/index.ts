// Largest Palindrome Product
// https://projecteuler.net/problem=4

const isPalindrome = (num: number) => {
  const numStr = `${num}`;
  const reversed = numStr.split('').reverse().join('');
  return numStr === reversed;
};

export const largestPalindromeProduct = () => {
  let highestPalindrome = 0;
  for (let a = 100; a <= 999; a++) {
    for (let b = 100; b <= 999; b++) {
      const product = a * b;
      if (isPalindrome(product)) {
        if (product > highestPalindrome) {
          highestPalindrome = product;
        }
      }
    }
  }
  return highestPalindrome;
};
