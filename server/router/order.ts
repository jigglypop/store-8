import express, { Router } from 'express';
import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';
import { getAllOrders, createOrder, getMileage } from '../controllers/order';

const orderRouter: Router = express.Router();

orderRouter.get('/', wrapAsync(getAllOrders));
orderRouter.get('/mileage', jwtMiddleware, wrapAsync(getMileage));
orderRouter.post('/create', jwtMiddleware, wrapAsync(createOrder));

export default orderRouter;
