import { Request, Response } from 'express';
import HttpError from '../utils/HttpError';
import { err } from '../constants/error';
import Product from '../models/Product';
import { Op } from 'sequelize';

export const getSearch = async (req: Request, res: Response) => {
  const { title, page, limit } = req.query;
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
  if (!title) new HttpError({ ...err.NO_DATA });
  const products = await Product.findAndCountAll({
    where: {
      title: {
        [Op.like]: '%' + title + '%',
      },
    },
    // 오프셋(밀 넓이)
    offset: Number(_page) * _limit,
    limit: _limit,
  });
  res.status(200).json({ status: 200, data: products });
};
