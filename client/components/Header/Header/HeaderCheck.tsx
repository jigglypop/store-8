import { ICheckRes } from '@middle/type/auth/check';
import { getCart, localGetCart } from '@store/product/cart';
import cache from '@utils/cache';
import { RootState } from '@store/index';
import { Link } from '@utils/router';
import * as S from '../style';
import Avatar from '@components/common/Avatar/Avatar';
import UserSlider from '../Slider/UserSlider';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Hamberger from '@image/hamberger.svg';
import localCart from '@client/utils/cart';
export interface IHeaderNotLoggedIn {
  isUp: boolean;
  onLogout: () => void;
}

export interface IHeaderLoggedIn {
  isUp: boolean;
  check: ICheckRes;
  onLogout: () => void;
}
export const HeaderNotLoggedIn = ({ isUp, onLogout }: IHeaderNotLoggedIn) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const localCartData = localCart.get();
    dispatch(localGetCart({ data: localCartData }));
  }, []);

  const { cart } = useSelector((state: RootState) => state.cart);

  const [isRight, setIsRight] = useState(false);

  const onToggleUser = () => {
    setIsRight(!isRight);
  };

  return (
    <>
      <S.HeaderItem className="isBigHeader">
        <Link to="/login">로그인</Link>
      </S.HeaderItem>
      <S.HeaderItem className="isBigHeader">
        <Link to="/register">회원가입</Link>
      </S.HeaderItem>
      <S.HeaderItem className="isBigHeader">
        <Link to="/cart">
          <div className="cart-text">
            <p>장바구니</p>
            <p>{cart?.length}</p>
          </div>
        </Link>
      </S.HeaderItem>
      <S.HeaderItem className="isSmallHeader">
        <div className="hamberger" onClick={() => onToggleUser()}>
          <Hamberger />
        </div>
        <UserSlider isUp={isUp} onLogout={onLogout} isRight={isRight} />
      </S.HeaderItem>
    </>
  );
};

export const HeaderLoggedIn = ({ check, onLogout, isUp }: IHeaderLoggedIn) => {
  const [isRight, setIsRight] = useState(false);
  const [cartLength, setCartLength] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart(cache.get('token')));
  }, []);

  const { cart } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    setCartLength(cart ? cart.length : 0);
  }, [cart]);

  const onToggleUser = () => {
    setIsRight(!isRight);
  };

  return (
    <>
      <S.HeaderItem>
        <Link to="/mypage-order-list">
          <Avatar imageUrl={check.imageUrl} />
        </Link>
        <Link to="/mypage-order-list" className="isSSmallHeader">
          {check.username}
        </Link>
      </S.HeaderItem>
      <S.HeaderItem className="isBigHeader">
        <div onClick={() => onLogout()}>로그아웃</div>
      </S.HeaderItem>
      <S.HeaderItem className="isBigHeader">
        <Link to="/cart">
          <div className="cart-text">
            <p>장바구니</p>
            <p>{cart?.length}</p>
          </div>
        </Link>
      </S.HeaderItem>
      <S.HeaderItem className="isSmallHeader">
        <div className="hamberger" onClick={() => onToggleUser()}>
          <Hamberger />
        </div>
        <UserSlider isUp={isUp} onLogout={onLogout} isRight={isRight} />
      </S.HeaderItem>
    </>
  );
};
