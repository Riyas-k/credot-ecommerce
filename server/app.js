import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connection from "./config/dbConfig.js";
import UserRouter from "./routes/route.js";

const app = express();
dotenv.config();
app.use(
  cors({
    methods: ["GET", "POST", "DELETE"],
  })
);
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/user", UserRouter);
const PORT = process.env.PORT;

//db set
connection;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
