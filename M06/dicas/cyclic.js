// -> --inspect-brk

function solution(A, K) {
  const total = A.length;
  const result = [];
  for (let i = 0; i < total; i++) {
    // debug -> result = [1: 3, 2: 8, ...]
    // similar aos testes de mesa
    // testagem do for passo a passo
    const index = (i + K) % total;
    result[index] = A[i];
  }
  return result;
}

console.log(solution([3, 8, 9, 7, 6], 1));
console.log(solution([3, 8, 9, 7, 6], 2));
