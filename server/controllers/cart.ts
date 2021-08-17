import { Request, Response } from 'express';
import Product from '../models/Product';
import ProductOption from '../models/Option';
import Cart from '../models/Cart';
import HttpError from '../utils/HttpError';
import { err } from '../constants/error';
import { CartData } from '../../middle/type/cart/cart';

export const check = async (req: Request, res: Response) => {
  const { userId } = req.body;
  if (!userId) {
    throw new HttpError({ status: 400, message: '요청한 Body 내용에 User ID가 없습니다.' });
  }

  const carts = await Cart.findAll({ where: { userId } });
  if (!carts) {
    throw new HttpError({ ...err.NO_DATA });
  }

  const result: CartData[] = [];

  // 모든 검색된 product data 에 따라서 데이터를 검색.
  for (let i = 0; i < carts.length; i++) {
    const cartData = carts[i];
    const productData = await Product.findOne({ where: { id: cartData.productId } });
    if (!productData) {
      throw new HttpError({ ...err.NO_DATA });
    }

    const tempData = {
      id: cartData.id,
      imgSrc: productData.productImgSrc,
      title: productData.title,
      count: cartData.productCount,
      amount: productData.amount,
      option: '',
    };

    if (cartData.productOptionId !== null) {
      // 선택된 Option 이 있다면 선택.
      const productOptionData = await ProductOption.findOne({
        where: { id: cartData.productOptionId },
      });

      if (!productOptionData) {
        throw new HttpError({ ...err.NO_DATA });
      }
      tempData.option = productOptionData.title;
    }
    result.push(tempData);
  }
  res.status(200).json({ status: 200, data: JSON.stringify({ cart: result }) });
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
  const { userId, cartIds } = req.body;
  if (!userId) {
    throw new HttpError({ status: 400, message: '요청한 Body 내용에 User ID가 없습니다.' });
  }

  const valid = await Cart.destroy({ where: { id: cartIds } });
  if (!valid) {
    throw new HttpError({ status: 400, message: '요청한 Cart 내역 삭제를 진행 할 수 없었습니다.' });
  }

  res.status(200).json({ status: 200, data: cartIds });
};
