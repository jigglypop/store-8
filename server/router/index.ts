import express from 'express';
import userRouter from './auth';
import ProductQuestionRouter from './product-question';
import githubRouter from './github';
import templateRouter from './template';

const rootRouter = express();

rootRouter.use('/api/auth', userRouter);
//TODO: 이름정하기
rootRouter.use('/api/product-question', ProductQuestionRouter);
rootRouter.use('/', templateRouter);
rootRouter.use('/callback', githubRouter);

export default rootRouter;
