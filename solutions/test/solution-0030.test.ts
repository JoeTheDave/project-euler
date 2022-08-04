import { digitFifthPowers } from '../proj-0030/index';

describe('Solution for Digit Fifth Powers', () => {
  const answer = digitFifthPowers();
  it('Should have the correct result', () => {
    expect(answer).toBe(443839);
  });
});
