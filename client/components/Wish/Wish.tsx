import * as S from './style';
import Heart from '@image/svg/Heart.svg';
import { useWish } from '@client/hooks/wish/wish';

type IWish = {
  productId: string;
  name: string;
};

export default function Wish({ productId, name }: IWish) {
  const { isInMyWish, isLoggedIn, toggleWish } = useWish(productId, name);
  return (
    <>
      {isLoggedIn && (
        <S.Wish isInMyWish={isInMyWish} onClick={() => toggleWish()}>
          <Heart />
        </S.Wish>
      )}
    </>
  );
}
