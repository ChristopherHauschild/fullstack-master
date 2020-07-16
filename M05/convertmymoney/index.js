const express = require("express");
const app = express();
const path = require("path");

const convert = require("./lib/convert");

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // criando diretório views
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/cotacao", (req, res) => {
  // valores passados para a query a partir do form
  // action do form aponta para '/cotacao'
  const { cotacao, quantidade } = req.query;

  if (cotacao && quantidade) {
    // se cotacao e quantidade foram diferentes de false
    const conversao = convert.convert(cotacao, quantidade);

    res.render("cotacao", {
      error: false, // para tratar o if em cotacao
      cotacao: convert.toMoney(cotacao),
      quantidade: convert.toMoney(quantidade),
      conversao: convert.toMoney(conversao),
    });
  } else {
    res.render("cotacao", {
      error: "Valores inválidos",
    });
  }
});

app.listen(port, (err) => {
  if (err) {
    console.log("Não foi possível iniciar a aplicação");
  } else {
    console.log(`Aplicação iniciada na porta ${3000}`);
  }
});
