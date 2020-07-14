const { readFile, writeFile } = require("./fs-promise");

// callback hell

// fs.readFile("temporizadores.js", (err, data) => {
//   fs.writeFile("temporizadores-copy.js", data, (err) => {
//     console.log("Arquivo copiado!");
//   });
// });

// promises + async/await

// readFile("temporizadores.js")
//   .then((data) => writeFile("copy-promise.js", data))
//   .then(() => console.log("Arquivo copiado"))
//   .catch((err) => console.log(err));

// async/await -> açúcar sintático - código parece ser síncrono
// -> retorna Promise

const copyFile = async () => {
  console.log("Hello Async/Await");
  try {
    const data = await readFile("temporizadores.js");
    await writeFile("copy-async-await.js", data);

    console.log("Arquivo lido e copiado!");
  } catch (error) {
    console.log(error);
  }
};

copyFile().then(() => console.log("Fim do async/await"));
