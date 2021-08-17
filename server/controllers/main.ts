import { Request, Response } from 'express';
import HttpError from '../utils/HttpError';
import { err } from '../constants/error';
import Product from '../models/Product';
import { Op } from 'sequelize';

export const getMain = async (req: Request, res: Response) => {
  // 새로나왔어요
  const newProduct = await Product.findAll({
    order: [['createdAt', 'DESC']],
    limit: 8,
  });
  // 세일중
  const saleProduct = await Product.findAll({
    where: {
      sale: {
        [Op.gt]: 0,
      },
    },
    order: [['createdAt', 'DESC']],
    limit: 8,
  });
  // 잘나가요
  const bestProduct = await Product.findAll({
    order: [['id', 'DESC']],
    limit: 4,
  });
  if (!newProduct || !bestProduct || !saleProduct) {
    throw new HttpError({ ...err.TEST_ERROR });
  }
  res.status(200).json({
    status: 200,
    data: {
      sale: saleProduct,
      new: newProduct,
      best: bestProduct,
    },
  });
};
