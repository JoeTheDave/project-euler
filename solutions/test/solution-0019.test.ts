import { countingSundays } from '../proj-0019/index';

describe('Solution for Counting Sundays', () => {
  const answer = countingSundays();
  it('Should have the correct result', () => {
    expect(answer).toBe(171);
    // update this expected value from the list of answers found here https://github.com/luckytoilet/projecteuler-solutions/blob/master/Solutions.md
  });
});
