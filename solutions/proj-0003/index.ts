// Largest Prime Factor
// https://projecteuler.net/problem=3

const getPrimeFactor = (product: number) => {
  let factor = 1;
  for (let f = 2; f < product; f++) {
    if (product % f === 0) {
      factor = f;
      break;
    }
  }
  return factor;
};

export const getPrimeFactors = (product: number) => {
  const primeFactors = [];
  do {
    const primeFactor = getPrimeFactor(product);
    primeFactors.push(primeFactor);
    product /= primeFactor;
  } while (primeFactors[primeFactors.length - 1] !== 1);
  return [...primeFactors.splice(0, primeFactors.length - 1), product];
};

export const largestPrimeFactor = () => {
  const product = 600851475143;
  const primeFactors = getPrimeFactors(product);
  return Math.max(...primeFactors);
};
