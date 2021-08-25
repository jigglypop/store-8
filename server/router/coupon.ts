import express, { Router } from 'express';
import { get, getAll, add, remove, newCoupon, useCoupon } from '../controllers/coupon';
import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';

const couponRouter: Router = express.Router();

couponRouter.post('/add', jwtMiddleware, wrapAsync(add));
couponRouter.post('/newType', jwtMiddleware, wrapAsync(newCoupon));
couponRouter.post('/useCoupon', jwtMiddleware, wrapAsync(useCoupon));
couponRouter.post('/remove', jwtMiddleware, wrapAsync(remove));
couponRouter.get('/', jwtMiddleware, wrapAsync(get));
couponRouter.get('/all', jwtMiddleware, wrapAsync(getAll));

export default couponRouter;
