// Distinct Powers
// https://projecteuler.net/problem=29

export const distinctPowers = () => {
  const results = {};
  for (let a = 2; a <= 100; a++) {
    for (let b = 2; b <= 100; b++) {
      results[`${a ** b}`] = true;
    }
  }
  return Object.keys(results).length;
};
