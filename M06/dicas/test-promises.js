const fs = require("fs");

const readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
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

readFile("promises-test.js").then((contents) =>
  writeFile("test-promises.js", contents)
);
