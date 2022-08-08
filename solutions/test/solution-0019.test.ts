import { countingSundays } from '../proj-0019/index'

describe('Solution for Counting Sundays', () => {
  const answer = countingSundays()
  it('Should have the correct result', () => {
    expect(answer).toBe(171)
  })
})
