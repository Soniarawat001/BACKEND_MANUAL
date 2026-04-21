const http = require("http");
const fs = require("fs");
// const server = http.createServer((req, res) => {
//     console.log(req);
//     res.end("Welcome to Node.js server");
// });

// server.listen(3001, () => {
//     console.log("Server running at http://localhost:3001");
// });




//chaining method



http.createServer((req, res) => {
    
    console.log(req);
    if(req.url==='/favicon.ico'){
        res.writeHead(284); //no content
        res.end();
        return;
    }
    const date=new Date().toLocaleString();
    fs.appendFile("log.txt",`${date} :New Request recorded\n`,
    (err)=>{
        if(err)console.log(err);

    })
    res.setHeader("Access-Control-Allow-Origin","*");
    res.write("Server Started successfully");
    res.end();

}).listen(3000,"localhost", () => {
    console.log("Server running at http://localhost:3000");
});



