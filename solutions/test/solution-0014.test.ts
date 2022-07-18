import { longestCollatzSequence } from '../proj-0014/index';

describe('Solution for Longest Collatz Sequence', () => {
  const answer = longestCollatzSequence();
  it('Should have the correct result', () => {
    expect(answer).toBe(837799);
  });
});
