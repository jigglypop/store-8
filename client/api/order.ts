import request from './utils/request';
import type { OrderCreateReq, MileageReq } from '@middle/type/product/order';

export const createOrder = async (requestForm: OrderCreateReq) => {
  const data = await request.post<OrderCreateReq>('/api/order/create', requestForm);
  return data.data;
};

export const getMileage = async (requestForm: MileageReq) => {
  const data = await request.post<MileageReq>('/api/order/mileage', requestForm);
  return data.data;
};
