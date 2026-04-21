const express = require("express");
const reqAge = require("./middleware/Middleware.js");
const router= express.Router();

router.use(reqAge);

const app = express();

// Home root
app.get("/", (req, res) => {
    res.send("Welcome");
});


app.get("/about",reqAge, (req, res) => {
    res.send("Welcome to About");
});

router.get("/contact", (req, res) => {
    res.send("Welcome to Contact");
});

// Server start
app.use(router);
app.listen(8000, () => {
    console.log("Server running at http://localhost:8000");
});