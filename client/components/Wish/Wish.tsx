import * as S from './style';
import Heart from '@image/svg/Heart.svg';
import { useWish } from '@client/hooks/wish/wish';
import { useCheck } from '@client/hooks/auth/check';
import cache from '@utils/cache';

type IWish = {
  productId: string;
  name: string;
};

export default function Wish({ productId, name }: IWish) {
  const { isInMyWish, toggleWish } = useWish(productId, name);
  const { check } = useCheck();
  return (
    <>
      {check && (
        <S.Wish isInMyWish={isInMyWish} onClick={() => toggleWish()}>
          <Heart />
        </S.Wish>
      )}
    </>
  );
}
