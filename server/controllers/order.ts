import { Request, Response } from 'express';
import { err } from '../constants/error';
import Order from '../models/Order';
import HttpError from '../utils/HttpError';
import { makeWhereQueryWithDate, makeWhereQueryWithObj } from '../utils/make-query';
import { makeRandomOrderId } from '../utils/orderNumber';
import Product from '../models/Product';
import User from '../models/User';
import { IOrder } from '@middle/type/myOrder/myOrder';
import { IAuthRequest, JWTPayload } from '@middle/type/request';
//상품 문의 조회
export const getAllOrders = async (req: IAuthRequest, res: Response) => {
  const { startDate, endDate }: { startDate?: string; endDate?: string } = req.query;
  const { productId } = req.params;
  const userId = req.user?.id;

  let refunds = await Order.findAll({
    where: {
      ...makeWhereQueryWithDate('createdAt', startDate, endDate),
      ...makeWhereQueryWithObj({ userId, productId }),
    },
    include: [
      {
        model: Product,
        as: 'product',
        attributes: ['title', 'productImgSrc'],
      },
    ],
  });

  const results: IOrder[] = refunds.map((order) => {
    const result: IOrder = {
      id: order.id,
      orderNumber: order.orderNumber,
      title: order.product.title,
      productAmount: order.productAmount,
      productCount: order.productCount,
      state: order.state,
      productId: order.productId,
      isConfirmed: order.isConfirmed,
      productImgSrc: order.product.productImgSrc,
      date: order.createdAt.toString(),
      reviewId: order.reviewId,
      refundId: order.refundId,
    };
    return result;
  });

  res.status(200).json({ data: results });
};

export const getMileage = async (req: Request, res: Response) => {
  const { userId } = req.body;
  const result = await User.findOne({ where: { id: userId } });
  res.status(200).json({ data: result?.mileage });
};

// 주문 내역 생성
export const createOrder = async (req: Request, res: Response) => {
  const orderNumber = makeRandomOrderId();
  const orderState = '처리중'; // 처리중, 배송중, 배송 완료
  const orderConfirm = false;
  const {
    userId,
    productIds,
    productCounts,
    productAmounts,
    optionIds,
    addressId,
    useMileageAmount,
    addMileageAmount,
  } = req.body;
  // optionIds 는 없으면 0, 있다면 1 이상의 id 로 결정.

  // TODO : Transaction 추가 필요
  const userInfo = await User.findAll({ where: { id: userId } });
  if (userInfo[0].mileage < useMileageAmount) {
    throw new HttpError({ status: 400, message: 'Mileage를 사용할 수 없습니다.' });
  }

  const userValid = await User.update(
    { mileage: userInfo[0].mileage - useMileageAmount + addMileageAmount },
    { where: { id: userId } }
  );

  if (!userValid) {
    throw new HttpError({ status: 400, message: '마일리지 사용에 실패하였습니다.' });
  }

  productIds.forEach((element: number, index: number) => {
    const valid = Order.create({
      orderNumber,
      userId,
      addressId,
      productId: productIds[index],
      productCount: productCounts[index],
      productAmount: productAmounts[index],
      optionId: optionIds[index] !== 0 ? optionIds[index] : null,
      state: orderState,
      isConfirmed: orderConfirm,
    });

    if (!valid) {
      throw new HttpError({ status: 400, message: '주문 내역 추가에 실패하였습니다.' });
    }
    // TODO : Transaction 추가 후 Rollback 과정 추가 필요
  });

  res.status(200).json({ data: 'ok' });
};

export const updateOrderState = async (req: IAuthRequest, res: Response) => {
  const userId = req.user?.id;
  // const user = { id: 1, username: '0woodev' };
  const orderId = req.params.id;

  // 유저 검증 ( 논의 필요 )
  const _user = await User.findOne({ where: { id: userId } });

  if (!_user) {
    throw new HttpError({ ...err.NO_DATA });
  }

  // 찾고자 하는 orderId 의 order 체크
  const order = await Order.findOne({ where: { id: orderId } });

  if (!order) {
    throw new HttpError({ ...err.NO_DATA });
  }

  const updatedOrder = await order.update({ state: '구매확정', isConfirmed: true });

  res.status(200).json({ data: updatedOrder });
};
