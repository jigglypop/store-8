import express, { Router } from 'express';
import { get, add, remove, setBase, update } from '../controllers/address';
import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';

const addressRouter: Router = express.Router();

addressRouter.post('/add', jwtMiddleware, wrapAsync(add));
addressRouter.post('/update', jwtMiddleware, wrapAsync(update));
addressRouter.post('/setBase', jwtMiddleware, wrapAsync(setBase));
addressRouter.post('/remove', jwtMiddleware, wrapAsync(remove));
addressRouter.get('/', jwtMiddleware, wrapAsync(get));

export default addressRouter;
