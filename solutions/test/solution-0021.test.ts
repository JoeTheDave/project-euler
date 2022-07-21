import { amicableNumbers } from '../proj-0021/index';

describe('Solution for Amicable Numbers', () => {
  const answer = amicableNumbers();
  it('Should have the correct result', () => {
    expect(answer).toBe(31626);
  });
});
