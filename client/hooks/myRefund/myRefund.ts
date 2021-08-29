import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@client/store';
import { getMyRefund, updateMyRefund, deleteMyRefund } from '@client/store/myRefund/myRefund';
import { useState } from 'react';
import { dateStringFormat } from '@server/utils/date';

export function useMyRefund() {
  const { myRefund } = useSelector((state: RootState) => state.myRefund);
  const [_startDate, setStartDate] = useState(dateStringFormat(new Date('1980-01-01')));
  const [_endDate, setEndDate] = useState(dateStringFormat(new Date()));
  const dispatch = useDispatch();

  const getMyRefundWithDate = async (token: string, startDate: string, endDate: string) => {
    setStartDate(startDate);
    setEndDate(endDate);
    await dispatch(getMyRefund({ token, startDate, endDate }));
  };

  const confirmMyRefund = async (token: string, refundId: number) => {
    await dispatch(updateMyRefund({ token, refundId, startDate: _startDate, endDate: _endDate }));
  };

  const cancelMyRefund = async (token: string, refundId: number) => {
    await dispatch(deleteMyRefund({ token, refundId, startDate: _startDate, endDate: _endDate }));
  };

  return { myRefund: myRefund ?? [], getMyRefundWithDate, confirmMyRefund, cancelMyRefund }; //
}
