import express, { Router } from "express";
import { check, login, register, updateImg } from "../controllers/auth";
import jwtMiddleware from "../middleware/jwtMiddleware";
import wrapAsync from "../util/wrapAsync";

const userRouter: Router = express.Router();

userRouter.post("/login", wrapAsync(login));
userRouter.post("/register", wrapAsync(register));
userRouter.get("/check", jwtMiddleware, wrapAsync(check));
userRouter.put("/", jwtMiddleware, wrapAsync(updateImg));

export default userRouter;
