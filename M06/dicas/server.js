const express = require("express");
const app = express();

const port = 3000;

app.get("/", function (req, res) {
  console.log(req.query);
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
