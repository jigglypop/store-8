import express from 'express';
import userRouter from './auth';

import githubRouter from './github';
import categoryRouter from './category';
import productRouter from './product';
import mainRouter from './main';
import questionRouter from './question';
import refundRouter from './refund';
import orderRouter from './order';

import templateRouter from './template';
import cartRouter from './cart';
import reviewRouter from './review';
import uploadRouter from './upload';
import searchRouter from './search';
import wishRouter from './wish';

import couponRouter from './coupon';
import addressRouter from './address';

const rootRouter = express();

rootRouter.use('/api/auth', userRouter);

rootRouter.use('/', templateRouter);
rootRouter.use('/callback', githubRouter);
rootRouter.use('/api/auth', userRouter);
rootRouter.use('/api/category', categoryRouter);
rootRouter.use('/api/product', productRouter);
rootRouter.use('/api/main', mainRouter);
rootRouter.use('/api/question', questionRouter);
rootRouter.use('/api/cart', cartRouter);
rootRouter.use('/api/refund', refundRouter);
rootRouter.use('/api/order', orderRouter);
rootRouter.use('/api/review', reviewRouter);
rootRouter.use('/api/upload', uploadRouter);
rootRouter.use('/api/search', searchRouter);
rootRouter.use('/api/wish', wishRouter);
rootRouter.use('/api/coupon', couponRouter);
rootRouter.use('/api/address', addressRouter);

export default rootRouter;
