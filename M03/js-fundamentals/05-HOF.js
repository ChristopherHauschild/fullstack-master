// High-order function

/* função que recebe outra função como parâmetro */

const sum = (a, b) => a + b;
const mult = (a, b) => a * b;

const calc = (op, a, b) => op(a, b);

const c = calc(sum, 10, 5);
console.log(c);

const selectOp = (op) => {
  const ops = {
    "+": sum,
    "*": mult,
  };
  return ops(op);

  // if (op === "+") return sum;
  // if (op === "*") return mult;
};

const d = calc(selectOp("+"), 10, 5);
console.log(d);
