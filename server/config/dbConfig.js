import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URI = process.env.MONGO_URI;

mongoose.set("strictQuery", true);
const connection = mongoose.connect(URI).then(() => {
  console.log("Connected to db");
});

export default connection;
