import express, { Router } from "express";
import { createPage } from "../utils/createPage";
import { routes } from "../../middle/router/routes"
import { IRouterItem } from "../../middle/type/router/router"

const templateRouter: Router = express.Router();

routes.map((item: IRouterItem) => {
  return templateRouter.get(item.path, (_, res) => {
    res.send(createPage(item.title));
  })
})

export default templateRouter;
