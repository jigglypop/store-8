import express, { Router } from 'express';

// import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';
import { getAllOrders, createOrder } from '../controllers/order';

const orderRouter: Router = express.Router();

orderRouter.get('/', wrapAsync(getAllOrders));
orderRouter.post('/create', wrapAsync(createOrder));

export default orderRouter;
