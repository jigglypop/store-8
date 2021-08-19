import express, { Router } from 'express';

// import jwtMiddleware from '../middleware/jwtMiddleware';
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

reviewRouter.get('/:productId', wrapAsync(getReview));
reviewRouter.post('/:productId', wrapAsync(createReview));
reviewRouter.put('/:productId', wrapAsync(updateReview));
reviewRouter.delete('/:productId', wrapAsync(deleteReview));

reviewRouter.put('/like/:productId', wrapAsync(likeReview));

export default reviewRouter;
