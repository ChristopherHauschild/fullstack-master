const fs = require("fs");

// function que retorna uma promise
function readdir(path) {
  return new Promise((resolve, reject) => {
    // path, function(err, list) {}
    fs.readdir(path, (err, list) => {
      if (err) {
        reject(console.log(err));
      } else {
        resolve(console.log(list));
      }
    });
  });
}

const getList = async () => {
  console.log("before");
  await readdir("./");
  console.log("after");
};

getList();
