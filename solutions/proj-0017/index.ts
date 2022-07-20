// Number Letter Counts
// https://projecteuler.net/problem=17

const baseDigitMap = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
};

const tensDigitMap = {
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety',
};

const build2DigitNum = (num) => {
  if (num <= 19) {
    return baseDigitMap[num];
  }
  const nums = `${num}`.split('');
  return `${tensDigitMap[nums[0]]}${nums[1] !== '0' ? `-${baseDigitMap[nums[1]]}` : ''}`;
};

const build3DigitNum = (num) => {
  const nums = `${num}`.split('');
  const twoDigitNum = parseInt(nums[1] + nums[2]);
  return `${baseDigitMap[nums[0]]} hundred${twoDigitNum > 0 ? ` and ${build2DigitNum(twoDigitNum)}` : ''} `;
};

const verbalizeNumber = (num: number) => {
  if (num <= 99) {
    return build2DigitNum(num);
  }
  if (num <= 999) {
    return build3DigitNum(num);
  }
  return 'one thousand';
};

export const numberLetterCounts = () => {
  const words = [];
  for (let x = 1; x <= 1000; x++) {
    words.push(verbalizeNumber(x));
  }
  return words.join('').replace(/ /g, '').replace(/-/g, '').length;
};
