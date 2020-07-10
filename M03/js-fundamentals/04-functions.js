// Toda função é hoisting

function hello() {
  let i = 10; // escopo local
  console.log("hello", i);
}

function helloWorld() {
  hello();
  console.log("Hello World!");
}

helloWorld();

// pure-function -> depende do que é passado por parâmetro
function mult(a, b) {
  return a * b;
}

function x2(num) {
  return mult(num, 2);
}

console.log(x2(10));

// arrow-functions -> escopo não é próprio e sim do comp. pai
const mult = (a, b) => a * b;

const x2 = (num) => mult(num, 2);
