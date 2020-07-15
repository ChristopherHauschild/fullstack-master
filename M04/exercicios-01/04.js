const arr = [1, 2, 3, 4, 5, 2, 3, 3, 1, 4, 6, 7];

const howManyTimes = (agg, valueAtual) => {
  // truthy (n !== 0, string não vazia...)

  // se não tiver valor em agg[valueAtual] -> '1' vazio, '2' vazio
  if (!agg[valueAtual]) {
    // '1': 0, '2': 0, '3': 0 ...
    // a partir de agora valor existe
    agg[valueAtual] = 0;
  }
  // quando há outra ocorrência
  // toda vez será setado mais + 1 (0 vira 1)
  agg[valueAtual] = agg[valueAtual] + 1;
  console.log(agg, valueAtual);
  return agg;
};

// utilizando reduce para compor objeto
const quantity = arr.reduce(howManyTimes, {});
console.log(quantity);
