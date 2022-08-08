import { digitFactorials } from '../proj-0034/index';

describe('Solution for Digit Factorials', () => {
  const answer = digitFactorials();
  it('Should have the correct result', () => {
    expect(answer).toBe(40730);
  });
});
