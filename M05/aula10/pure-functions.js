// pure function

// o retorno depende exclusivamente das entradas (params)
const somar = (num1, num2) => num1 + num2;

console.log(somar(100000, 2));

const calc = (num1, num2) => {
  if (num1 > num2) {
    return num1 - num2;
  }
  return num2 - num1;
};

console.log(calc(4, 8));
console.log(calc(13, 7));

const media = (num1, num2) => somar(num1, num2) / 2;

console.log(media(2, 2));
