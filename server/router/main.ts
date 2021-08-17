import { getMain } from '../controllers/main';
import express, { Router } from 'express';
import wrapAsync from '../utils/wrapAsync';

const mainRouter: Router = express.Router();
mainRouter.get('/', wrapAsync(getMain));
export default mainRouter;
