// 3) Qual o resultado? Explique sua resposta.

var fullname = "Tulio Faria";
var obj = {
  fullname: "Jose Silva",
  prop: {
    fullname: "Nome Sobrenome",
    // this -> referencia estrutura de obj onde está inserido
    getFullname: function () {
      return this.fullname;
    },
  },
};

// chamando função dentro do seu contexto
console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;
/* 
  pegando referência e executando função em outro contexto
  valor de this é trocado
*/
console.log(test());

// travando contexto de this
console.log(test.bind(obj)());
console.log(test.bind(obj.prop)());
