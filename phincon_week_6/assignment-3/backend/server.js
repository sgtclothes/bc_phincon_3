require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(
    cors({
        origin: process.env.APP_URL,
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api", routes);

app.listen(port, () => {
    console.log(`Course App listening on port ${port}`);
});
