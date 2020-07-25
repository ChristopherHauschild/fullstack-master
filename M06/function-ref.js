// EXECUÇÃO COM ERRO

const fs = require("fs");
const path = "./";

console.log(fs.readdirSync(path), "Síncrono");

// --> não se pode invocar função, e sim referenciá-la,
// pois callback será executado depois
fs.readdir(path, ver(err, success));

function ver(err, success) {
  if (err) {
    console.log(err);
  } else {
    console.log(success);
  }
}

// CORREÇÃO

const fs = require("fs");
const path = "./";

console.log(fs.readdirSync(path), "Síncrono");

// apenas passando referência para função, não a executando
fs.readdir(path, ver);
// ou
// chamando função
fs.readdir(path, (err, success) => ver(err, success));

function ver(err, success) {
  if (err) {
    console.log(err);
  } else {
    console.log(success);
  }
}

// PASSANDO PATH PARA FN

/* 
  bind -> cria nova função, injetando contexto (neste caso null)
  e fixando params (path), da direita para esquerda
*/
fs.readdir(path, ver.bind(null, path, "outro"));

function ver(caminho, outro, err, success) {
  console.log("listing path", caminho, outro);
  if (err) {
    console.log(err);
  } else {
    console.log(success);
  }
}
