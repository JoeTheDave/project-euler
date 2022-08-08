import { tenThousandAndFirstPrime } from '../proj-0007/index'

describe('Solution for 10001st Prime', () => {
  const answer = tenThousandAndFirstPrime()
  it('Should have the correct result', () => {
    expect(answer).toBe(104743)
  })
})
