import express from 'express';
import userRouter from './auth';
import categoryRouter from './category';
import githubRouter from './github';
import productRouter from './product';
import templateRouter from './template';

const rootRouter = express();

rootRouter.use('/', templateRouter);
rootRouter.use('/callback', githubRouter);
rootRouter.use('/api/auth', userRouter);
rootRouter.use('/api/category', categoryRouter);
rootRouter.use('/api/product', productRouter);

export default rootRouter;
