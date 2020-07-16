// context == this

const obj = {
  var1: 10,
  get: function () {
    // this -> acessar propriedade de outro scope e mesmo context
    return this.var1;
  },
};

// bind -> fixa novo context para a variável
console.log(obj.get.bind({ var1: 20 }));
