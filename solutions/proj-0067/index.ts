// Maximum Path Sum II
// https://projecteuler.net/problem=67

const { readFileSync } = require('fs')
import { maximumPyramidPathSum } from '../util'

export const maximumPathSumII = () => {
  const data = readFileSync(`${__dirname}/../../resources/p067_triangle.txt`, 'utf8')
  const pyramid = data.split('\n').map(row => row.split(' ').map(num => parseInt(num)))
  return maximumPyramidPathSum(pyramid.splice(0, 100))
}
