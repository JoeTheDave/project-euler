import { smallestMultiple } from '../proj-0005/index';

describe('Solution for Smallest Multiple', () => {
  const answer = smallestMultiple();
  it('Should have the correct result', () => {
    expect(answer).toBe(232792560);
  });
});
