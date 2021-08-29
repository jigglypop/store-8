import express, { Router } from 'express';
import { check, login, register, updateImg, updateProfile } from '../controllers/auth';
import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';

const userRouter: Router = express.Router();

userRouter.post('/login', wrapAsync(login));
userRouter.post('/register', wrapAsync(register));
userRouter.get('/check', jwtMiddleware, wrapAsync(check));
userRouter.put('/', jwtMiddleware, wrapAsync(updateImg));
userRouter.put('/check', jwtMiddleware, wrapAsync(updateProfile));

export default userRouter;
