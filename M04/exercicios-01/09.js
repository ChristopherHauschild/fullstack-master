const calculator = (a, op, b) => op(a, b);

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

console.log(calculator(10, sum, 20));
console.log(calculator(10, sub, 20));
console.log(calculator(10, mult, 20));
console.log(calculator(10, div, 20));
