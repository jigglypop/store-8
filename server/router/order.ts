import express, { Router } from 'express';

// import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';
import { getAllOrders, createOrder, getMileage, updateOrderState } from '../controllers/order';

const orderRouter: Router = express.Router();

orderRouter.get('/', wrapAsync(getAllOrders));
orderRouter.get('/:productId', wrapAsync(getAllOrders));
orderRouter.post('/mileage', wrapAsync(getMileage));
orderRouter.post('/create', wrapAsync(createOrder));
orderRouter.post('/confirm/:id', wrapAsync(updateOrderState));

export default orderRouter;
