import { NextFunction, Request, Response } from 'express';
import Product from '../models/Product';
import Wish from '../models/Wish';
import HttpError from '../utils/HttpError';
import { err } from '../constants/error';
import fetch from 'node-fetch';

// 내 추천 리스트
export const myRecommend = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.body;
  // 유저 or 상품 아이디가 없을 때
  if (!userId) throw new HttpError({ ...err.WRONG_ACCESS_ERROR });
  const products = await Product.findAndCountAll({
    include: [
      {
        model: Wish,
        as: 'wishes',
        where: {
          userId: userId,
        },
        order: [['createdAt', 'ASC']],
      },
    ],
  });
  const productIds = [];
  for (let product of products.rows) {
    productIds.push(product.id);
  }
  const recommend_result = await fetch(`${process.env.FAST_API_URL}/api/recommend`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      productIds: productIds.reverse().slice(0, 3),
    }),
  });
  const recommend_data = await recommend_result.json();
  res.status(200).json({
    status: 200,
    data: recommend_data.recommend,
  });
};
