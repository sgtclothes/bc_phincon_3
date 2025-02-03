import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 8080;

app.use(cors());
app.use(express.json());
app.use("/", routes);

console.log("TEST")

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
