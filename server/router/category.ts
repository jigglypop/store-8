import { getCategory } from '../controllers/category';
import express, { Router } from 'express';
import wrapAsync from '../utils/wrapAsync';
import isOwner from '../middleware/isOwner';

const categoryRouter: Router = express.Router();
categoryRouter.get('/:categoryId', isOwner, wrapAsync(getCategory));

export default categoryRouter;
