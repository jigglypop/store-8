import * as S from './style';
import CartSvg from '@image/svg/cart.svg';
import cache from '@utils/cache';

type ICart = {
  onClick: () => void;
};

export default function Cart({ onClick }: ICart) {
  const isLoggedIn = cache.get('token');
  return (
    <>
      {isLoggedIn && (
        <S.Cart onClick={onClick}>
          <CartSvg />
        </S.Cart>
      )}
    </>
  );
}
