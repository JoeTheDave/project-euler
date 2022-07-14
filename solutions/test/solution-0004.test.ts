import { largestPalindromeProduct } from '../proj-0004/index';

describe('Solution for Largest Palindrome Product', () => {
  const answer = largestPalindromeProduct();
  it('Should have the correct result', () => {
    expect(answer).toBe(906609);
  });
});
