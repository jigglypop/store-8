import React, { ReactElement, useState } from 'react';
import * as S from './style';
import { dateStringFormat } from '@utils/date';
import request from '@client/api/utils/request';
import { useMyOrder } from '@client/hooks/myOrder/myOrder';
import { useMyRefund } from '@client/hooks/myRefund/myRefund';
import { createToast } from '@client/utils/createToast';
import cache from '@client/utils/cache';

interface Props {
  title: string;
  page: string;
}

export default function SearchBar({ title, page }: Props): ReactElement {
  const setMyOrder = page == 'order' ? useMyOrder().setMyOrder : () => null;
  const setMyRefund = page == 'refund' ? useMyRefund().setMyRefund : () => null;

  const today = new Date();
  const [selectedOffset, setSelectedOffset] = useState(7);

  let beforeToday = new Date();
  beforeToday.setDate(today.getDate() - selectedOffset);

  const [startDate, setStartDate] = useState(dateStringFormat(beforeToday));
  const [endDate, setEndDate] = useState(dateStringFormat(today));

  const radioButtonHandler = (e: React.MouseEvent) => {
    const { target } = e;
    if (!(target instanceof HTMLButtonElement)) return;

    setSelectedOffset(+target.value);

    beforeToday = new Date();
    beforeToday.setDate(today.getDate() - Number(target.value));

    setStartDate(dateStringFormat(beforeToday));
    setEndDate(dateStringFormat(today));
  };

  const onSearchButtonClicked = async (e: React.MouseEvent) => {
    if (page === 'order') await setMyOrder(cache.get('token'), startDate, endDate);
    else if (page === 'refund') await setMyRefund(cache.get('token'), startDate, endDate);

    createToast(`${page.toUpperCase()} 데이터 조회`);
  };

  return (
    <S.SearchBar>
      <h3>{title}</h3>
      <div className="container-input">
        <div className="label">조회기간</div>
        <div className="container-offset-button" onClick={radioButtonHandler}>
          <S.OffsetRadioButton value="0" isSelected={selectedOffset === 0}>
            오늘
          </S.OffsetRadioButton>
          <S.OffsetRadioButton value="7" isSelected={selectedOffset === 7}>
            7일
          </S.OffsetRadioButton>
          <S.OffsetRadioButton value="15" isSelected={selectedOffset === 15}>
            15일
          </S.OffsetRadioButton>
          <S.OffsetRadioButton value="30" isSelected={selectedOffset === 30}>
            1개월
          </S.OffsetRadioButton>
          <S.OffsetRadioButton value="90" isSelected={selectedOffset === 90}>
            3개월
          </S.OffsetRadioButton>
          <S.OffsetRadioButton value="365" isSelected={selectedOffset === 365}>
            1년
          </S.OffsetRadioButton>
        </div>
        <div>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          ~
          <input
            type="date"
            name="endDate"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button className="button-search" onClick={onSearchButtonClicked}>
          조회 Q
        </button>
      </div>
    </S.SearchBar>
  );
}
