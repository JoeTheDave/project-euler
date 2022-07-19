// 10001st Prime
// https://projecteuler.net/problem=7

export class PrimeGenerator {
  primes: number[];
  initialPrimes: number[];

  constructor() {
    this.primes = [];
    this.initialPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  }

  getCurrent() {
    return this.primes[this.primes.length - 1];
  }

  getNext() {
    if (this.initialPrimes.length) {
      this.primes.push(this.initialPrimes.shift());
    } else {
      let candidate = this.getCurrent() + 2;
      do {
        let isPrime = true;
        for (let n = 0; n < this.primes.length; n++) {
          if (this.primes[n] > Math.sqrt(candidate)) {
            break;
          }
          if (candidate % this.primes[n] === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          this.primes.push(candidate);
        } else {
          candidate += 2;
        }
      } while (this.getCurrent() !== candidate);
    }
    return this.getCurrent();
  }
}

export const tenThousandAndFirstPrime = () => {
  const generator = new PrimeGenerator();
  do {
    generator.getNext();
  } while (generator.primes.length < 10001);
  return generator.primes[10000];
};
