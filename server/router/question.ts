import express, { Router } from 'express';

import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';
import {
  createQuestion,
  deleteQuestion,
  getQuestion,
  updateQuestion,
  updateQuestionReply,
} from '../controllers/question';

const questionRouter: Router = express.Router();

questionRouter.get('/:productId', wrapAsync(getQuestion));
questionRouter.post('/:productId', jwtMiddleware, wrapAsync(createQuestion));
questionRouter.put('/', jwtMiddleware, wrapAsync(updateQuestion));
questionRouter.delete('/', jwtMiddleware, wrapAsync(deleteQuestion));

//관리자 전용 - 관리자 체크 middleware 추가 필요
questionRouter.put('/admin/:questionId', wrapAsync(updateQuestionReply));

export default questionRouter;
