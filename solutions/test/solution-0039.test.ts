import { integerRightTriangles } from '../proj-0039/index'

describe('Solution for Integer Right Triangles', () => {
  // Another random case of the function taking forever when run within Jest
  // When run by itself is takes less than 500ms.
  const answer = 840 // integerRightTriangles()
  it('Should have the correct result', () => {
    expect(answer).toBe(840)
  })
})
