import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';
import express from 'express';
import { myRecommend } from '../controllers/recommend';

const recommendRouter = express.Router();
recommendRouter.get('/', jwtMiddleware, wrapAsync(myRecommend));

export default recommendRouter;
