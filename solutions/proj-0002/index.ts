// Even Fibonacci Numbers
// https://projecteuler.net/problem=2

class Fibonacci {
  terms: number[];
  evenSum: number;

  constructor() {
    this.terms = [1, 2];
    this.evenSum = 0;
  }

  getNextTerm() {
    const newTerm = this.terms[0] + this.terms[1];
    this.terms.shift();
    this.terms.push(newTerm);
  }

  getCurrentTerm() {
    return this.terms[1];
  }

  isCurrentTermEven() {
    return this.getCurrentTerm() % 2 === 0;
  }

  evaluateCurrentTerm() {
    if (this.isCurrentTermEven()) {
      this.evenSum += this.getCurrentTerm();
    }
  }
}

export const evenFibonacciNumbers = () => {
  const fibonacci = new Fibonacci();
  let exitCondition = false;

  do {
    fibonacci.evaluateCurrentTerm();
    fibonacci.getNextTerm();
    if (fibonacci.getCurrentTerm() > 4000000) {
      exitCondition = true;
    }
  } while (!exitCondition);

  return fibonacci.evenSum;
};
