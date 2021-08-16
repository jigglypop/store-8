import express from 'express';
import userRouter from './auth';
import githubRouter from './github';
import templateRouter from './template';
import cartRouter from './cart';

const rootRouter = express();

rootRouter.use('/api/auth', userRouter);
rootRouter.use('/api/cart', cartRouter);
rootRouter.use('/', templateRouter);
rootRouter.use('/callback', githubRouter);

export default rootRouter;
