const nums = [1, 2, 3, 4];

const testForEach = (value, index, arr) => {
  console.log(value, index, arr);
};

const retForEach = nums.forEach(testForEach);
console.log("Retorno forEach", retForEach);

const testMap = (value, index, arr) => {
  console.log(value, index, arr);
  return value * 3;
};

const retMap = nums.map(testMap);
console.log("Retorno map", retMap);

// compactar valores

const testReduce = (previous, current, index, arr) => {
  console.log(previous, current, index, arr);
  return previous + current;
};

const retReduce = nums.reduce(testReduce);
console.log("Retorno reduce", retReduce);

const sum = nums.map((a, b) => a * 2).reduce((a, b) => a + b);

console.log("Retorno map + reduce", sum);
