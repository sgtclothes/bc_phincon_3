require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require("./routes/user.routes");
const carRoutes = require("./routes/car.routes");
const { auth } = require("./middlewares/auth.middleware");
const cors = require("cors");

console.log(process.env.NODE_ENV);

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST"],
    })
);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Phincon Academy!");
});
app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    res.send(`User ID: ${id}`);
});
app.get("/users", (req, res) => {
    const { name } = req.query;
    if (!name) return res.send("Name is required");
    res.send(`User Name: ${name}`);
});
app.post("/users", (req, res) => {
    const { name } = req.body;
    if (!name) return res.send("Name is required");
    res.send(`User Name: ${name}`);
});

app.use("/api/users", userRoutes);
app.use("/api/cars", carRoutes);

app.listen(port, () => {
    console.log(`Express Basic App listening on port ${port}`);
});
