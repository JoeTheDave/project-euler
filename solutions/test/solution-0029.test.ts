import { distinctPowers } from '../proj-0029/index';

describe('Solution for Distinct Powers', () => {
  const answer = distinctPowers();
  it('Should have the correct result', () => {
    expect(answer).toBe(9183);
  });
});
