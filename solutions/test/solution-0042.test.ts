import { codedTriangleNumbers } from '../proj-0042/index'

describe('Solution for Coded Triangle Numbers', () => {
  const answer = codedTriangleNumbers()
  it('Should have the correct result', () => {
    expect(answer).toBe(162)
  })
})
