const http = require("http");
const fs = require("fs");
const aderss= 'https://www.localhost:8000/category/search?name=sonia';
//const myURL=url.parse(aderss,true);
const myURL =new URL(aderss);
console.log(myURL);



