import express, { Router } from 'express';

import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';
import uploadImage from '../middleware/uploadImage';

const reviewRouter: Router = express.Router();
import {
  createReview,
  getReview,
  updateReview,
  deleteReview,
  likeReview,
} from './../controllers/review';

reviewRouter.get('/:productId', jwtMiddleware, wrapAsync(getReview));
reviewRouter.post('/:productId', jwtMiddleware, wrapAsync(createReview));
reviewRouter.put('/', jwtMiddleware, wrapAsync(updateReview));
reviewRouter.delete('/', jwtMiddleware, wrapAsync(deleteReview));

reviewRouter.post('/like/:reviewId', jwtMiddleware, wrapAsync(likeReview));

export default reviewRouter;
