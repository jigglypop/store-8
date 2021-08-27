import { Request, Response } from 'express';
import { err } from '../constants/error';
import Refund from '../models/Refund';
import Order from '../models/Order';
import Option from '../models/Option';
import HttpError from '../utils/HttpError';
import { dateStringFormat } from '../utils/date';
import { makeWhereQueryWithDate } from '../utils/make-query';
import Product from '../models/Product';
import { IRefund } from '@middle/type/myRefund/myRefund';

//상품 문의 조회
export const getAllRefunds = async (req: Request, res: Response) => {
  const { startDate, endDate }: { startDate?: string; endDate?: string } = req.query;
  const userId = req.body.userId; // TODO req.user 로 바꾸기

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

export const createRefund = async (req: Request, res: Response) => {
  const { userId } = req.body; // TODO req.user 로 바꾸기
  const orderId = parseInt(req.params.orderId, 10);

  let refund = await Refund.findOne({
    where: { userId, orderId },
  });

  if (refund) {
    throw new HttpError({ ...err.EXIST_REFUND_ERROR });
  }

  const newRefund = await Refund.create({
    userId,
    orderId,
    isConfirmed: false,
    state: '처리중',
  });

  if (!newRefund) {
    throw new HttpError({ ...err.CREATE_ERROR });
  }

  const refundId = newRefund.id;
  const updateOrder = await Order.update({ refundId }, { where: { id: orderId } });

  const order = await Order.findOne({ where: { id: orderId } });

  res.status(200).json({ data: { refund, order } });
};
