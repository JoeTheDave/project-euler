// Summation Of Primes
// https://projecteuler.net/problem=10

export const summationOfPrimes = () => {
  let candidate = 8;
  const primes = [2, 3, 5, 7];
  do {
    let isPrime = true;
    for (let n = 0; n < primes.length; n++) {
      if (candidate % primes[n] === 0) {
        isPrime = false;
        break;
      }
      if (primes[n] > Math.ceil(candidate / 2)) {
        break;
      }
    }
    if (isPrime) {
      primes.push(candidate);
    }
    candidate++;
  } while (primes[primes.length - 1] < 2000000);
  primes.pop();
  return primes.reduce((sum, prime) => sum + prime, 0);
};

const result = summationOfPrimes();

console.log(result);
