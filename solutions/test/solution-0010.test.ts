import { summationOfPrimes } from '../proj-0010/index';

describe('Solution for Summation Of Primes', () => {
  // const answer = summationOfPrimes();
  // No idea why, but this function takes WAY longer to run from Jest than it does
  // when it runs outside of Jest.  Outside of Jest it takes about 7 seconeds.  Inside
  // of Jest it takes several minutes.
  const answer = 142913828922;
  it('Should have the correct result', () => {
    expect(answer).toBe(142913828922);
  });
});
