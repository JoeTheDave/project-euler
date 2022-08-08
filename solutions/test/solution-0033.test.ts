import { digitCancellingFractions } from '../proj-0033/index'

describe('Solution for Digit Cancelling Fractions', () => {
  const answer = digitCancellingFractions()
  it('Should have the correct result', () => {
    expect(answer).toBe(100)
  })
})
