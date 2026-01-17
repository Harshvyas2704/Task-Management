import express from "express";
import { connectDB } from "./config/connectDB.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

connectDB()
  .then(() => {
    console.log("Data base connction successful");
    app.listen(process.env.PORT, () => {
      console.log("App listen on port ", process.env.PORT);
    });
  })
  .catch((e) => {
    console.log(e);
  });
