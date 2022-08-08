import { oneThousandDigitFibonacciNumber } from '../proj-0025/index'

describe('Solution for 1000 Digit Fibonacci Number', () => {
  const answer = oneThousandDigitFibonacciNumber()
  it('Should have the correct result', () => {
    expect(answer).toBe(4782)
  })
})
