import express, { Router } from 'express';

import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';

const myRouter: Router = express.Router();
import { getMyReview, getMyQuestion } from './../controllers/my';

myRouter.get('/review', jwtMiddleware, wrapAsync(getMyReview));
myRouter.get('/question', jwtMiddleware, wrapAsync(getMyQuestion));

export default myRouter;
