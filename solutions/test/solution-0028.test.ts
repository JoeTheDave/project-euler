import { numberSpiralDiagonals } from '../proj-0028/index';

describe('Solution for Number Spiral Diagonals', () => {
  const answer = numberSpiralDiagonals();
  it('Should have the correct result', () => {
    expect(answer).toBe(669171001);
  });
});
