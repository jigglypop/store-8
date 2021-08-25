import { Request, Response } from 'express';

import UserCoupon from '../models/UserCoupon';
import Coupon from '../models/Coupon';

import HttpError from '../utils/HttpError';
import { err } from '../constants/error';

import { CouponData } from '../../middle/type/Coupon/coupon';

const findAll = async (userId: number) => {
  const userCoupons = await UserCoupon.findAll({
    where: { userId, isUsed: false },
    include: [
      {
        model: Coupon,
        as: 'coupon',
      },
    ],
  });
  if (!userCoupons) {
    throw new HttpError({ ...err.NO_DATA });
  }

  const result: CouponData[] = [];

  userCoupons.forEach((element) => {
    result.push({
      id: element.id,
      title: element.coupon.title,
      amount: element.coupon.amount,
      dDay: element.dDay.split(' ')[0],
      isUsed: element.isUsed,
    });
  });

  return result;
};

const findTotal = async (userId: number) => {
  const userCoupons = await UserCoupon.findAll({
    where: { userId },
    include: [
      {
        model: Coupon,
        as: 'coupon',
      },
    ],
  });
  if (!userCoupons) {
    throw new HttpError({ ...err.NO_DATA });
  }

  const result: CouponData[] = [];

  userCoupons.forEach((element) => {
    result.push({
      id: element.id,
      title: element.coupon.title,
      amount: element.coupon.amount,
      dDay: element.dDay.split(' ')[0],
      isUsed: element.isUsed,
    });
  });

  return result;
};

export const get = async (req: Request, res: Response) => {
  const { userId } = req.body;
  if (!userId) {
    throw new HttpError({ status: 400, message: '요청한 Body 내용에 User ID가 없습니다.' });
  }

  let result = await findAll(userId);

  res.status(200).json({ data: result });
};

export const getAll = async (req: Request, res: Response) => {
  const { userId } = req.body;
  if (!userId) {
    throw new HttpError({ status: 400, message: '요청한 Body 내용에 User ID가 없습니다.' });
  }

  let result = await findTotal(userId);
  res.status(200).json({ data: result });
};

export const newCoupon = async (req: Request, res: Response) => {
  const { title, amount } = req.body;

  const valid = await Coupon.create({ title, amount });

  if (!valid) {
    throw new HttpError({ status: 400, message: '요청한 내역 추가를 진행 할 수 없었습니다.' });
  }

  res.status(200).json({ data: 'ok' });
};

export const add = async (req: Request, res: Response) => {
  const { userId, couponId, dDay } = req.body;
  if (!userId) {
    throw new HttpError({ status: 400, message: '요청한 Body 내용에 User ID가 없습니다.' });
  }

  const valid = await UserCoupon.create({
    userId,
    couponId,
    isUsed: false,
    dDay: new Date(dDay),
  });

  if (!valid) {
    throw new HttpError({ status: 400, message: '요청한 내역 추가를 진행 할 수 없었습니다.' });
  }

  let result = await findAll(userId);

  res.status(200).json({ data: result });
};

export const useCoupon = async (req: Request, res: Response) => {
  const { userId, couponId } = req.body;
  if (!userId) {
    throw new HttpError({ status: 400, message: '요청한 Body 내용에 User ID가 없습니다.' });
  }

  const valid = await UserCoupon.update({ isUsed: true }, { where: { id: couponId, userId } });

  if (!valid) {
    throw new HttpError({ status: 400, message: '요청한 내역 수정을 진행 할 수 없었습니다.' });
  }

  let result = await findAll(userId);

  res.status(200).json({ data: result });
};

export const remove = async (req: Request, res: Response) => {
  const { userId, couponId } = req.body;
  if (!userId) {
    throw new HttpError({ status: 400, message: '요청한 Body 내용에 User ID가 없습니다.' });
  }

  const valid = await UserCoupon.destroy({ where: { id: couponId } });

  if (!valid) {
    throw new HttpError({ status: 400, message: '요청한 내역 삭제를 진행 할 수 없었습니다.' });
  }

  let result = await findAll(userId);

  res.status(200).json({ data: result });
};
