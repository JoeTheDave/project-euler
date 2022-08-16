// Longest Collatz Sequence
// https://projecteuler.net/problem=14

const collatzCache = {}

const getNextCollatzNumber = (num: number) => {
  return num % 2 === 0 ? num / 2 : num * 3 + 1
}

const runCollatzSequence = (seed: number) => {
  let sequenceLength = 1
  let iteration = seed
  let cachedResult = undefined
  const sequence = [seed]

  while (iteration !== 1) {
    iteration = getNextCollatzNumber(iteration)
    cachedResult = collatzCache[iteration]
    if (cachedResult) {
      iteration = 1
    } else {
      sequence.push(iteration)
      sequenceLength++
    }
  }
  sequence.forEach((i, idx) => (collatzCache[i] = sequenceLength - idx + (cachedResult || 0)))
  return collatzCache[seed]
}

export const longestCollatzSequence = () => {
  let longestSequence = 0
  let longestSequenceSeed = 0
  for (let seed = 2; seed < 1000000; seed++) {
    const sequenceLength = runCollatzSequence(seed)
    longestSequence = Math.max(longestSequence, sequenceLength)
    if (longestSequence === sequenceLength) {
      longestSequenceSeed = seed
    }
  }
  return longestSequenceSeed
}
