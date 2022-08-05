import { pandigitalProducts } from '../proj-0032/index';

describe('Solution for Pandigital Products', () => {
  const answer = pandigitalProducts();
  it('Should have the correct result', () => {
    expect(answer).toBe(45228);
  });
});
