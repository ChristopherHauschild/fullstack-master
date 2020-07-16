// High Order Functions

// funções que recebem outra função como parâmetro

function teste(acao) {
  acao();
}
teste(() => console.log("opa"));

const arr = [1, 2, 3, 4];

// mapeia valores para outros valores
// retorna um novo vetor
const dobro = arr.map((val) => val * 2);
console.log(dobro);

// percorre vetor
arr.forEach((val) => console.log(val));

// reduz vetor para algum valor | 0 -> valor em que redução irá iniciar
const soma = arr.reduce((prev, curr) => prev + curr, 0);
console.log(soma);

// se valor retornar true entra, se false não
// aplicando a lógica do filter em uma variável
const impares = (val) => val % 2 === 0;

const cascata = arr
  .filter(impares)
  .map((val) => val * 2)
  .reduce((prev, curr) => prev + curr, 0);

console.log(cascata);
