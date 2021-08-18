import express, { Router } from 'express';

import { create, get } from '@server/controllers/product-question';
import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';

const router: Router = express.Router();

// router.post('/create', jwtMiddleware, wrapAsync(create));
// router.get('/', wrapAsync(get));

export default router;
