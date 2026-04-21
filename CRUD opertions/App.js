const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use routes
app.use('/', userRoutes);

app.listen(3000, () => {
    console.log("Server is live on http://localhost:3000");
});