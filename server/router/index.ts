import express from "express";
import userRouter from "./auth";
import templateRouter from "./template";

const rootRouter = express();

rootRouter.use("/api/auth", userRouter);
rootRouter.use("/", templateRouter);

export default rootRouter;
