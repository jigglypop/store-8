import express, { Router } from 'express';

// import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';
import { createQuestion } from '../controllers/question';

const questionRouter: Router = express.Router();

questionRouter.post('/:productId', wrapAsync(createQuestion));

export default questionRouter;
