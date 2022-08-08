// Sum Square Difference
// https://projecteuler.net/problem=6

export const sumSquareDifference = () => {
  let sum = 0
  let sumOfSquares = 0
  for (let n = 1; n <= 100; n++) {
    sum += n
    sumOfSquares += n ** 2
  }
  const squareOfSum = sum ** 2
  return squareOfSum - sumOfSquares
}
