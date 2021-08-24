import { Request, Response } from 'express';
import HttpError from '../utils/HttpError';
import { err } from '../constants/error';
import Product from '../models/Product';
import Option from '../models/Option';

const findOne = async (productId: string) => {
  const product = await Product.findOne({
    where: { id: productId },
    include: [
      {
        model: Option,
        as: 'options',
      },
    ],
  });
  return product;
};

export const getProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const product = await findOne(productId);
  if (!product) {
    throw new HttpError({ ...err.TEST_ERROR });
  }
  res.status(200).json({ status: 200, data: product });
};

export const getOptions = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const product = await findOne(productId);
  const options = product?.options;

  if (options) {
    const optionDatas: string[] = [];
    const optionIds: Number[] = [];

    options.forEach((element) => {
      optionDatas.push(element.title);
      optionIds.push(element.id);
    });
    res.status(200).json({
      status: 200,
      data: { title: product?.title, amount: product?.amount, options: optionDatas, optionIds },
    });
  } else {
    res
      .status(200)
      .json({ status: 200, data: { title: product?.title, amount: product?.amount, options: [] } });
  }
};

export const getProductTitleInfo = async (productId: number) => {
  const productSnapshot = await Product.findOne({
    attributes: ['title', 'productImgSrc'],
    where: { id: productId },
  });

  return {
    id: productId,
    title: productSnapshot?.getDataValue('title'),
    productImgSrc: productSnapshot?.getDataValue('productImgSrc'),
  };
};
