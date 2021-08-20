import { Request, Response } from 'express';
import HttpError from '../utils/HttpError';
import { err } from '../constants/error';
import Product from '../models/Product';
import Option from '../models/Option';

export const getProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const product = await Product.findOne({
    where: { id: productId },
    include: [
      {
        model: Option,
        as: 'options',
      },
    ],
  });
  if (!product) {
    throw new HttpError({ ...err.TEST_ERROR });
  }
  res.status(200).json({ status: 200, data: product });
};
