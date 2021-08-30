import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@client/store';
import { useState } from 'react';
import { getMyOrder } from '@client/store/myOrder/myOrder';
import { dateStringFormat } from '@server/utils/date';

export function useMyOrder() {
  const { myOrder } = useSelector((state: RootState) => state.myOrder);
  const [_startDate, setStartDate] = useState<string>(dateStringFormat(new Date('1980-01-01')));
  const [_endDate, setEndDate] = useState<string>(dateStringFormat(new Date()));
  const dispatch = useDispatch();

  const getMyOrderWithDate = (token: string, startDate: string, endDate: string) => {
    setStartDate(startDate);
    setEndDate(endDate);
    dispatch(getMyOrder({ token, startDate, endDate }));
  };

  const getMyOrderAgain = (token: string) => {
    dispatch(getMyOrder({ token, startDate: _startDate, endDate: _endDate }));
  };

  return { myOrder: myOrder ?? [], getMyOrderWithDate, getMyOrderAgain };
}
