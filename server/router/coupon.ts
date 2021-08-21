import express, { Router } from 'express';
import { get, add, remove, newCoupon } from '../controllers/coupon';
import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';

const couponRouter: Router = express.Router();

// TODO : jwt middleware 적용하기
couponRouter.post('/add', wrapAsync(add));
couponRouter.post('/newType', wrapAsync(newCoupon));
couponRouter.post('/remove', wrapAsync(remove));
couponRouter.post('/', wrapAsync(get));

export default couponRouter;
