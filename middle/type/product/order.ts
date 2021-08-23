import type { AddressData } from '../address/address';

export type OrderCreateReq = {
  userId?: number;
  productIds: number[];
  productCounts: number[];
  productAmounts: number[];
  optionIds: number[];
  addressId: number;
  useMileageAmount: number;
  addMileageAmount: number;
};

export type OrderCreateRes = {
  data: string;
};

export type MileageReq = {
  userId: number;
};

export type ProceedOrderProps = {
  useCouponId: number;
  useCouponAmount: number;
  useMileageAmount: number;
  addMileageAmount: number;
  addressInfo: AddressData;
  isBase: boolean;
};
