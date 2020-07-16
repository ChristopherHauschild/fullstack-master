// 2) Qual o resultado?

var a = 1;

function someFunction(number) {
  function otherFunction(input) {
    // consegue acessar variáveis pai
    return a;
  }

  a = 5;

  return otherFunction;
}

// firstResult -> passa a representar otherFunction
var firstResult = someFunction(9);
var result = firstResult(2);

console.log(result);

// ou

var result2 = someFunction(9)(2);
