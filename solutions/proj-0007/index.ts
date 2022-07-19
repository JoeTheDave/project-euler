// 10001st Prime
// https://projecteuler.net/problem=7

export const tenThousandAndFirstPrime = () => {
  let candidate = 3;
  const primes = [2];
  do {
    let isPrime = true;
    for (let n = 0; n < primes.length; n++) {
      if (primes[n] > Math.sqrt(candidate)) {
        break;
      }
      if (candidate % primes[n] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(candidate);
    }
    candidate += 2;
  } while (primes.length < 10001);
  return primes[10000];
};
