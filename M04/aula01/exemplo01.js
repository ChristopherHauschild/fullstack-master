// c-like

const value = 10;

if (value === 10) {
  console.log("...");
}

let value2 = 20;
value2 = 30;

console.log(value, value2);

const obj = {
  chave: "valor",
  chave2: "valor2",
};

console.log(obj);

const str = "Christopher";

// functions are first class citizens -> armazenadas em variáveis
// HOF -> função que recebe outra função como parâmetro

const sum = function (a, b) {
  return a + b;
};

const calculator = function (op, a, b) {
  return op(a, b);
};

console.log(calculator(sum, 1, 3));

const arr = [1, 2, 3, 4, 5];

/* percorre todos os items do vetor, convertendo valores
   dos itens para outro valor. */
const double = arr.map((item) => {
  return { original: item, dobrado: item * 2 };
});

console.log(double);

/* percorre todos os items do vetor, filtrando aqueles
   que correspondem às condições definidas. */
const pares = arr.filter((item) => {
  return item % 2 === 0;
});

console.log(pares);

const dobrar = (item) => item * 2;
const somentePares = (item) => item % 2 === 0;

const paresDobrados = arr.filter(somentePares).map(dobrar);

console.log(paresDobrados);

const somar = (acc, curr) => acc + curr;
/* percorre todos os items do vetor, agregando valores
   para retornar uma única saída. */
const somatório = paresDobrados.reduce(somar, 0);

console.log(somatório);
