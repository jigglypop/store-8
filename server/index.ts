import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import express from "express";
import expressSession from "express-session";
import errorMiddleware from "./middleware/errorMiddleware";
import { sequelize } from "./models";
import rootRouter from "./router";
import corsMiddleware from "./middleware/corsMiddleware";

config();
sequelize.sync();
const app = express();
app.use(cors());
app.use(corsMiddleware);
app.use(express.static("dist"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(
  expressSession({
    secret: process.env.SESSION_KEY ?? "",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(rootRouter);
app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
