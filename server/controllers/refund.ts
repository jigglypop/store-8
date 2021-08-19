import { Request, Response } from 'express';

import { IQuestionRes } from './../../middle/type/question/question';

import { err } from '../constants/error';
import Refund from '../models/Refund';
import Order from '../models/Order';
import HttpError from '../utils/HttpError';
import { decodeToken, getAccessToken } from '../utils/jwt';
import { dateStringFormat } from '../utils/date';
import { makeWhereQueryWithDate } from '../utils/make-query';

//상품 문의 조회
export const getAllRefunds = async (req: Request, res: Response) => {
  const { startDate, endDate }: { startDate?: string; endDate?: string } = req.query;
  const userId = 1; // decode JWT를 통해 가져와야함.

  const refunds = await Refund.findAll({
    where: { userId, ...makeWhereQueryWithDate('createdAt', startDate, endDate) },
    include: [
      {
        model: Order,
        as: 'order',
      },
    ],
  });

  // 수정이 필요함.

  res.status(200).json({ data: refunds });
};
