export const getFibonacciSequence = (max: number) => {
  const fibonacci = [1, 2];
  do {
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
  } while (fibonacci[fibonacci.length - 1] <= max);
  return fibonacci;
};

const getPrimeFactor = (product: number) => {
  let factor = 1;
  for (let f = 2; f < product; f++) {
    if (product % f === 0) {
      factor = f;
      break;
    }
  }
  return factor;
};

export const getPrimeFactors = (product: number) => {
  const primeFactors = [];
  do {
    const primeFactor = getPrimeFactor(product);
    primeFactors.push(primeFactor);
    product /= primeFactor;
  } while (primeFactors[primeFactors.length - 1] !== 1);
  return [...primeFactors.splice(0, primeFactors.length - 1), product];
};

export const isPalindrome = (term: string | number) => {
  const termString = typeof term === 'string' ? term : `${term}`;
  const reversed = termString.split('').reverse().join('');
  return termString === reversed;
};

export class PrimeGenerator {
  primes: number[];
  initialPrimes: number[];

  constructor() {
    this.primes = [];
    this.initialPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  }

  getCurrent() {
    return this.primes[this.primes.length - 1];
  }

  getNext() {
    if (this.initialPrimes.length) {
      this.primes.push(this.initialPrimes.shift());
    } else {
      let candidate = this.getCurrent() + 2;
      do {
        let isPrime = true;
        for (let n = 0; n < this.primes.length; n++) {
          if (this.primes[n] > Math.sqrt(candidate)) {
            break;
          }
          if (candidate % this.primes[n] === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          this.primes.push(candidate);
        } else {
          candidate += 2;
        }
      } while (this.getCurrent() !== candidate);
    }
    return this.getCurrent();
  }
}

export const getDivisorsList = (num: number) => {
  const uniqPrimeFactors = [1, ...getPrimeFactors(num)].reduce((uniqPrimes, prime) => {
    if (!uniqPrimes.includes(prime)) {
      uniqPrimes.push(prime);
    }
    return uniqPrimes;
  }, []) as number[];

  let factorsListLength = 0;
  do {
    factorsListLength = uniqPrimeFactors.length;
    const currentFactors = [...uniqPrimeFactors];
    currentFactors.forEach((p1) => {
      currentFactors.forEach((p2) => {
        const divisor = p1 * p2;
        if (!uniqPrimeFactors.includes(divisor) && num % divisor === 0) {
          uniqPrimeFactors.push(divisor);
        }
      });
    });
  } while (factorsListLength < uniqPrimeFactors.length);

  return uniqPrimeFactors.sort((a, b) => a - b);
};

export const addLargeNumbers = (num1: string, num2: string) => {
  const num1Chars = num1.split('').reverse();
  const num2Chars = num2.split('').reverse();

  let additionResult = [];
  let carryThe = '0';
  for (let i = 0; i < Math.max(num1Chars.length, num2Chars.length); i++) {
    const smallAddition = `${(parseInt(num1Chars[i]) || 0) + (parseInt(num2Chars[i]) || 0) + (parseInt(carryThe) || 0)}`
      .split('')
      .reverse();

    additionResult.push(smallAddition[0]);
    carryThe = smallAddition[1] ? smallAddition[1] : '0';
  }
  if (carryThe !== '0') {
    additionResult.push(carryThe);
  }
  return additionResult.reverse().join('');
};

export const multiplyLargeNumbers = (num1: string, num2: string) => {
  const num1Chars = num1.split('').reverse();
  const num2Chars = num2.split('').reverse();

  const multiplicationStrings = [];
  num1Chars.forEach((a, ai) => {
    num2Chars.forEach((b, bi) => {
      multiplicationStrings.push(`${parseInt(a) * parseInt(b)}${''.padStart(ai + bi, '0')}`);
    });
  });

  return multiplicationStrings.reduce((sum, num) => addLargeNumbers(sum, num), '0');
};

export const maximumPyramidPathSum = (pyramid: number[][]) => {
  return pyramid.reverse().reduce((prevRow, currentRow) => {
    if (!prevRow.length) {
      return currentRow;
    }
    return currentRow.map((val, idx) => val + Math.max(prevRow[idx], prevRow[idx + 1]));
  }, [])[0];
};

export const factorial = (num: number) => {
  let product = '1';
  for (let x = 1; x <= num; x++) {
    product = multiplyLargeNumbers(product, `${x}`);
  }
  return product;
};

export const sumofDivisors = (num: number) =>
  getDivisorsList(num)
    .slice(0, -1)
    .reduce((sum, num) => sum + num, 0);
