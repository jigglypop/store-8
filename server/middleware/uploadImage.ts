import multer from 'multer';
import multerS3 from 'multer-s3';
import path from 'path';
import aws from 'aws-sdk';

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

const fileFilter = (req: any, file: any, cb: any) => {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg'
  ) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type, only JPG,JPEG and PNG is allowed!'), false);
  }
};

const upload = multer({
  fileFilter,
  storage: multerS3({
    s3: s3,
    bucket: 'store-8',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read-write',
    key: (req, file, cb) => {
      console.log('file', file);
      cb(null, `review-img/${Date.now()}`);
    },
  }),
});

export default upload;
