import express, { Router } from 'express';
import wrapAsync from '../utils/wrapAsync';
import { createElastic, searchElastic, setElastic } from '../controllers/elastic';

const elasticRouter: Router = express.Router();
elasticRouter.get('/set', wrapAsync(setElastic));
elasticRouter.get('/', wrapAsync(searchElastic));
elasticRouter.put('/create', wrapAsync(createElastic));

export default elasticRouter;
