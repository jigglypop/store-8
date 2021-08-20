import express from 'express';
import userRouter from './auth';

import githubRouter from './github';
import categoryRouter from './category';
import productRouter from './product';
import mainRouter from './main';
import questionRouter from './question';

import templateRouter from './template';
import cartRouter from './cart';
import reviewRouter from './review';
import uploadRouter from './upload';

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
rootRouter.use('/api/review', reviewRouter);
rootRouter.use('/api/upload', uploadRouter);

export default rootRouter;
