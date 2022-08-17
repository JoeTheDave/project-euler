// Names Scores
// https://projecteuler.net/problem=22

import { readFileSync } from 'fs'
import { generateWordScore } from '../util'

const resourcePath = `${__dirname}/../../resources/p022_names.txt`

export const namesScores = () => {
  const data = readFileSync(resourcePath, 'utf8').replace(/\"/g, '').split(',').sort()
  return data.map((name, idx) => generateWordScore(name) * (idx + 1)).reduce((sum, score) => sum + score)
}
