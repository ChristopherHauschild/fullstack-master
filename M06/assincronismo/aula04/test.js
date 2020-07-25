const fs = require("fs");

function readdir(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, list) => {
      if (err) {
        reject(err);
      } else {
        resolve(list);
      }
    });
  });
}

async function ola() {
  console.log("before");
  const list = await readdir("./");
  console.log(list);
  console.log("after");
}

ola();

// ESTRUTURA ->
// function
// promise
// método
