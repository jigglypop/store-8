import { Request, Response } from 'express';
import Cart from '../models/Cart';
import HttpError from '../utils/HttpError';
import { err } from '../constants/error';

export const check = async (req: Request, res: Response) => {
  const { userId } = req.body;
  if (!userId) {
    throw new HttpError({ status: 400, message: '요청한 Body 내용에 User ID가 없습니다.' });
  }

  const carts = await Cart.findAll({ where: { userId } });
  if (!carts) {
    throw new HttpError({ ...err.NO_DATA });
  }

  res.status(200).json({ status: 200, data: JSON.stringify(carts) });
};

export const add = async (req: Request, res: Response) => {
  const { userId, productId, productOptionId, productCount } = req.body;
  if (!userId) {
    throw new HttpError({ status: 400, message: '요청한 Body 내용에 User ID가 없습니다.' });
  }

  const valid = await Cart.create({ userId, productId, productOptionId, productCount });
  if (!valid) {
    throw new HttpError({ status: 400, message: '요청한 Cart 내역 추가를 진행 할 수 없었습니다.' });
  }

  res.status(200).json({ status: 200, data: JSON.stringify({ result: '쇼핑카트 추가 성공!' }) });
};

export const remove = async (req: Request, res: Response) => {
  const { userId, cartId } = req.body;
  if (!userId) {
    throw new HttpError({ status: 400, message: '요청한 Body 내용에 User ID가 없습니다.' });
  }

  const valid = await Cart.destroy({ where: { id: cartId } });
  if (!valid) {
    throw new HttpError({ status: 400, message: '요청한 Cart 내역 삭제를 진행 할 수 없었습니다.' });
  }

  res.status(200).json({ status: 200, data: JSON.stringify({ result: '쇼핑카트 삭제 성공!' }) });
};
