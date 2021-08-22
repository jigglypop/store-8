import { RootState } from '@store/index';
import { delCart } from '@store/product/cart';
import { useCoupon } from '@store/coupon/coupon';
import { createOrder } from '@api/order';
import { useDispatch, useSelector } from 'react-redux';

// 주문 대기 내역 ( state.order ) 을 주문 내역으로 변환후 create
// 주문 대기 내역을 장바구니에서 삭제 ( 삭제하면 알아서 API 호출 )
// 사용한 쿠폰도 useCoupon API 를 사용해서 해제해줘야함.
// 페이지 이동 to order finish page
export function useOrder() {
  const { cart } = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch();

  const proceedOrder = async (useCouponId: number) => {
    // 주문내역을 만들기 위한 데이터 생성
    const productIds: number[] = [];
    const productCounts: number[] = [];
    const productAmounts: number[] = [];
    const optionIds: number[] = [];
    const deleteCartIds: number[] = [];

    cart.forEach((element) => {
      productIds.push(element.productId);
      productCounts.push(element.count);
      productAmounts.push(element.amount);
      optionIds.push(element.optionId);
      deleteCartIds.push(element.id);
    });

    // 주문내역 만드는 API 호출
    // TODO : User Id 빼기
    const orderApiResult = await createOrder({
      userId: 1,
      productIds,
      productCounts,
      productAmounts,
      optionIds,
    });

    if (orderApiResult !== 'ok') {
      throw new Error('[PROCEED_ORDER] : 주문내역 생성이 실패했습니다.');
    }

    // TODO : User ID 빼기
    // cart 삭제 진행.
    dispatch(delCart({ userId: 1, cartIds: deleteCartIds }));

    // TODO : User ID 빼기
    // coupon 사용하기 진행.
    dispatch(useCoupon({ userId: 1, couponId: useCouponId }));

    // Routing to order finish page.
    console.log('TO FINISH');
  };

  return { proceedOrder };
}
