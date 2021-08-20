import express, { Router } from 'express';

// import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';
import { getAllRefunds } from '../controllers/refund';

const refundRouter: Router = express.Router();

refundRouter.get('/', wrapAsync(getAllRefunds));

export default refundRouter;
