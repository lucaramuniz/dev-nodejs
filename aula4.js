const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.send(
    "<html><head></head><body><h1>Portal de Noticias</h1></body></html>"
  );
});
app.get("/tecnologia", function (req, res) {
  res.send(
    "<html><head></head><body><h1>Noticias de Tecnologia</h1></body></html>"
  );
});
app.get("/moda", function (req, res) {
  res.send("<html><head></head><body><h1>Noticias de Moda</h1></body></html>");
});
app.get("/desenvolvimento", function (req, res) {
  res.send(
    "<html><head></head><body><h1>Noticias de Desenvolvimento</h1></body></html>"
  );
});

app.listen(3000, function () {
  console.log("servidor rodando com express");
});

// const server = http.createServer(function (req, res) {
//   const categoria = req.url;
//   if (categoria == "/") {
//     res.end(
//       "<html><head></head><body><h1>Portal de Noticias</h1></body></html>"
//     );
//   } else if (categoria == "/tecnologia") {
//     res.end(
//       "<html><head></head><body><h1>Noticias de Tecnologia</h1></body></html>"
//     );
//   } else if (categoria == "/moda") {
//     res.end("<html><head></head><body><h1>Noticias de Moda</h1></body></html>");
//   } else {
//     res.end("<html><head></head><body><h1>ERROR 404</h1></body></html>");
//   }
// });
