// fs -> lida com o fileSystem
const fs = require("fs");

console.log("11111");

const readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, content) => {
      if (!err) {
        resolve(content.toString());
      } else {
        reject(err);
      }
    });
  });
};

readFile("05-HOF.js").then((content) => {
  console.log(content);
});

// async/await -> é uma promise por baixo dos panos
const run = async () => {
  const content = await readFile("05-HOF.js");
  console.log(content);
  return 111;
};

run();

console.log("22222");
