import { numberLetterCounts } from '../proj-0017/index';

describe('Solution for Number Letter Counts', () => {
  const answer = numberLetterCounts();
  it('Should have the correct result', () => {
    expect(answer).toBe(21124);
  });
});
