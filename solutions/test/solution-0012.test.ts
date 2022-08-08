import { highlyDivisibleTriangularNumber } from '../proj-0012/index'

describe('Solution for Highly Divisible Triangular Number', () => {
  const answer = highlyDivisibleTriangularNumber()
  it('Should have the correct result', () => {
    expect(answer).toBe(76576500)
  })
})
