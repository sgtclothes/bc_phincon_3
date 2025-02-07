import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import routes from "./routes/index.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/", routes);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
