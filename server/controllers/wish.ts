import { NextFunction, Request, Response } from 'express';
import Product from '../models/Product';
import Wish from '../models/Wish';
import HttpError from '../utils/HttpError';
import { err } from '../constants/error';

interface IWish {
  userId: string;
  productId: string;
}

// 찜 생성
const createWish = async ({ userId, productId }: IWish) => {
  await Wish.create({
    userId: Number(userId),
    productId: Number(productId),
    productCount: 0,
  });
};
// 찜 삭제
const removeWish = async ({ userId, productId }: IWish) => {
  await Wish.destroy({
    where: { userId, productId },
  });
};
// 찜
export const wish = async (req: Request, res: Response, next: NextFunction) => {
  const { productId } = req.params;
  const { userId } = req.body;
  // 유저 or 상품 아이디가 없을 때
  if (!productId || !userId) throw new HttpError({ ...err.WRONG_ACCESS_ERROR });
  const wish = await Wish.findOne({
    where: { userId, productId },
  });
  if (!wish) {
    await createWish({ userId, productId });
  } else {
    await removeWish({ userId, productId });
  }
  const product = await Product.findOne({
    where: { id: productId },
    include: [
      {
        model: Wish,
        as: 'wishes',
      },
    ],
  });
  res.status(200).json({
    status: 200,
    data: {
      product: product,
    },
  });
};

// 내 좋아요 리스트
export const myWish = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.body;
  // 유저 or 상품 아이디가 없을 때
  if (!userId) throw new HttpError({ ...err.WRONG_ACCESS_ERROR });
  const product = await Product.findAndCountAll({
    include: [
      {
        model: Wish,
        as: 'wishes',
        where: {
          userId: userId,
        },
      },
    ],
  });
  res.status(200).json({
    status: 200,
    data: product,
  });
};
