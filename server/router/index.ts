import express from 'express';
import userRouter from './auth';
import categoryRouter from './category';
import githubRouter from './github';
import productRouter from './product';
import mainRouter from './main';
import templateRouter from './template';
import cartRouter from './cart';

const rootRouter = express();

rootRouter.use('/', templateRouter);
rootRouter.use('/callback', githubRouter);
rootRouter.use('/api/auth', userRouter);
rootRouter.use('/api/category', categoryRouter);
rootRouter.use('/api/product', productRouter);
rootRouter.use('/api/main', mainRouter);
rootRouter.use('/api/cart', cartRouter);

export default rootRouter;
