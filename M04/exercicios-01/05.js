const arr = [1, 2, 3, 4, 4, 2, 5, 7, 7, 3, 9, 11, 11, 8];

const howManyTimes = (agg, valueAtual) => {
  // truthy (n !== 0, string não vazia...)
  if (!agg[valueAtual]) {
    agg[valueAtual] = {
      value: valueAtual,
      occur: 0,
    };
  }
  // quando há outra ocorrência
  // toda vez será setado mais + 1 (0 vira 1)
  agg[valueAtual].occur = agg[valueAtual].occur + 1;
  return agg;
};

// atribuindo à um objeto a contagem de vezes que o array contém o número
const count = arr.reduce(howManyTimes, {});
// retirando as chaves desse objeto
const keys = Object.keys(count);
// filtrando os objetos em que o número de ocorrências é 1
const unique = keys.filter((key) => count[key].occur === 1);
// pegando o atributo value desses objetos
const uniqueValues = unique.map((val) => count[val].value);

console.log(uniqueValues);
