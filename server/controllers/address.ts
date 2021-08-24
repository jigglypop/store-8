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
      addressId: element.id,
      address: element.location,
      extraAddress: element.extraLocation,
      zonecode: element.zonecode,
      call: element.call,
      name: element.receiver,
      email: element.email,
      isBase: element.isBase,
      title: element.title,
    });
  });

  return result;
};

interface ExistProps {
  userId: number;
  location: string;
  extraLocation: string;
  zonecode: string;
  call: string;
  email: string;
  receiver: string;
}

const isExist = async (props: ExistProps) => {
  const addresses = await Address.findAll({
    where: { ...props },
  });

  return addresses;
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
  const { userId, location, extraLocation, zonecode, call, email, receiver, title } = req.body;
  if (!userId) {
    throw new HttpError({ status: 400, message: '요청한 Body 내용에 User ID가 없습니다.' });
  }

  const existData = await isExist({
    userId,
    location,
    extraLocation,
    zonecode,
    call,
    email,
    receiver,
  });
  if (existData.length !== 0) {
    res.status(200).json({ data: existData[0].id });
  } else {
    // 임시로 title을 만들어줍니다. 이후 사용자가 변경 할 수 있게 해 줄 계획.
    const tempTitle: string = `[ ${receiver} ] ${extraLocation}`;
    const valid = await Address.create({
      userId,
      location,
      extraLocation,
      zonecode,
      call,
      email,
      title: title ? title : tempTitle,
      receiver,
      isBase: false,
    });

    if (!valid) {
      throw new HttpError({ status: 400, message: '요청한 내역 추가를 진행 할 수 없었습니다.' });
    }

    const insertedResult = await isExist({
      userId,
      location,
      extraLocation,
      zonecode,
      call,
      email,
      receiver,
    });

    res.status(200).json({ data: insertedResult[0].id });
  }
};

export const update = async (req: Request, res: Response) => {
  const { id, userId, location, extraLocation, zonecode, call, email, receiver, title } = req.body;
  if (!userId) {
    throw new HttpError({ status: 400, message: '요청한 Body 내용에 User ID가 없습니다.' });
  }

  await Address.update(
    {
      location,
      extraLocation,
      zonecode,
      call,
      email,
      receiver,
      title,
    },
    { where: { userId: userId, id: id } }
  );

  res.status(200).json({ data: 'ok' });
};

export const setBase = async (req: Request, res: Response) => {
  const { userId, addressId } = req.body;

  await Address.update({ isBase: false }, { where: { userId: userId } });
  await Address.update({ isBase: true }, { where: { id: addressId } });

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
