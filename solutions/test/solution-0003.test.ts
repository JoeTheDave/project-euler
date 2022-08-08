import { largestPrimeFactor } from '../proj-0003/index'

describe('Solution for Largest Prime Factor', () => {
  const answer = largestPrimeFactor()
  it('Should have the correct result', () => {
    expect(answer).toBe(6857)
  })
})
