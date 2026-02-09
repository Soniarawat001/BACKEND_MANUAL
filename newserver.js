
const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer((req, res) => {
    const date = new Date().toISOString();
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // Log request
    fs.appendFile(
        "user.txt",
        `${date} and ${pathname} : New Request recorded\n`,
        (err) => {
            if (err) console.error(err);
        }
    );

    res.writeHead(200, { "Content-Type": "text/plain" });

    switch (pathname) {
        case "/":
            res.end("Welcome home page");
            break;

        case "/about":
            res.end("Welcome to the about page");
            break;

        default:
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("404 Page Not Found");
    }

}).listen(4000, "localhost", () => {
    console.log("Server running at http://localhost:4000");
});
