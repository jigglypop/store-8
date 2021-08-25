import express, { Router } from 'express';
import { check, add, remove } from '../controllers/cart';
import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';

const cartRouter: Router = express.Router();

cartRouter.get('/', jwtMiddleware, wrapAsync(check));
cartRouter.post('/add', jwtMiddleware, wrapAsync(add));
cartRouter.post('/remove', jwtMiddleware, wrapAsync(remove));

export default cartRouter;
