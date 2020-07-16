// JS -> linguagem funcional

// functions podem ser atribuidas à variáveis

const falar = function (palavra) {
  console.log(palavra);
};
falar("opa");

const somar = function (num1, num2) {
  return num1 + num2;
};
console.log(somar(1, 6));

// retorno implícito | não cria um contexto (acessa global)
const somar2 = (num1, num2) => num1 + num2;

// acessa contexto do pai
const mediaNoSense = (soma, num) => {
  soma++;
  num++;
  return soma / num;
};
console.log(somar2(1, 6), mediaNoSense(10, 5));

const animal = (nome, grunido) => nome + " " + grunido();

console.log(animal("cachorro", () => "latir"));
