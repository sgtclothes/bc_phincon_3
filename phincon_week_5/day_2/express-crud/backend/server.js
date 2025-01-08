require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 8080;
const routes = require("./routes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./config/swagger-output.json");

const app = express();

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    })
);
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
