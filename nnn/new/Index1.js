const express = require("express");
const err= require("./middleware/ErrorHandler.js");
const middleware= require("./middleware/Middleware.js");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to home page");
});

 
app.use((req, res, next) => {
    const error = new Error("something went wrong!");
    error.statusCode = 404;
    error.status = "failed";
    next(error);
});
 

app.use(err);

app.listen(8000, () => {
    console.log("http://localhost:8000");
});