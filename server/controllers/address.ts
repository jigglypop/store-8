import { Request, Response } from 'express';

import Address from '../models/Address';

import HttpError from '../utils/HttpError';
import { err } from '../constants/error';

import { AddressData } from '../../middle/type/address/address';

const findAll = async (userId: number) => {
  const addresses = await Address.findAll({
    where: { userId },
  });

  if (!addresses) {
    throw new HttpError({ ...err.NO_DATA });
  }

  const result: AddressData[] = [];

  addresses.forEach((element) => {
    result.push({
      address: element.location,
      extraAddress: element.extraLocation,
      zonecode: element.zonecode,
      call: element.call,
      name: element.receiver,
      email: element.email,
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

export const add = async (req: Request, res: Response) => {
  const { userId, location, extraLocation, zonecode, call, email, title, receiver } = req.body;
  if (!userId) {
    throw new HttpError({ status: 400, message: '요청한 Body 내용에 User ID가 없습니다.' });
  }

  const valid = await Address.create({
    userId,
    location,
    extraLocation,
    zonecode,
    call,
    email,
    title,
    receiver,
    isBase: false,
  });

  if (!valid) {
    throw new HttpError({ status: 400, message: '요청한 내역 추가를 진행 할 수 없었습니다.' });
  }

  let result = await findAll(userId);

  res.status(200).json({ data: result });
};

export const setBase = async (req: Request, res: Response) => {
  const { userId, addressId } = req.body;

  const valid = await Address.update({ isBase: true }, { where: { id: addressId } });

  if (!valid) {
    throw new HttpError({ status: 400, message: '요청한 내역 업데이트를 진행 할 수 없었습니다.' });
  }

  let result = await findAll(userId);

  res.status(200).json({ data: result });
};

export const remove = async (req: Request, res: Response) => {
  const { userId, addressId } = req.body;
  if (!userId) {
    throw new HttpError({ status: 400, message: '요청한 Body 내용에 User ID가 없습니다.' });
  }

  const valid = await Address.destroy({ where: { id: addressId } });

  if (!valid) {
    throw new HttpError({ status: 400, message: '요청한 내역 삭제를 진행 할 수 없었습니다.' });
  }

  let result = await findAll(userId);

  res.status(200).json({ data: result });
};
