import { namesScores } from '../proj-0022/index';

describe('Solution for Names Scores', () => {
  const answer = namesScores();
  it('Should have the correct result', () => {
    expect(answer).toBe(871198282);
  });
});
