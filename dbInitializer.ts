import { migrate } from './server/utils/migrate';
import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';

import Category from './server/models/Category';
import User from './server/models/User';
import Product from './server/models/Product';
import Option from './server/models/Option';
import Cart from './server/models/Cart';
import Address from './server/models/Address';
import Wish from './server/models/Wish';
import Coupon from './server/models/Coupon';
import UserCoupon from './server/models/UserCoupon';
import Order from './server/models/Order';
import Question from './server/models/Question';
import Review from './server/models/Review';
import ReviewImg from './server/models/ReviewImg';
import Refund from './server/models/Refund';
import ReviewLike from './server/models/ReviewLike';

dotenv.config();
const sequelize = new Sequelize({
  database: process.env.DB_NAME || 'moonbangoo',
  dialect: 'mysql',
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD,
  models: [
    User,
    Product,
    Option,
    Category,
    Address,
    Wish,
    Coupon,
    UserCoupon,
    Order,
    Question,
    Review,
    ReviewImg,
    Refund,
    Cart,
    ReviewLike,
  ],
});

// 데이터베이스 마이그레이션(테이블 날릴 때 한번 하시고 주석처리하세요)
migrate();
