const fs = require("fs");

console.log("inicio");

// console.log(fs.readdirSync("./")); -> pode travar a thread principal

// processo assíncrono | execução enviada para outra pilha
fs.readdir("./", function (err, lista) {
  if (err) {
    console.log(err);
  } else {
    console.log(lista);
  }
});

console.log("fim");
