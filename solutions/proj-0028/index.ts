// Number Spiral Diagonals
// https://projecteuler.net/problem=28

// const ur = (2 * x + 1) ** 2;
// const lr = (2 * x - 1) ** 2 + 2 * x;
// const ll = (2 * x - 1) ** 2 + 4 * x;
// const ul = (2 * x - 1) ** 2 + 6 * x;
// const all = (2 * x + 1) ** 2 + 3 * (2 * x - 1) ** 2 + 12 * x;

export const numberSpiralDiagonals = () => {
  let result = 1;
  for (let x = 1; x <= 500; x++) {
    result += (2 * x + 1) ** 2 + 3 * (2 * x - 1) ** 2 + 12 * x;
  }
  return result;
};
