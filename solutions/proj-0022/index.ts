// Names Scores
// https://projecteuler.net/problem=22

const { readFileSync } = require('fs');

const resourcePath = `${__dirname}/../../resources/p022_names.txt`;

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const generateNameScore = (name: string) =>
  name.split('').reduce((sum, letter) => sum + alphabet.indexOf(letter) + 1, 0);

export const namesScores = () => {
  const data = readFileSync(resourcePath, 'utf8').replace(/\"/g, '').split(',').sort();
  return data.map((name, idx) => generateNameScore(name) * (idx + 1)).reduce((sum, score) => sum + score);
};
