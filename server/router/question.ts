import express, { Router } from 'express';

// import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';
import {
  createQuestion,
  deleteQuestion,
  getQuestion,
  updateQuestion,
} from '../controllers/question';

const questionRouter: Router = express.Router();

questionRouter.get('/:productId', wrapAsync(getQuestion));
questionRouter.post('/:productId', wrapAsync(createQuestion));
questionRouter.put('/:productId', wrapAsync(updateQuestion));
questionRouter.delete('/:productId', wrapAsync(deleteQuestion));

export default questionRouter;
