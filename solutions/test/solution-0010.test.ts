import { summationOfPrimes } from '../proj-0010/index'

describe('Solution for Summation Of Primes', () => {
  const answer = summationOfPrimes()
  it('Should have the correct result', () => {
    expect(answer).toBe(142913828922)
  })
})
