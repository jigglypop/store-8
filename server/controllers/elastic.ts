import { Request, Response } from 'express';
import HttpError from '../utils/HttpError';
import { err } from '../constants/error';
import Product from '../models/Product';
import { Client } from '@elastic/elasticsearch';

const client = new Client({
  node: process.env.ELASTIC_URL,
});
// 엘라스틱 서치에 데이터 집어넣기. 처음 db에 넣을 때 해줘야함
export const setElastic = async (req: Request, res: Response) => {
  const products = await Product.findAll();
  for (let product of products) {
    await client.index({
      index: 'products',
      body: {
        title: product.title,
        id: product.id,
      },
    });
  }

  res.status(200).json([]);
};

export const searchElastic = async (req: Request, res: Response) => {
  const { title } = req.query;
  if (!title) throw new HttpError({ ...err.NO_PRODUCT_ERROR });
  const { body } = await client.search({
    index: 'products',
    body: {
      query: {
        match: {
          title: title,
        },
      },
    },
  });
  res.status(200).json({ status: 200, data: body.hits.hits });
};
