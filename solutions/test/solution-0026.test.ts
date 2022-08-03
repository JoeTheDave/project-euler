import { reciprocalCycles } from '../proj-0026/index';

describe('Solution for Reciprocal Cycles', () => {
  const answer = reciprocalCycles();
  it('Should have the correct result', () => {
    expect(answer).toBe(983);
  });
});
