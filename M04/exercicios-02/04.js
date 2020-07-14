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

/*
  Atribuindo à stats uma Promise que quando
  executada, faz a leitura do conteúdo do path passado
  por parâmetro e retorna se é um arquivo ou
  diretório.
*/

const stat = (path) =>
  new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        reject(err);
      } else {
        resolve(stats);
      }
    });
  });

/*
  Função criada para determinar, se path passado por parâmetro
  é um arquivo ou não.
*/

const isFile = async (path) => {
  const stats = await stat(path);
  return stats.isFile() ? path : false;
};

/*
  Função que faz a leitura dos directórios e arquivos contidos
  no path passado, e retorna informando se conteúdo é um arquivo
  ou diretório.
*/

const execute = async () => {
  const possibleFiles = await readdir("./");
  const onlyFiles = await Promise.all(possibleFiles.map((f) => isFile(f)));
  console.log(onlyFiles);
};

execute();
