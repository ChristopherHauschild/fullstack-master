const fs = require("fs");

/*
  Atribuindo à readdir uma Promise que quando
  executada, faz a leitura dos arquivos localizados
  no path passado por parâmetro. Caso essa leitura ocorra
  OK, a Promise é resolvida passando os arquivos, senão, é
  rejeitada acusando o erro
*/

const readdir = (path) =>
  new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });

readdir("./").then((files) => console.log(files));
