import express, { Router } from "express";
import { github, githubtoken } from "../controllers/github";
import wrapAsync from "../util/wrapAsync";

const githubRouter: Router = express.Router();

githubRouter.get("/", wrapAsync(github));
githubRouter.get("/github", wrapAsync(githubtoken));

export default githubRouter;
