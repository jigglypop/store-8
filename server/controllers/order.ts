import { Request, Response } from 'express';
import { err } from '../constants/error';
import Order from '../models/Order';
import HttpError from '../utils/HttpError';
import { decodeToken, getAccessToken } from '../utils/jwt';
import { makeWhereQueryWithDate } from '../utils/make-query';
import { makeRandomOrderId } from '../utils/orderNumber';
import Product from '../models/Product';
import User from '../models/User';

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

    return result;
  });

  res.status(200).json({ data: results });
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
