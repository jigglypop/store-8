import express, { Router } from "express";
import { createPage } from "../util/createPage";

const templateRouter: Router = express.Router();

templateRouter.get("/", (_, res) => {
  res.send(createPage("메인"));
});
templateRouter.get("/auth", (_, res) => {
  res.send(createPage("회원가입/로그인"));
});


export default templateRouter;
