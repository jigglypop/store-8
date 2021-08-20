import express, { Router } from 'express';

// import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';
import { getAllOrders } from '../controllers/order';

const orderRouter: Router = express.Router();

orderRouter.get('/', wrapAsync(getAllOrders));

export default orderRouter;
