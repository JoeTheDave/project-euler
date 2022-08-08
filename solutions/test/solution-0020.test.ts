import { factorialDigitSum } from '../proj-0020/index'

describe('Solution for Factorial Digit Sum', () => {
  const answer = factorialDigitSum()
  it('Should have the correct result', () => {
    expect(answer).toBe(648)
  })
})
