import express, { Router } from 'express';
import { check, add, remove, getLocal, addLocal } from '../controllers/cart';
import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';

const cartRouter: Router = express.Router();

cartRouter.post('/getLocal', wrapAsync(getLocal));

cartRouter.get('/', jwtMiddleware, wrapAsync(check));
cartRouter.post('/add', jwtMiddleware, wrapAsync(add));
cartRouter.post('/remove', jwtMiddleware, wrapAsync(remove));
cartRouter.post('/addLocal', jwtMiddleware, wrapAsync(addLocal));

export default cartRouter;
