import React, { ReactElement } from 'react';
import * as S from './style';
import OrderSection from '@client/components/MyPage/OrderSection/OrderSection';
import NavigationBar from '@client/components/MyPage/NavigationBar/NavigationBar';
import { Link } from '@client/utils/router';

interface Props {}

export default function MyPage() {
  return (
    <S.MyPage>
      <NavigationBar />
      <Link to="/order-list">
        <OrderSection />
      </Link>
      <Link to="/cancel-list">
        <h1>cancel-list</h1>
      </Link>
      <Link to="/refund-list">
        <h1>refund-list</h1>
      </Link>
      <Link to="/wish-list">
        <h1>wish-list</h1>
      </Link>
      <Link to="/coupon">
        <h1>coupon</h1>
      </Link>
      <Link to="/mileage">
        <h1>mileage</h1>
      </Link>
      <Link to="/my-page-qa">
        <h1>cancel-list</h1>
      </Link>
      <Link to="/my-page-password-check">
        <h1>cancel-list</h1>
      </Link>
      <Link to="/shipping">
        <h1>cancel-list</h1>
      </Link>
      <Link to="/my-page-goods-qa">
        <h1>cancel-list</h1>
      </Link>
      <Link to="/my-page-goods-review">
        <h1>cancel-list</h1>
      </Link>
    </S.MyPage>
  );
}