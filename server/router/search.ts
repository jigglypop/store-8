import { getSearch } from '../controllers/search';
import express, { Router } from 'express';
import wrapAsync from '../utils/wrapAsync';
import isOwner from '../middleware/isOwner';

const searchRouter: Router = express.Router();
searchRouter.get('/:searchId', isOwner, wrapAsync(getSearch));

export default searchRouter;
