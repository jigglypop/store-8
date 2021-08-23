import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@client/store';
import { useEffect } from 'react';
import { getMyRefund } from '@client/store/myRefund/myRefund';
import { create } from 'ts-node';

export function useMyRefund() {
  const { myRefund } = useSelector((state: RootState) => state.myRefund);
  const dispatch = useDispatch();

  const setMyRefund = (startDate: string, endDate: string) => {
    dispatch(getMyRefund({ startDate, endDate }));
  };

  return { myRefund: myRefund ?? [], setMyRefund };
}
