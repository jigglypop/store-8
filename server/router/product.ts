import { getProduct } from '../controllers/product';
import express, { Router } from 'express';
import wrapAsync from '../utils/wrapAsync';

const productRouter: Router = express.Router();

productRouter.get('/:productId', wrapAsync(getProduct));

export default productRouter;
