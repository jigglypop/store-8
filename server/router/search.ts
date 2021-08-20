import { getSearch } from '../controllers/search';
import express, { Router } from 'express';
import wrapAsync from '../utils/wrapAsync';

const searchRouter: Router = express.Router();

searchRouter.get('/:searchId', wrapAsync(getSearch));

export default searchRouter;
