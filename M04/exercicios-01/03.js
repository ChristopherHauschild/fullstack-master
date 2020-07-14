const arr = [1, 2, 3, 4, 5, 6];

const odd = (item) => item % 2 !== 0;
const sumOdd = (acc, cur) => acc + cur;

const sumOddTotal = arr.filter(odd).reduce(sumOdd, 0);

console.log(sumOddTotal);

// ou

const sumOddTotal2 = arr
  .filter((item) => item % 2 !== 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(sumOddTotal2);
