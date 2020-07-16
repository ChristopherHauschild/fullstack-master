let b = 20; // inteiro
b = 1.0; // float

let name = "Pedro"; // string

let obj = {
  // objeto
  name: 10, // chave: valor
  obj: {
    a: 1,
  },
};

let c = obj.obj.a;
// ou
let key = "obj";
// utilizando colchetes para 'navegar' entre propriedades do objeto
let d = obj[key]["a"];

let arr = [1, 2, 3, 4, 5]; // vetor

console.log(arr[1]);

let funcao = function (func) {
  func("função");
};

let funcaoCopia = funcao;

funcaoCopia(console.log);
