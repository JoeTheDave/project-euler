// Coded Triangle Numbers
// https://projecteuler.net/problem=42

import { readFileSync } from 'fs'
import { generateWordScore } from '../util'

const resourcePath = `${__dirname}/../../resources/p042_words.txt`

export const codedTriangleNumbers = () => {
  const triangleNumbers = {}
  for (let x = 1; x <= 20; x++) {
    const tn = 0.5 * x * (x + 1)
    triangleNumbers[tn] = true
  }

  const triangleWordsCount = readFileSync(resourcePath, 'utf8')
    .split(',')
    .reduce((sum, word) => sum + (triangleNumbers[generateWordScore(word)] ? 1 : 0), 0)
  return triangleWordsCount
}
