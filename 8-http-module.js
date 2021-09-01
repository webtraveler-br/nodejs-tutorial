const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === "/") {
    res.end("Home page brother");
  } else if (req.url === "/about") {
    // we can send it this way
    res.write("About page, what are you trying to find?", (err) => {
      err ? console.log(err) : null;
      res.end();
    });
  } else {
    res.end("404 not found");
  }
});

server.listen(5000);
