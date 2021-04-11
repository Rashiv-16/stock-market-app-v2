//installed dependencies
import dotenv from "dotenv";
import express from "express";

//db config
import connectDB from "./db/db.js";

dotenv.config();
connectDB();
const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`The App is running on port ${PORT} in ${process.env.NODE_ENV}`);
});
