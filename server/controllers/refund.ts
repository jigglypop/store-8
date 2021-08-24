import { Request, Response } from 'express';
import { err } from '../constants/error';
import Refund from '../models/Refund';
import Order from '../models/Order';
import Option from '../models/Option';
import HttpError from '../utils/HttpError';
import { decodeToken, getAccessToken } from '../utils/jwt';
import { dateStringFormat } from '../utils/date';
import { makeWhereQueryWithDate } from '../utils/make-query';
import Product from '../models/Product';
import { IRefund } from '@middle/type/myRefund/myRefund';

//상품 문의 조회
export const getAllRefunds = async (req: Request, res: Response) => {
  const { startDate, endDate }: { startDate?: string; endDate?: string } = req.query;
  const userId = 1; // decode JWT를 통해 가져와야함.

  let refunds = await Refund.findAll({
    where: { userId, ...makeWhereQueryWithDate('createdAt', startDate, endDate) },
    include: [
      {
        model: Order,
        as: 'order',
        include: [
          {
            model: Product,
            as: 'product',
            attributes: ['title', 'productImgSrc'],
          },
        ],
      },
    ],
  });

  const results: IRefund[] = refunds.map((refund) => {
    const result: IRefund = {
      id: refund.id,
      orderNumber: refund.order.orderNumber,
      title: refund.order.product.title,
      productAmount: refund.order.productAmount,
      productCount: refund.order.productCount,
      state: refund.order.state,
      isConfirmed: refund.isConfirmed,
      productImgSrc: refund.order.product.productImgSrc,
      date: refund.createdAt.toString(),
    };

    return result;
  });

  res.status(200).json({ data: results });
};
