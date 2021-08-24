import express, { Router } from 'express';
import wrapAsync from '../utils/wrapAsync';
import { searchElastic, setElastic } from '../controllers/elastic';

const elasticRouter: Router = express.Router();
elasticRouter.get('/set', wrapAsync(setElastic));
elasticRouter.get('/', wrapAsync(searchElastic));

export default elasticRouter;
