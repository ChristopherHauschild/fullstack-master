// 1) Qual o resultado da execução deste trecho de código e porquê?

function test() {
  // hoisting

  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }

  // const foo = function() {...} -> evita hoisting
}

test();

// var e functions -> declarações são içadas para cima

// let e const não executam hoisting
