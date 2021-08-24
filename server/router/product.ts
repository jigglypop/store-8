import { getProduct, getOptions } from '../controllers/product';
import express, { Router } from 'express';
import wrapAsync from '../utils/wrapAsync';

const productRouter: Router = express.Router();

productRouter.get('/:productId', wrapAsync(getProduct));
productRouter.get('/options/:productId', wrapAsync(getOptions));

export default productRouter;
