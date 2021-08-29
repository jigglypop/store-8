import { IOrder } from '@middle/type/myOrder/myOrder';

export interface IRefund {
  date: string; // order day
  id: number; // refundId : for key
  orderNumber: string; // order
  title: string; // productId
  option?: string; //
  productAmount: number;
  productCount: number;
  state: string; // 주문상태
  isConfirmed: boolean; // 확인/리뷰
  productImgSrc: string;
  orderId: number;
}

export interface IDateReq {
  token: string;
  startDate: string;
  endDate: string;
}

export interface IMyRefundCreateReq {
  token: string;
  orderId: Number;
}

export interface IMyRefundReq {
  refundId: number;
  token?: string;
  startDate: string;
  endDate: string;
}

export interface IMyRefundCreateRes {
  order: IOrder;
  refund: IRefund;
}

export interface IMyRefundUpdateRes {
  order: IOrder;
  refund: IRefund;
  result: boolean;
}

export interface IMyRefundDeleteRes {
  order: IOrder;
  result: boolean;
}

export type IMyRefundRes = IRefund[];
