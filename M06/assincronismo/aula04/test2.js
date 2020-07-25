const fs = require("fs");

/*
  função que retorna uma promise
*/
function readdir(path) {
  /*
    promise que faz a leitura dos arquivos do diretório atual
    e resolve retornando a lista ou então rejeita informando o erro
  */
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, list) => {
      if (err) {
        reject(console.log(err));
      } else {
        resolve(console.log(list));
      }
    });
  });
}

/*
  tratando de forma assíncrona a função que retorna
  uma promise para resolve o metódo de leitura dos
  arquivos do diretório
*/
const getLists = async () => {
  console.log("before");
  const res = await readdir("./");
  console.log("after");
};

getLists();
