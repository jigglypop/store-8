import { Request, Response } from 'express';
import HttpError from '../utils/HttpError';
import { err } from '../constants/error';
import Product from '../models/Product';
import { DEFAULT_PAGE_LIMIT, DEFAULT_PAGE } from '../../middle/constants/default';
import { Sequelize } from 'sequelize-typescript';

export const getCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const { page, limit, order } = req.query;
  // 어떤 순으로 정렬할지
  let orders: [any, string] = ['amount', 'DESC'];
  // 페이지 입력 없을시 디폴트값
  let _page = DEFAULT_PAGE;
  let _limit = DEFAULT_PAGE_LIMIT;
  // 페이지나 limit, 페이지 값이 있을 시(앞의 두개는 장바구니와 좋아요가 업데이트되면 바뀜)
  if (order === '1') {
    orders = ['amount', 'ASC'];
  } else if (order === '2') {
    orders = [
      Sequelize.literal('(SELECT COUNT(*) FROM Wishes WHERE Wishes.productId = Product.id)'),
      'DESC',
    ];
  } else if (order === '3') {
    orders = ['createdAt', 'DESC'];
  } else if (order === '4') {
    orders = ['amount', 'ASC'];
  } else if (order === '5') {
    orders = ['amount', 'DESC'];
  }
  if (page) {
    _page = Number(page) - 1;
  }
  if (limit) {
    _limit = Number(limit);
  }
  // 시퀼라이즈
  let category = null;
  if (categoryId === '0') {
    category = await Product.findAndCountAll({
      order: [orders],
      // 오프셋(밀 넓이)
      offset: Number(_page) * _limit,
      limit: _limit,
    });
  } else {
    category = await Product.findAndCountAll({
      where: { categoryId: categoryId },
      order: [orders],
      // 오프셋(밀 넓이)
      offset: Number(_page) * _limit,
      limit: _limit,
    });
  }

  if (!category) {
    throw new HttpError({ ...err.TEST_ERROR });
  }
  res.status(200).json({ status: 200, data: category });
};
