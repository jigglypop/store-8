import { RootState } from '@store/index';
import { delCart } from '@store/product/cart';
import { useCoupon } from '@store/coupon/coupon';
import { createOrder } from '@api/order';
import { getMileage } from '@api/order';
import { addAddressApi, setBaseAddressApi, updateAddressApi, removeAddressApi } from '@api/address';
import { ProceedOrderProps } from '@middle/type/product/order';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { AddressAddReq, AddressData } from '@middle/type/address/address';
import cache from '@client/utils/cache';

// 주문 대기 내역 ( state.order ) 을 주문 내역으로 변환후 create
// 주문 대기 내역을 장바구니에서 삭제 ( 삭제하면 알아서 API 호출 )
// 사용한 쿠폰도 useCoupon API 를 사용해서 해제해줘야함.
// 페이지 이동 to order finish page
export function useOrder() {
  const { cart } = useSelector((state: RootState) => state.order);
  const [mileage, setMileage] = useState(0);
  const dispatch = useDispatch();

  const getUsableMileage = async () => {
    const temp = await getMileage({ userId: 1 });
    setMileage(temp);
  };

  const makeAddress = async (props: AddressAddReq, isBase: boolean) => {
    // 지역 추가.
    const addressId: number = await addAddressApi(
      {
        location: props.location,
        extraLocation: props.extraLocation,
        zonecode: props.zonecode,
        call: props.call,
        receiver: props.receiver,
        email: props.email,
        title: props.title ? props.title : '',
      },
      cache.get('token')
    );

    if (isBase) {
      await setBaseAddressApi({ addressId }, cache.get('token'));
    }
  };

  const updateAddress = async (props: AddressData) => {
    await updateAddressApi(
      {
        id: props.addressId,
        location: props.address,
        extraLocation: props.extraAddress,
        zonecode: props.zonecode,
        call: props.call,
        receiver: props.name,
        email: props.email,
        title: props.title ? props.title : '',
      },
      cache.get('token')
    );

    if (props.isBase) {
      await setBaseAddressApi({ addressId: props.addressId }, cache.get('token'));
    }
  };

  const removeAddress = async (addressId: number) => {
    // TODO: UserId 지우기
    await removeAddressApi({ addressId }, cache.get('token'));
  };

  const proceedOrder = async (props: ProceedOrderProps) => {
    // 주문내역을 만들기 위한 데이터 생성
    const productIds: number[] = [];
    const productCounts: number[] = [];
    const productAmounts: number[] = [];
    const optionIds: number[] = [];
    const deleteCartIds: number[] = [];

    // 지역 추가 시도.
    const addressId: number = await addAddressApi(
      {
        location: props.addressInfo.address,
        extraLocation: props.addressInfo.extraAddress,
        zonecode: props.addressInfo.zonecode,
        call: props.addressInfo.call,
        receiver: props.addressInfo.name,
        email: props.addressInfo.email,
      },
      cache.get('token')
    );

    if (props.isBase) {
      await setBaseAddressApi({ addressId }, cache.get('token'));
    }

    cart.forEach((element) => {
      productIds.push(element.productId);
      productCounts.push(element.count);
      productAmounts.push(element.amount);
      optionIds.push(element.optionId);
      deleteCartIds.push(element.id);
    });

    // 주문내역 만드는 API 호출, 사용한 마일리지는 order 를 만들면서 해결한다.
    // TODO : User Id 빼기
    const orderApiResult = await createOrder({
      userId: 1,
      productIds,
      productCounts,
      productAmounts,
      optionIds,
      addressId,
      useMileageAmount: props.useMileageAmount,
      addMileageAmount: props.addMileageAmount,
    });

    if (orderApiResult !== 'ok') {
      throw new Error('[PROCEED_ORDER] : 주문내역 생성이 실패했습니다.');
    }

    // TODO : User ID 빼기
    // cart 삭제 진행.
    dispatch(delCart({ userId: 1, cartIds: deleteCartIds }));

    // TODO : User ID 빼기
    // coupon 사용하기 진행.
    if (props.useCouponId !== 0) {
      dispatch(useCoupon({ userId: 1, couponId: props.useCouponId }));
    }
  };

  return { mileage, getUsableMileage, proceedOrder, makeAddress, updateAddress, removeAddress };
}
