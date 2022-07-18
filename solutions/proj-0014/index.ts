// Longest Collatz Sequence
// https://projecteuler.net/problem=14

const getNextCollatzNumber = (num: number) => {
  return num % 2 === 0 ? num / 2 : num * 3 + 1;
};

const generateCollatzSequence = (seed: number) => {
  const collatzSequence = [seed];
  do {
    collatzSequence.push(
      getNextCollatzNumber(collatzSequence[collatzSequence.length - 1]),
    );
  } while (collatzSequence[collatzSequence.length - 1] !== 1);
  return collatzSequence;
};

export const longestCollatzSequence = () => {
  let longestCollatzResults = 0;
  let longestCollatzSeed = 0;
  for (let seed = 2; seed < 1000000; seed++) {
    const collatzResult = generateCollatzSequence(seed);
    longestCollatzResults = Math.max(
      longestCollatzResults,
      collatzResult.length,
    );
    if (longestCollatzResults === collatzResult.length) {
      longestCollatzSeed = seed;
    }
  }
  return longestCollatzSeed;
};
