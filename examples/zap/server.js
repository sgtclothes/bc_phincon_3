// app.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/search", (req, res) => {
    const { query } = req.query;
    const sql = `SELECT * FROM products WHERE name = '${query}'`;
    res.send(`Query SQL: ${sql}`);
});

app.get("/comment", (req, res) => {
    const { comment } = req.query;
    res.send(`Komentar Anda: ${comment}`);
});

app.post("/transfer", (req, res) => {
    const { amount, toAccount } = req.body;
    res.send(`Transfer ${amount} ke akun ${toAccount} berhasil!`);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
