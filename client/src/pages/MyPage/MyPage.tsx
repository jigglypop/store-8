import React, { ReactElement } from 'react';
import * as S from './style';
import { Route } from '@src/lib/react-router/ReactRouter';
import OrderSection from '@src/components/MyPage/OrderSection/OrderSection';
import NavigationBar from '@src/components/MyPage/NavigationBar/NavigationBar';

interface Props {}

export default function MyPage({}: Props): ReactElement {
  return (
    <S.MyPage>
      <NavigationBar />
      <Route path="/order-list">
        <OrderSection />
      </Route>
      <Route path="/cancel-list">
        <h1>cancel-list</h1>
      </Route>
      <Route path="/refund-list">
        <h1>refund-list</h1>
      </Route>
      <Route path="/wish-list">
        <h1>wish-list</h1>
      </Route>
      <Route path="/coupon">
        <h1>coupon</h1>
      </Route>
      <Route path="/mileage">
        <h1>mileage</h1>
      </Route>
      <Route path="/my-page-qa">
        <h1>cancel-list</h1>
      </Route>
      <Route path="/my-page-password-check">
        <h1>cancel-list</h1>
      </Route>
      <Route path="/shipping">
        <h1>cancel-list</h1>
      </Route>
      <Route path="/my-page-goods-qa">
        <h1>cancel-list</h1>
      </Route>
      <Route path="/my-page-goods-review">
        <h1>cancel-list</h1>
      </Route>
    </S.MyPage>
  );
}