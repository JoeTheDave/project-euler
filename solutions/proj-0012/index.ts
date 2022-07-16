// Highly Divisible Triangular Number
// https://projecteuler.net/problem=12

import util from '../util';

export const getDivisorsList = (num: number) => {
  const uniqPrimeFactors = [1, ...util.getPrimeFactors(num)].reduce(
    (uniqPrimes, prime) => {
      if (!uniqPrimes.includes(prime)) {
        uniqPrimes.push(prime);
      }
      return uniqPrimes;
    },
    [],
  ) as number[];

  let factorsListLength = 0;
  do {
    factorsListLength = uniqPrimeFactors.length;
    const currentFactors = [...uniqPrimeFactors];
    currentFactors.forEach((p1) => {
      currentFactors.forEach((p2) => {
        const divisor = p1 * p2;
        if (!uniqPrimeFactors.includes(divisor) && num % divisor === 0) {
          uniqPrimeFactors.push(divisor);
        }
      });
    });
  } while (factorsListLength < uniqPrimeFactors.length);

  return uniqPrimeFactors.sort((a, b) => a - b);
};

export const highlyDivisibleTriangularNumber = () => {
  let triangleBase = 0;
  let currentTriangleNumber = 0;
  let divisorCount = 0;
  do {
    triangleBase++;
    currentTriangleNumber += triangleBase;
    const divisors = getDivisorsList(currentTriangleNumber);
    divisorCount = Math.max(divisorCount, divisors.length);
  } while (divisorCount < 500);

  return currentTriangleNumber;
};
