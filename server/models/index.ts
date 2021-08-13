import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import User from './User';
import Product from './Product';

dotenv.config();
export const sequelize = new Sequelize({
  database: process.env.DB_NAME || 'moonbangoo',
  dialect: 'mysql',
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD,
  models: [User, Product],
});

const db = {
  sequelize: sequelize,
  Sequelize: Sequelize,
};
export default db;
