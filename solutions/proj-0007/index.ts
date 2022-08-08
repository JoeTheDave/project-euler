// 10001st Prime
// https://projecteuler.net/problem=7

import { PrimeGenerator } from '../util'

export const tenThousandAndFirstPrime = () => {
  const generator = new PrimeGenerator()
  do {
    generator.getNext()
  } while (generator.primes.length < 10001)
  return generator.primes[10000]
}
