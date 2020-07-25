// strings

const name = "Christopher Schott";

// split -> quebra string em vetor no parâmetro passado
// join -> concatena vetor em string interpolando com parâmetro passado
console.log(name.split(" ").join(" <==> "));

const opa = `
  teste
  string
  multilinhas
  Nome: ${name}
  1 + 1 = ${1 + 1}
`;

// alternativa à interpolação de strings
const outra = name + " " + opa;

console.log(opa);
console.log(outra);
