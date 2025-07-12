const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("sessao/portal");
});
app.get("/tecnologia", function (req, res) {
  res.render("sessao/tecnologia");
});
app.get("/moda", function (req, res) {
  res.render("sessao/moda");
});
app.get("/desenvolvimento", function (req, res) {
  res.render("sessao/desenvolvimento");
});

app.listen(3000, function () {
  console.log("servidor rodando com express");
});
