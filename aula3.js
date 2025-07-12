const http = require("http");
const server = http.createServer(function (req, res) {
  const categoria = req.url;
  if (categoria == "/") {
    res.end(
      "<html><head></head><body><h1>Portal de Noticias</h1></body></html>"
    );
  } else if (categoria == "/tecnologia") {
    res.end(
      "<html><head></head><body><h1>Noticias de Tecnologia</h1></body></html>"
    );
  } else if (categoria == "/moda") {
    res.end("<html><head></head><body><h1>Noticias de Moda</h1></body></html>");
  } else {
    res.end("<html><head></head><body><h1>ERROR 404</h1></body></html>");
  }
});
server.listen(3000);
