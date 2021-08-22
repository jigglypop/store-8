export type CouponData = {
  id: number;
  title: string;
  amount: number;
  dDay: string;
};

export type CouponGetReq = {
  userId: number;
};

export type CouponUseReq = {
  userId: number;
  couponId: number;
};

export type CouponRes = {
  data: CouponData[];
};
