import express, { Router } from 'express';
import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';
import { getAllOrders, createOrder, getMileage, updateOrderState } from '../controllers/order';

const orderRouter: Router = express.Router();

orderRouter.post('/mileage', jwtMiddleware, wrapAsync(getMileage));
orderRouter.post('/create', jwtMiddleware, wrapAsync(createOrder));
orderRouter.post('/confirm/:id', jwtMiddleware, wrapAsync(updateOrderState));
orderRouter.get('/mileage', jwtMiddleware, wrapAsync(getMileage));
orderRouter.post('/create', jwtMiddleware, wrapAsync(createOrder));
orderRouter.get('/:productId', jwtMiddleware, wrapAsync(getAllOrders));
orderRouter.get('/', jwtMiddleware, wrapAsync(getAllOrders));

export default orderRouter;
