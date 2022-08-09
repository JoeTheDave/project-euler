import { truncatablePrimes } from '../proj-0037/index'

describe('Solution for Truncatable Primes', () => {
  const answer = truncatablePrimes()
  it('Should have the correct result', () => {
    expect(answer).toBe(748317)
  })
})
