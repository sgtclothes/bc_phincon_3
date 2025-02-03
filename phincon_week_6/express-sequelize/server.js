require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const routes = require("./routes");
const cors = require("cors");

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
    res.send("Welcome to my API!");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});
