import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import * as S from './style';

import PaginationItem from './PaginationItem';

interface Props {
  totalCount: number;
  defaultLimit: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function Pagination({
  totalCount,
  defaultLimit,
  currentPage,
  setCurrentPage,
}: Props): ReactElement {
  const page = Array.from({ length: Math.ceil(totalCount / defaultLimit) }, (_, i) => i + 1);
  const pageList = page.map((num) => (
    <PaginationItem key={num} {...{ num, currentPage, setCurrentPage }} />
  ));
  return (
    <S.Pagination>
      <div className="pagination-inner">{pageList}</div>
    </S.Pagination>
  );
}
