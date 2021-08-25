import { couponGetAllApi } from '@api/coupon';
import { useState } from 'react';
import { CouponData } from '@middle/type/coupon/coupon';
import cache from '@utils/cache';

// 주문 대기 내역 ( state.order ) 을 주문 내역으로 변환후 create
// 주문 대기 내역을 장바구니에서 삭제 ( 삭제하면 알아서 API 호출 )
// 사용한 쿠폰도 useCoupon API 를 사용해서 해제해줘야함.
// 페이지 이동 to order finish page
export function useCoupon() {
  const [coupon, setCoupon] = useState<CouponData[]>([]);

  const getAllCoupon = async () => {
    // TODO: userId 없애기
    const result = await couponGetAllApi(cache.get('token'));
    setCoupon(result);
  };

  return { coupon, getAllCoupon };
}
