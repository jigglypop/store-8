import { getCategory } from '../controllers/category';
import express, { Router } from 'express';
import wrapAsync from '../utils/wrapAsync';

const categoryRouter: Router = express.Router();
categoryRouter.get('/:categoryId', wrapAsync(getCategory));
export default categoryRouter;
