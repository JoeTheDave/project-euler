// 10001st Prime
// https://projecteuler.net/problem=7

export const tenThousandAndFirstPrime = () => {
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
  } while (primes.length < 10001);
  return primes[10000];
};
