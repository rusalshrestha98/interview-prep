// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1,
// and where every number thereafter is equal to the sum of the previous two numbers.

const fib = (num) => {
  if (num <= 2) return 1;
  return fib(num - 2) + fib(num - 1);
};

console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));
