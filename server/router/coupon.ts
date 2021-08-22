import express, { Router } from 'express';
import { get, add, remove, newCoupon, useCoupon } from '../controllers/coupon';
import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';

const couponRouter: Router = express.Router();

// TODO : jwt middleware 적용하기
couponRouter.post('/add', wrapAsync(add));
couponRouter.post('/newType', wrapAsync(newCoupon));
couponRouter.post('/useCoupon', wrapAsync(useCoupon));
couponRouter.post('/remove', wrapAsync(remove));
couponRouter.post('/', wrapAsync(get));

export default couponRouter;
