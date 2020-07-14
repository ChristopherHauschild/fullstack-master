const arr = [1, 2, 3, 7];

const sum = (acc, cur) => acc + cur;
const sumTotal = arr.reduce(sum, 0);

console.log(sumTotal);

// ou

const sumTotal2 = arr.reduce((acc, cur) => acc + cur, 0);

console.log(sumTotal2);

// ou

let aux = 0;
for (let i = 0; arr.length; i++) {
  aux = aux + arr[i];
  return aux;
}

console.log(aux);
