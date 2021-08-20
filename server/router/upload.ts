import express, { Router } from 'express';

// import jwtMiddleware from '../middleware/jwtMiddleware';
import wrapAsync from '../utils/wrapAsync';

import uploadImage from '../middleware/uploadImage';
import { uploadToS3 } from '../controllers/upload';

const uploadRouter: Router = express.Router();

//최대 8장
uploadRouter.post('/', uploadImage.single('image'), (req, res) => {
  console.log(req.file);
});

export default uploadRouter;
