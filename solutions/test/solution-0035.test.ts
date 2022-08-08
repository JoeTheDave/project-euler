import { circularPrimes } from '../proj-0035/index'

describe('Solution for Circular Primes', () => {
  const answer = circularPrimes()
  it('Should have the correct result', () => {
    expect(answer).toBe(55)
  })
})
