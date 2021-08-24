import { Link } from '@client/utils/router';
import React, { ReactElement, useState } from 'react';
import * as S from './style';

interface Props {
  page: string;
}

export default function NavigationBar({ page }: Props): ReactElement {
  const [selectedLink, setSelectedLink] = useState(0);

  const handleClickButton = (e: React.MouseEvent) => {
    const { target } = e;
    if (!(target instanceof Link)) return;

    setSelectedLink(+target);
  };

  const checkCurrentPage = (pageConstant: string): string =>
    page === pageConstant ? 'clicked' : '';

  return (
    <S.NavigationBar id="navigation-big">
      <h3>마이페이지</h3>

      <S.NavigatorGroup onClick={handleClickButton}>
        <h4>쇼핑정보</h4>
        <Link to="/mypage-order-list" className={checkCurrentPage('ORDER')}>
          주문목록/배송조회
        </Link>
        <Link to="/mypage-refund-list" className={checkCurrentPage('REFUND')}>
          반품/환불 내역
        </Link>
        <Link to="/mypage-wish-list" className={checkCurrentPage('WISH')}>
          찜리스트
        </Link>
      </S.NavigatorGroup>

      <S.NavigatorGroup>
        <h4>회원정보</h4>
        <Link to="/mypage-address" className={checkCurrentPage('ADDRESS')}>
          배송지 관리
        </Link>
        <Link to="/mypage-goods-qa" className={checkCurrentPage('GOODS_QA')}>
          나의 상품문의
        </Link>
        <Link to="/mypage-goods-review" className={checkCurrentPage('GOODS_REVIEW')}>
          나의 상품후기
        </Link>
        <Link to="/mypage-info-edit" className={checkCurrentPage('INFO_EDIT')}>
          나의 정보수정
        </Link>
      </S.NavigatorGroup>
    </S.NavigationBar>
  );
}
