import { Request, Response } from 'express';
import { err } from '../constants/error';
import Refund from '../models/Refund';
import Order from '../models/Order';
import Option from '../models/Option';
import HttpError from '../utils/HttpError';
import { dateStringFormat } from '../utils/date';
import { makeWhereQueryWithDate, makeWhereQueryWithObj } from '../utils/make-query';
import Product from '../models/Product';
import { IRefund } from '@middle/type/myRefund/myRefund';
import { findOneOrderByPk } from './order';

//상품 문의 조회
export const getAllRefunds = async (req: Request, res: Response) => {
  const { startDate, endDate }: { startDate?: string; endDate?: string } = req.query;
  const userId = req.body.userId; // TODO req.user 로 바꾸기

  console.log(userId, startDate, endDate);
  let refunds = await findAllRefundsByDate(userId, startDate, endDate);

  res.status(200).json({ data: refunds });
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

  const order = await findOneOrderByPk(orderId);

  res.status(200).json({ data: { refund, order } });
};

export const updateRefund = async (req: Request, res: Response) => {
  const { userId, isConfirmed } = req.body; // TODO req.user 로 바꾸기
  const refundId = parseInt(req.params.refundId, 10);

  let refund = await findOneRefundByPk(refundId, userId);

  if (!refund) {
    throw new HttpError(err.NO_DATA);
  }

  const [affectedRow] = await Refund.update({ isConfirmed }, { where: { id: refundId } });

  if (!affectedRow) {
    throw new HttpError(err.UPDATE_ERROR);
  }

  refund = await findOneRefundByPk(refundId, userId);

  res.status(200).json({ data: { result: true, refund } });
};

export const deleteRefund = async (req: Request, res: Response) => {
  const { userId } = req.body; // TODO req.user 로 바꾸기
  const refundId = parseInt(req.params.refundId, 10);

  //환불할 id 를 가진 refund 가 있는지 체크합니다.
  let refund = await Refund.findOne({
    where: { userId, id: refundId },
  });

  // 없다면, 에러
  if (!refund) {
    throw new HttpError({ ...err.NO_DATA });
  }

  // 있다면, 삭제해줍니다.
  const destroy = await Refund.destroy({
    where: {
      userId,
      id: refundId,
    },
  });

  const now = new Date();

  const updatedData = {
    refundId: null,
    isConfirmed: false,
    state: '처리중',
    createdAt: now,
    updatedOn: now,
  };

  const [affectedRow] = await Order.update({ ...updatedData }, { where: { refundId: refund.id } });

  if (!affectedRow) {
    throw new HttpError(err.UPDATE_ERROR);
  }
  const order = await findOneOrderByPk(refund.orderId);

  res.status(200).json({ data: { order, result: true } });
};

const findOneRefundByPk = async (refundId: number, userId?: number) => {
  let refund = await Refund.findOne({
    where: { ...makeWhereQueryWithObj({ id: refundId, userId }) },
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

  if (!refund) {
    throw new HttpError(err.NO_DATA);
  }

  const result: IRefund = makeIRefund(refund);

  return result;
};

const findAllRefundsByDate = async (userId: number, startDate?: string, endDate?: string) => {
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

  const results: IRefund[] = refunds.map((refund) => makeIRefund(refund));
  return results;
};

const makeIRefund = (refund: Refund) => {
  const result: IRefund = {
    id: refund.id,
    orderNumber: refund.order.orderNumber,
    title: refund.order.product.title,
    productAmount: refund.order.productAmount,
    productCount: refund.order.productCount,
    state: refund.state,
    isConfirmed: refund.isConfirmed,
    productImgSrc: refund.order.product.productImgSrc,
    date: refund.createdAt.toString(),
    orderId: refund.order.id,
  };
  return result;
};
