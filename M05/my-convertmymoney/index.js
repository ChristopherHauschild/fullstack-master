const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, (err) => {
  if (err) {
    console.log(`Couldn't start the app`);
  } else {
    console.log(`Application is running on port ${port}`);
  }
});
