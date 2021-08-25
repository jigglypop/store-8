import express, { Router } from 'express';
import { get, add, remove, setBase, update } from '../controllers/address';
import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';

const addressRouter: Router = express.Router();

// TODO : jwt middleware 적용하기
addressRouter.post('/add', wrapAsync(add));
addressRouter.post('/update', wrapAsync(update));
addressRouter.post('/setBase', wrapAsync(setBase));
addressRouter.post('/remove', wrapAsync(remove));
addressRouter.post('/', wrapAsync(get));

export default addressRouter;
