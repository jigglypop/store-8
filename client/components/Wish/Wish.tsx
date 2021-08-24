import * as S from './style';
import Heart from '@image/svg/Heart.svg';
import { useWish } from '@client/hooks/wish/wish';
import cache from '@utils/cache';

type IWish = {
  productId: string;
  name: string;
};

export default function Wish({ productId, name }: IWish) {
  const { isInMyWish, toggleWish } = useWish(productId, name);
  const isLoggedIn = cache.get('token');
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
