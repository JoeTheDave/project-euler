import { pandigitalMultiples } from '../proj-0038/index'

describe('Solution for Pandigital Multiples', () => {
  const answer = pandigitalMultiples()
  it('Should have the correct result', () => {
    expect(answer).toBe(932718654)
  })
})
