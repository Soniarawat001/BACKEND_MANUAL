
//home route 
//about us
//contect
//services
//404 
//back home button
//log file for everything
const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
 if (req.url === "/favicon.ico") return res.end()
  const date = new Date();

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  fs.appendFile("userlogData.txt",`${date} | ${pathname} : new record\n`,(err) => {
      if (err) console.log(err);
    }
  );
  let filePath = "";

  switch (pathname) {
    case "/":
      filePath = "./pages/home.html";
      break;

    case "/about":
      filePath = "./pages/about.html";
      break;

    case "/contact":
        filePath = "./pages/contact.html";
        break;

    default:
    filePath = "./pages/404.html";
      res.statusCode = 404;
     }

     
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.end("Error loading page");
    } else {
      res.writeHead(res.statusCode || 200, {
        "Content-Type": "text/html",
      });
      res.end(data);
    }
  })
});

server.listen(5000, "localhost", (err) => {
  if (err) console.log(err);
  console.log("Server is listening on http://localhost:5000");
});