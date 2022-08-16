import { pandigitalPrime } from '../proj-0041/index'

describe('Solution for Pandigital Prime', () => {
  const answer = pandigitalPrime()
  it('Should have the correct result', () => {
    expect(answer).toBe(7652413)
  })
})
