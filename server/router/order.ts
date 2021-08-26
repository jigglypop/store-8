import express, { Router } from 'express';
import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';
import { getAllOrders, createOrder, getMileage, updateOrderState } from '../controllers/order';

const orderRouter: Router = express.Router();

orderRouter.get('/mileage', jwtMiddleware, wrapAsync(getMileage));
orderRouter.post('/confirm/:id', wrapAsync(updateOrderState));
orderRouter.post('/create', jwtMiddleware, wrapAsync(createOrder));
orderRouter.get('/:productId', wrapAsync(getAllOrders));
orderRouter.get('/', wrapAsync(getAllOrders));

export default orderRouter;
