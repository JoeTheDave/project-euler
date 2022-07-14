import { multiplesOf3or5 } from '../proj-0001/index';

describe('Solution for Multiples of 3 or 5', () => {
  const answer = multiplesOf3or5();
  it('Should have the correct result', () => {
    expect(answer).toBe(233168);
  });
});
