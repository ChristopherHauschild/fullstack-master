const arr = [1, 2, 3, 4, 5, 2, 3, 3, 1, 4, 6, 7];

const howManyTimes = (agg, valueAtual) => {
  // truthy (n !== 0, string não vazia...)
  if (!agg[valueAtual]) {
    agg[valueAtual] = 0;
  }
  // quando há outra ocorrência
  // toda vez será setado mais + 1 (0 vira 1)
  agg[valueAtual] = agg[valueAtual] + 1;
  return agg;
};

const quantity = arr.reduce(howManyTimes, {});
console.log(quantity);
