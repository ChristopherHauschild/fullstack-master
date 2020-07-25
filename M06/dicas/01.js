// Debug de NodeJS com Chrome DevTools

// -> node --inspect: gera link para debug no Chrome

// acessar chrome://inspect/

const express = require("express");
const app = express();

const port = 3000;

app.get("/", function (req, res) {
  console.log(">>here..." + new Date().getTime());
  res.send("Hello World 222!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
