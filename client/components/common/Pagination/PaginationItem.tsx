import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import * as S from './style';

interface Props {
  num: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function PaginationItem({ num, currentPage, setCurrentPage }: Props): ReactElement {
  const isNow = num === currentPage;
  const handleClick = () => setCurrentPage(num);
  return (
    <S.paginationItem onClick={handleClick}>
      <p className={isNow ? 'now' : ''}>{num}</p>
    </S.paginationItem>
  );
}
