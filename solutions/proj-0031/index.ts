// Coin Sums
// https://projecteuler.net/problem=31

const target = 200
let combinations = 0

const extrapolateCoinCombinations = (remainingCoinOptions: number[], accumulation: number = 0) => {
  const coinOptions = [...remainingCoinOptions]
  const coin = coinOptions.pop()
  for (let c = 0; c <= target / coin; c++) {
    const iterationAmount = accumulation + c * coin
    if (iterationAmount >= target) {
      if (iterationAmount === target) {
        combinations++
      }
      break
    }
    if (coinOptions.length > 0) {
      extrapolateCoinCombinations(coinOptions, iterationAmount)
    }
  }
}

export const coinSums = () => {
  const coinTypes = [1, 2, 5, 10, 20, 50, 100, 200]
  extrapolateCoinCombinations(coinTypes)
  return combinations
}
