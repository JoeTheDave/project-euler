// Special Pythagorean Triplet
// https://projecteuler.net/problem=9

export const specialPythagoreanTriplet = () => {
  for (let b = 1; b <= 1000; b++) {
    for (let a = 1; a <= b; a++) {
      const c = Math.sqrt(a ** 2 + b ** 2);
      if (a + b + c === 1000 && a < b) {
        return a * b * c;
      }
    }
  }
};

specialPythagoreanTriplet();
