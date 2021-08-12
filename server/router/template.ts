import express, { Router } from "express";
import { createPage } from "../utils/createPage";

const templateRouter: Router = express.Router();

templateRouter.get("/", (_, res) => {
  res.send(createPage("메인"));
});
templateRouter.get("/login", (_, res) => {
  res.send(createPage("회원가입"));
});
templateRouter.get("/register", (_, res) => {
  res.send(createPage("로그인"));
});
templateRouter.get("/github", (_, res) => {
  res.send(createPage("깃허브 로그인"));
});
templateRouter.get("/three", (_, res) => {
  res.send(createPage("3D"));
});

export default templateRouter;
