import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@client/store';
import { useEffect, useState } from 'react';
import { wishApi } from '@client/api/wish';
import cache from '@client/utils/cache';
import { getMyWish } from '@client/store/mywish/mywish';
import { createToast } from '@client/utils/createToast';

export function useWish(productId: string, name?: string) {
  const { mywish } = useSelector((state: RootState) => state.mywish);
  const [isInMyWish, setIsInMyWish] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  const toggleWish = async () => {
    const token = cache.get('token');
    if (token) {
      const result = await wishApi(token, productId);
      if (result) {
        await dispatch(getMyWish(token));
        if (isInMyWish) {
          createToast(name + ' 찜 취소');
        } else {
          createToast(name + ' 찜');
        }
      }
    }
  };

  useEffect(() => {
    if (mywish) {
      setIsLoggedIn(true);
      if (mywish.rows.length === 0) {
        setIsInMyWish(false);
      } else {
        for (let item of mywish.rows) {
          if (productId === item.id.toString()) {
            setIsInMyWish(true);
            break;
          } else {
            setIsInMyWish(false);
          }
        }
      }
    }
  }, [mywish]);
  return { mywish, isLoggedIn, isInMyWish, toggleWish };
}
