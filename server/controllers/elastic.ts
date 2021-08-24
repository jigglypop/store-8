import { Request, Response } from 'express';
import HttpError from '../utils/HttpError';
import { err } from '../constants/error';
import Product from '../models/Product';
import { Client } from '@elastic/elasticsearch';

const client = new Client({
  node: process.env.ELASTIC_URL,
});
export const createElastic = async (req: Request, res: Response) => {
  const result = await client.indices.create({
    index: 'products',
    body: {
      settings: {
        analysis: {
          tokenizer: {
            my_ngram_tokenizer: {
              type: 'nGram',
              min_gram: '2',
              max_gram: '3',
            },
          },
          analyzer: {
            my_ngram_analyzer: {
              tokenizer: 'my_ngram_tokenizer',
              type: 'custom',
            },
          },
        },
      },
      mappings: {
        products: {
          properties: {
            title: {
              type: 'string',
              term_vector: 'yes',
              analyzer: 'my_ngram_analyzer',
            },
          },
        },
      },
    },
  });
  res.status(200).json(result);
};
// 엘라스틱 서치에 데이터 집어넣기. 처음 db에 넣을 때 해줘야함
export const setElastic = async (req: Request, res: Response) => {
  const products = await Product.findAll();
  for (let product of products) {
    await client.index({
      index: 'products',

      body: {
        title: product.title,
        id: product.id,
        productImgSrc: product.productImgSrc,
        detailImgSrc: product.detailImgSrc,
        amount: product.amount,
        originalAmount: product.originalAmount,
        sale: product.sale,
        categoryId: product.categoryId,
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
