const express = require('express');
const app = express();

app.get("/home", (req, res) => {
    res.send("Welcome home");
});

app.get("/search", (req, res) => { 
    const data = req.query.name;

    if (!data) {
        res.send("search without result");
    } else {
        res.send(`
            <h1>search result found</h1>
            ${data}
            <br>
            <a href="/home">go to home</a>
        `);
    }
});

app.listen(3000, () => {
    console.log("Server at http://localhost:3000");
});
