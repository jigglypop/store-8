import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';
import express from 'express';
import { myWish, wish } from '../controllers/wish';

const wishRouter = express.Router();
wishRouter.get('/:productId', jwtMiddleware, wrapAsync(wish));
wishRouter.get('/', jwtMiddleware, wrapAsync(myWish));

export default wishRouter;
