import express from "express";
import userRouter from "./auth";

const rootRouter = express();

rootRouter.use("/api/auth", userRouter);

export default rootRouter;
