const fs = require("fs");

const sleep = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const readFile = (path) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

const writeFile = (path, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });

const execute = async () => {
  console.log("Olá");
  await sleep(2000);
  console.log("Depois de 2segs");
  try {
    const data = await readFile("01.js");
    await writeFile("01-copy.js", data);
  } catch (error) {
    console.log(error);
  }
};

execute();
