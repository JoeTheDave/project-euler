import { doubleBasePalindromes } from '../proj-0036/index';

describe('Solution for Double Base Palindromes', () => {
  const answer = doubleBasePalindromes();
  it('Should have the correct result', () => {
    expect(answer).toBe(872187);
  });
});
