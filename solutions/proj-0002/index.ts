// Even Fibonacci Numbers
// https://projecteuler.net/problem=2

export const getFibonacciSequence = (max: number) => {
  const fibonacci = [1, 2];
  do {
    fibonacci.push(
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2],
    );
  } while (fibonacci[fibonacci.length - 1] <= max);
  return fibonacci;
};

export const evenFibonacciNumbers = () => {
  const fibonacci = getFibonacciSequence(4000000);
  return fibonacci
    .filter((n) => n % 2 === 0)
    .reduce((sum, num) => sum + num, 0);
};
