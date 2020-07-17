const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// css | images | arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/quotation", (req, res) => {
  const { by, from, quantity } = req.query;

  res.render("quotation", {
    by,
    from,
    quantity,
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log(`Couldn't start the app`);
  } else {
    console.log(`Application is running on port ${port}`);
  }
});
