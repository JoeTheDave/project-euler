import { quadraticPrimes } from '../proj-0027/index'

describe('Solution for Quadratic Primes', () => {
  const answer = quadraticPrimes()
  it('Should have the correct result', () => {
    expect(answer).toBe(-59231)
  })
})
