import { Request, Response } from 'express';
import HttpError from '../utils/HttpError';
import { err } from '../constants/error';
import Product from '../models/Product';

export const getCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const { page, limit } = req.query;
  // 페이지 입력 없을시 디폴트값
  let _page = 1;
  let _limit = 20;
  // 페이지나 limit값이 있을 시
  if (page) {
    _page = Number(page) - 1;
  }
  if (limit) {
    _limit = Number(limit);
  }
  // 시퀼라이즈
  const category = await Product.findAndCountAll({
    where: { categoryId: categoryId },
    order: [['id', 'DESC']],
    offset: Number(_page) * _limit,
    limit: _limit,
  });
  if (!category) {
    throw new HttpError({ ...err.TEST_ERROR });
  }
  res.status(200).json({ status: 200, data: category });
};
