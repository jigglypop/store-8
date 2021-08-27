import * as S from './style';
import CartSvg from '@image/svg/cart.svg';

type ICart = {
  onClick: () => void;
};

export default function Cart({ onClick }: ICart) {
  return (
    <S.Cart onClick={onClick}>
      <div className="svg-container">
        <CartSvg />
      </div>
    </S.Cart>
  );
}
