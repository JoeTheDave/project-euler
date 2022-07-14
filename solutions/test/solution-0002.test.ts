import { evenFibonacciNumbers } from '../proj-0002/index';

describe('Solution for Even Fibonacci Numbers', () => {
  const answer = evenFibonacciNumbers();
  it('Should have the correct result', () => {
    expect(answer).toBe(4613732);
  });
});
