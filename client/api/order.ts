import request from './utils/request';
import cache from '@utils/cache';
import type { OrderCreateReq } from '@middle/type/product/order';

export const createOrder = async (requestForm: OrderCreateReq) => {
  const token = cache.get('token');
  const data = await request.post<OrderCreateReq>('/api/order/create', requestForm, token);
  return data.data;
};

export const getMileage = async (token: string) => {
  const data = await request.getToken('/api/order/mileage', token);
  return data.data;
};
