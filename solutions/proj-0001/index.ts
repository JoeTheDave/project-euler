// Multiples of 3 or 5
// https://projecteuler.net/problem=1

export const multiplesOf3or5 = () => {
  let sum = 0;
  for (let x = 1; x < 1000; x++) {
    if (x % 3 === 0 || x % 5 === 0) {
      sum += x;
    }
  }
  return sum;
};
