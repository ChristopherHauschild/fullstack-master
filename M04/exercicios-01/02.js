const arr = [1, 2, 3, 4, 5, 6];

const pairs = (item) => item % 2 === 0;
const sumPairs = (acc, cur) => acc + cur;

const sumPairsTotal = arr.filter(pairs).reduce(sumPairs, 0);

console.log(sumPairsTotal);

// ou

const sumPairsTotal2 = arr
  .filter((item) => item % 2 === 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(sumPairsTotal2);
