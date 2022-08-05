import { coinSums } from '../proj-0031/index';

describe('Solution for Coin Sums', () => {
  const answer = coinSums();
  it('Should have the correct result', () => {
    expect(answer).toBe(73682);
  });
});
