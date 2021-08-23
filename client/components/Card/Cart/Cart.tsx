import * as S from './style';
import CartSvg from '@image/svg/cart.svg';

type ICart = {
  onClick: () => void;
};

export default function Cart({ onClick }: ICart) {
  const isLoggedIn = true; // TODO : check 를 통해 login 검사.
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
