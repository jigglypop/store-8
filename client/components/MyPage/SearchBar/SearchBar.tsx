import React, { ReactElement, useState } from 'react';
import * as S from './style';
import { dateStringFormat } from '@utils/date';
import request from '@client/api/utils/request';
interface Props {
  title: string;
  setOriginalResults: Function;
}

export default function SearchBar({ title, setOriginalResults }: Props): ReactElement {
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
    alert(`${startDate} 부터 ${endDate} 까지 조회합니다.\nAPI 개발 중!!`);

    const data = await request.get(`/api/refund?startDate=${startDate}&endDate=${endDate}`);

    setOriginalResults(data.results);
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
