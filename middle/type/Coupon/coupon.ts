export type CouponData = { title: string; amount: number; dDay: string };

export type CouponGetReq = {
  userId: number;
};

export type CouponUseReq = {
  userId: number;
};

export type CouponRes = {
  data: CouponData[];
};
