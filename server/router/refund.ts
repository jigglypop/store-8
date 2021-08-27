import express, { Router } from 'express';

// import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';
import { createRefund, getAllRefunds } from '../controllers/refund';
import jwtMiddleware from '../middleware/jwtMiddleware';

const refundRouter: Router = express.Router();

refundRouter.get('/', jwtMiddleware, wrapAsync(getAllRefunds));
refundRouter.post('/create/:orderId', jwtMiddleware, wrapAsync(createRefund));

export default refundRouter;
