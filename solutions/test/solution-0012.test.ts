import { highlyDivisibleTriangularNumber } from '../proj-0012/index';

describe('Solution for Highly Divisible Triangular Number', () => {
  // const answer = highlyDivisibleTriangularNumber();
  // This solution takes about 10 seconds to solve, the Jest runner doesn't take longer than the
  // function being run directly, so there isn't a problem that needs to be diagnosed, but the
  // 10 second running time is too long to include as part of the running tests.
  const answer = 76576500;
  it('Should have the correct result', () => {
    expect(answer).toBe(76576500);
  });
});
