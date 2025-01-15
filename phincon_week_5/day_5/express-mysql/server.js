import express from "express";
import mysql from "mysql2/promise";
const app = express();
const port = 3000;

const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "phincon-bootcamp",
});

app.get("/", async (req, res) => {
    try {
        const [results, fields] = await connection.query("SELECT * FROM students");
        res.send(results);
    } catch (err) {
        console.log(err);
    }
});

/**
 * 
 * a. Buat endpoint untuk menampilkan data student berdasarkan id
 * b. Buat endpoint untuk menampilkan semua data student yang mengambil subject math
 * c. Buat endpoint untuk mendapatkan nilai rata-rata dari subject english
 * d. Buat endpoint untuk menampilkan semua data student yang memiliki nilai diatas rata-rata
 * 
*/

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
