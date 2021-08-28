import { Request, Response } from 'express';
import Product from '../models/Product';
import ProductOption from '../models/Option';
import Cart from '../models/Cart';
import HttpError from '../utils/HttpError';
import { err } from '../constants/error';
import { CartData, ICartAddReq } from '../../middle/type/cart/cart';
import { Transaction } from 'sequelize';

const findAll = async (userId: number) => {
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
      originalAmount: productData.originalAmount,
      option: '',
      optionId: cartData.productOptionId,
      productId: cartData.productId,
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
  return result;
};

export const check = async (req: Request, res: Response) => {
  const { userId } = req.body;
  if (!userId) {
    throw new HttpError({ status: 400, message: '요청한 Body 내용에 User ID가 없습니다.' });
  }

  let result = await findAll(userId);

  res.status(200).json({ data: result });
};

export const getLocal = async (req: Request, res: Response) => {
  const { data } = req.body;
  const result: CartData[] = [];

  for (let i = 0; i < data.length; i++) {
    const productResult = await Product.findOne({ where: { id: data[i].productId } });

    const optionId = data[i].productOptionId === 0 ? null : data[i].productOptionId;
    let optionResult = await ProductOption.findOne({ where: { id: optionId } });

    if (productResult) {
      result.push({
        id: 0,
        imgSrc: productResult.productImgSrc,
        title: productResult.title,
        count: data[i].productCount,
        originalAmount: productResult.originalAmount,
        amount: productResult.amount,
        option: optionResult ? optionResult.title : '',
        optionId,
        productId: productResult.id,
      });
    }
  }

  res.status(200).json({ data: result });
};

export const addLocal = async (req: Request, res: Response) => {
  const { userId, data } = req.body;
  if (!userId) {
    throw new HttpError({ status: 400, message: '요청한 Body 내용에 User ID가 없습니다.' });
  }

  data.forEach(async (element: ICartAddReq) => {
    const valid = await Cart.create({
      userId,
      productId: element.productId,
      productOptionId: element.productOptionId,
      productCount: element.productCount,
    });

    if (!valid) {
      throw new HttpError({
        status: 400,
        message: '요청한 Cart 내역 추가를 진행 할 수 없었습니다.',
      });
    }
  });

  let result = await findAll(userId);

  res.status(200).json({ data: result });
};

export const add = async (req: Request, res: Response) => {
  const { userId, productId, productOptionId, productCount } = req.body;
  if (!userId) {
    throw new HttpError({ status: 400, message: '요청한 Body 내용에 User ID가 없습니다.' });
  }

  let valid: boolean | [number, Cart[]] | Cart = true;
  const search = await Cart.findOne({ where: { userId, productId, productOptionId } });
  {
    if (search) {
      const count =
        search.productCount + productCount > 100 ? 100 : search.productCount + productCount;
      valid = await Cart.update(
        { productCount: count },
        { where: { userId, productId, productOptionId } }
      );
    } else {
      const count = productCount > 100 ? 100 : productCount;
      valid = await Cart.create({ userId, productId, productOptionId, productCount: count });
    }
  }

  if (!valid) {
    throw new HttpError({
      status: 400,
      message: '요청한 Cart 내역 추가를 진행 할 수 없었습니다.',
    });
  } else {
    let result = await findAll(userId);
    res.status(200).json({ data: result });
  }
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

  let result = await findAll(userId);

  res.status(200).json({ data: result });
};

export const changeAll = async (req: Request, res: Response) => {
  const { userId, productCounts, cartIds } = req.body;
  if (!userId) {
    throw new HttpError({ status: 400, message: '요청한 Body 내용에 User ID가 없습니다.' });
  }

  productCounts.forEach(async (productCount: number, index: number) => {
    const valid = await Cart.update({ productCount }, { where: { id: cartIds[index] } });
    if (!valid) {
      throw new HttpError({
        status: 400,
        message: '요청한 Cart 내역 변경을 진행 할 수 없었습니다.',
      });
    }
  });

  res.status(200).json({ data: 'ok' });
};
