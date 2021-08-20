import React, { ReactElement, useState } from 'react';
import * as S from './style';
import { dateStringFormat } from '@utils/date';
import request from '@client/api/utils/request';
import { _filteredResults } from '../dummydata';
interface Props {
  title: string;
  setOriginalResults: Function;
  page: string;
}

export default function SearchBar({ title, setOriginalResults, page }: Props): ReactElement {
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
    const data = await request.get(`/api/${page}?startDate=${startDate}&endDate=${endDate}`);
    console.log(data.data);
    setOriginalResults(data.data);

    // alert(`
    // ${startDate} 부터 ${endDate} 까지 조회합니다.
    // API 개발 중!! 데이터가 바뀌는지 확인하기 위해
    // 더미데이터에서 인덱스가 홀수인 값들만 state 를 변경`);

    // setOriginalResults(
    //   _filteredResults.filter((result, idx) => {
    //     return idx % 2;
    //   })
    // );
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
