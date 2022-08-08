import { specialPythagoreanTriplet } from '../proj-0009/index'

describe('Solution for Special Pythagorean Triplet', () => {
  const answer = specialPythagoreanTriplet()
  it('Should have the correct result', () => {
    expect(answer).toBe(31875000)
  })
})
