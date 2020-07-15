const arr = [1, 2, 2, 4, 3, 5, 7, 3, 6, 0, 9, 11, 11];

const howManyTimes = (agg, valueAtual) => {
  // '1' vazio, '2' vazio ...
  if (!agg[valueAtual]) {
    agg[valueAtual] = {
      value: valueAtual,
      occur: 0,
    };
  }
  // agg em cada posição
  agg[valueAtual].occur = agg[valueAtual].occur + 1;
  // agg geral, união de agg's em todas posições
  return agg;
};

const count = arr.reduce(howManyTimes, {});
const keys = Object.keys(count);
// objetos em que count na posição key é igual a 1
const unique = keys.filter((key) => count[key].occur === 1);
// pegando apenas valores desses objetos
const uniques = unique.map((val) => count[val].value);
console.log(uniques);
