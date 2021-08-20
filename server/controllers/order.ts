import { Request, Response } from 'express';
import { err } from '../constants/error';
import Refund from '../models/Refund';
import Order from '../models/Order';
import HttpError from '../utils/HttpError';
import { decodeToken, getAccessToken } from '../utils/jwt';
import { dateStringFormat } from '../utils/date';
import { makeWhereQueryWithDate } from '../utils/make-query';
import Product from '../models/Product';

interface IResult {
  date: Date; // order day
  id: number; // orderId : for key
  orderNumber: string; // order
  title: string; // productId
  option?: string; //
  productAmount: number;
  productCount: number;
  state: string; // 주문상태
  isConfirmed: boolean; // 확인/리뷰
  productImgSrc: string;
}

//상품 문의 조회
export const getAllOrders = async (req: Request, res: Response) => {
  const { startDate, endDate }: { startDate?: string; endDate?: string } = req.query;
  const userId = 1; // decode JWT를 통해 가져와야함.

  console.log('getAllRefunds 호출');

  let refunds = await Order.findAll({
    where: { userId, ...makeWhereQueryWithDate('createdAt', startDate, endDate) },
    include: [
      {
        model: Product,
        as: 'product',
        attributes: ['title', 'productImgSrc'],
      },
    ],
  });

  const results: IResult[] = refunds.map((order) => {
    const result: IResult = {
      id: order.id,
      orderNumber: order.orderNumber,
      title: order.product.title,
      productAmount: order.productAmount,
      productCount: order.productCount,
      state: order.state,
      isConfirmed: order.isConfirmed,
      productImgSrc: order.product.productImgSrc,
      date: new Date(order.createdAt),
    };

    console.log('만든 result', result);
    return result;
  });

  res.status(200).json({ data: results });
};
