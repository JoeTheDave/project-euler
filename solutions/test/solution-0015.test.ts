import { latticePaths } from '../proj-0015/index';

describe('Solution for Lattice Paths', () => {
  const answer = latticePaths();
  it('Should have the correct result', () => {
    expect(answer).toBe(137846528820);
  });
});
