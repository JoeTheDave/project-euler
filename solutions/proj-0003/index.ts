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

export const largestPrimeFactor = () => {
  let product = 600851475143;
  const primeFactors = [];
  do {
    const primeFactor = getPrimeFactor(product);
    primeFactors.push(primeFactor);
    product /= primeFactor;
  } while (primeFactors[primeFactors.length - 1] !== 1);
  primeFactors.pop();
  primeFactors.push(product);

  return Math.max(...primeFactors);
};
