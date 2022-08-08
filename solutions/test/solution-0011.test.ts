import { largestProductInAGrid } from '../proj-0011/index'

describe('Solution for Largest Product In A Grid', () => {
  const answer = largestProductInAGrid()
  it('Should have the correct result', () => {
    expect(answer).toBe(70600674)
  })
})
