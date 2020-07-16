const express = require("express");
const app = express();

const path = require("path");

// view engina para gerar html de forma dinãmica
app.set("view engine", "ejs");
// __dirname -> repositório atual (raíz)
app.set("views", path.join(__dirname, "views"));

// end-point
app.get("/", (req, res) => {
  res.send({ name: "Christopher" });
});

app.get("/users", (req, res) => {
  res.send([{ name: "Christopher" }]);
});

app.get("/page", (req, res) => {
  res.render("page", { name: "Christopher" });
});

app.listen(3000, (err) => {
  console.log(err);
});
