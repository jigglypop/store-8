import express, { Router } from 'express';
import { check, add, remove } from '../controllers/cart';
import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';

const cartRouter: Router = express.Router();

// TODO : jwt middleware 적용하기
cartRouter.get('/', jwtMiddleware, wrapAsync(check));
cartRouter.post('/add', wrapAsync(add));
cartRouter.post('/remove', wrapAsync(remove));

export default cartRouter;
