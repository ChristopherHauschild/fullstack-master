// Tipagem fraca

// var -> escopo global & hoisting
var b = "Nome";

// let -> escopo local
let a = 10;
a = "Nome";

// const -> escopo global & não permite atribuições
const d = 20;

const c = {};
c.a = 10;

console.log(a);

const firstName = "Christopher";
const lastName = "Hauschild";
const fullname = firstName + " " + lastName;

console.log(fullname);
