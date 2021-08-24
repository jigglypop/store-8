import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@client/store';
import { useEffect } from 'react';
import { getMyOrder } from '@client/store/myOrder/myOrder';
import { create } from 'ts-node';

export function useMyOrder() {
  const { myOrder } = useSelector((state: RootState) => state.myOrder);
  const dispatch = useDispatch();

  const setMyOrder = (startDate: string, endDate: string) => {
    dispatch(getMyOrder({ startDate, endDate }));
  };

  return { myOrder: myOrder ?? [], setMyOrder };
}
