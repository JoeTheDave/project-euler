import { lexicographicPermutations } from '../proj-0024/index';

describe('Solution for Lexicographic Permutations', () => {
  const answer = lexicographicPermutations();
  it('Should have the correct result', () => {
    expect(answer).toBe(2783915460);
  });
});
