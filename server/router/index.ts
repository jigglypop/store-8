import express from 'express';
import userRouter from './auth';

import githubRouter from './github';
import categoryRouter from './category';
import productRouter from './product';
import mainRouter from './main';
import questionRouter from './question';

import templateRouter from './template';

const rootRouter = express();

rootRouter.use('/api/auth', userRouter);
//TODO: 이름정하기
rootRouter.use('/', templateRouter);
rootRouter.use('/callback', githubRouter);
rootRouter.use('/api/auth', userRouter);
rootRouter.use('/api/category', categoryRouter);
rootRouter.use('/api/product', productRouter);
rootRouter.use('/api/main', mainRouter);
rootRouter.use('/api/question', questionRouter);

export default rootRouter;
