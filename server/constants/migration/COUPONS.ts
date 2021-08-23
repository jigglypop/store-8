import { ICoupon } from '../../models/Coupon';
import { IUserCoupon } from '../../models/UserCoupon';

export const COUPONS: ICoupon[] = [
  { title: '안녕 감사쿠폰', amount: 3000 },
  { title: '안감사쿠폰', amount: 1000 },
  { title: '쿠폰 이름 없다', amount: 2000 },
  { title: '쿺', amount: 7000 },
  { title: '상당히 많이 길게 작성된 쿠폰 이름', amount: 5000 },
];

export const USER_COUPONS: IUserCoupon[] = [
  {
    userId: 1,
    couponId: 1,
    isUsed: false,
    dDay: new Date('2021-08-21'),
  },
  {
    userId: 1,
    couponId: 2,
    isUsed: false,
    dDay: new Date('2021-09-10'),
  },
  {
    userId: 1,
    couponId: 3,
    isUsed: false,
    dDay: new Date('2021-08-30'),
  },
  {
    userId: 1,
    couponId: 4,
    isUsed: false,
    dDay: new Date('2021-09-11'),
  },
  {
    userId: 1,
    couponId: 5,
    isUsed: false,
    dDay: new Date('2021-09-11'),
  },
];
