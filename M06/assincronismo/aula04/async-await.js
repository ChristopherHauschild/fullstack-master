// açúcar sintático para transformar function em promise
const fs = require("fs");

function time(ms) {
  return new Promise((resolve, reject) => {
    // resolve promise enviando ms
    setTimeout(() => resolve(ms), ms);
  });
}

function readdir(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, function (err, lista) {
      if (err) {
        reject(err);
      } else {
        resolve(lista);
      }
    });
  });
}

async function ola() {
  const list = await readdir("./");
  console.log(list);
}

async function ola2() {
  const ms = await time(2000);
  console.log("terminou", 20);
}

console.log(ola());
console.log(ola2());
