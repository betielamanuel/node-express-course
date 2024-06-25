//This program should use the built-in http module to create a simple web server that listens on port 3000.
//This is done with the createServer function.
const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.end("Welcome to the homepage!\n");
  } else if (req.url === "/about") {
    res.end("This is the about page.\n");
  } else if (req.url === "/contact") {
    res.end("Contact us at contact@example.com.\n");
  } else {
    res.statusCode = 404;
    res.end("404 Not Found\n");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
