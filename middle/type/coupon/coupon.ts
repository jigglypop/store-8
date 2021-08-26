export type CouponData = {
  id: number;
  title: string;
  amount: number;
  dDay: string;
  isUsed: boolean;
};

export type CouponUseReq = {
  couponId: number;
};

export type CouponRes = {
  data: CouponData[];
};
