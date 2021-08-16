import express, { Router } from 'express';
import { check, add, remove } from '../controllers/cart';
import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';

const cartRouter: Router = express.Router();

cartRouter.post('/add', wrapAsync(add));
cartRouter.post('/remove', wrapAsync(remove));
cartRouter.get('/', jwtMiddleware, wrapAsync(check));

export default cartRouter;
