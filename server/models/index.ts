import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import Category from './Category';
import User from './User';
import { migrate } from '../utils/migrate';
import Product from './Product';
import Option from './Option';
import Cart from './Cart';

dotenv.config();
export const sequelize = new Sequelize({
  database: process.env.DB_NAME || 'moonbangoo',
  dialect: 'mysql',
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD,
  models: [User, Category, Product, Option, Cart],
});

// 데이터베이스 마이그레이션(테이블 날릴 때 한번 하시고 주석처리하세요)
migrate();

const db = {
  sequelize: sequelize,
  Sequelize: Sequelize,
};
export default db;
