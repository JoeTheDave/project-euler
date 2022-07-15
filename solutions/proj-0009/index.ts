// Special Pythagorean Triplet
// https://projecteuler.net/problem=9

export const specialPythagoreanTriplet = () => {
  for (let a = 1; a <= 1000; a++) {
    for (let b = 1; b <= 1000; b++) {
      const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      if (a + b + c === 1000 && a < b) {
        return a * b * c;
      }
    }
  }
};

specialPythagoreanTriplet();
