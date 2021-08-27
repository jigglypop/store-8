import * as S from './style';
import Heart from '@image/svg/Heart.svg';
import { useWish } from '@client/hooks/wish/wish';
import { useCheck } from '@client/hooks/auth/check';
import cache from '@utils/cache';

type IWish = {
  productId: string;
  name: string;
  isContainer?: boolean;
};

export default function Wish({ productId, name, isContainer }: IWish) {
  const { isInMyWish, toggleWish } = useWish(productId, name);
  const { check } = useCheck();
  if (isContainer) {
    return (
      <>
        {check && (
          <S.Wish isInMyWish={isInMyWish} onClick={() => toggleWish()}>
            <div className="svg-container">
              <Heart />
            </div>
          </S.Wish>
        )}
      </>
    );
  } else {
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
}
