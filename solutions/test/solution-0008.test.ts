import { largestProductInASeries } from '../proj-0008/index';

describe('Solution for Largest Product In A Series', () => {
  const answer = largestProductInASeries();
  it('Should have the correct result', () => {
    expect(answer).toBe(23514624000);
  });
});
