const fs = require("fs");
const path = "./";

console.log(fs.readdirSync(path), "Síncrono");

// fs.readdir(path, ver(err, success));

// fs.readdir(path, (e, s) => ver(e, s));
// fs.readdir(path, ver.bind(null, path));
fs.readdir(path, ver);

function ver(caminho, err, success) {
  console.log("listing", caminho);
  if (err) {
    console.log(err);
  } else {
    console.log(success);
  }
}
