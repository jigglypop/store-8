import request from './utils/request';
import type { OrderCreateReq } from '@middle/type/product/order';

export const createOrder = async (requestForm: OrderCreateReq) => {
  const data = await request.post<OrderCreateReq>('/api/order/create', requestForm);
  return data.data;
};
