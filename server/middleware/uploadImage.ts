import multer from 'multer';
import multerS3 from 'multer-s3';
import path from 'path';
import AWS from 'aws-sdk';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const storageS3 = multerS3({
  s3,
  bucket: 'store-8',
  contentType: multerS3.AUTO_CONTENT_TYPE, //multer-S3가 타입 알아서 찾아줌
  acl: 'public-read',
  key: function (req, file, cb) {
    let extension = path.extname(file.originalname);
    cb(null, Date.now().toString() + extension);
  }, //파일이름: 파일이름 + 날짜 + extension
});

export default multer({ storage: storageS3 });
