import express, { Router } from 'express';

import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';

const myRouter: Router = express.Router();
import { getMyReview } from './../controllers/review';

myRouter.get('/review', jwtMiddleware, wrapAsync(getMyReview));

export default myRouter;
