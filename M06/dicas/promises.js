// Encadeamento de promises

const fs = require("fs");

const readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
      if (err) {
        reject(err);
      } else {
        resolve(contents.toString());
      }
    });
  });
};

const out = (contents) => {
  setTimeout(() => console.log(contents), 2000);
};

const writeFile = (file, contents) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, contents, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

readFile("promises.js").then((contents) => writeFile("tst.js", contents));

// ou

// Possível dado que readFile retorna o arquivo a ser utilizado como param em writeFile

// bind -> cria nova fn passando contexto e fixando param passado, da direita para esquerda

// .then(writeFile.bind(null, 'tst.js'))

// test
//.then(out)
