const calculator = (a, op, b) => {
  // const ops = {
  //   "+": (a, b) => a + b,
  //   "-": (a, b) => a - b,
  //   "*": (a, b) => a * b,
  //   "/": (a, b) => a / b,
  // };

  // return ops[op](a, b)

  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  if (op === "/") return a / b;

  return "Operação inválida!";
};

console.log(calculator(10, "+", 20));
console.log(calculator(10, "-", 20));
console.log(calculator(10, "*", 20));
console.log(calculator(10, "/", 20));
console.log(calculator(10, "", 20));
