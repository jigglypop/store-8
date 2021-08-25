import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@client/store';
import { getCheck, logout } from '@store/auth/check';
import { HistoryPush } from '@utils/router';
import { useEffect } from 'react';
import cache from '@utils/cache';
import { getGithub, initGithub } from '@store/auth/github';
import localCart from '@utils/cart';
import { localAddCart } from '@store/product/cart';

export function useGithub() {
  const { github } = useSelector((state: RootState) => state.github);
  const dispatch = useDispatch();
  // callback 페이지 진입시 시작
  useEffect(() => {
    dispatch(getGithub(cache.get('token')));
  }, []);

  // 로그인 후 성공 user 로컬스토리지 저장, 체크
  useEffect(() => {
    if (github) {
      HistoryPush('main');
      dispatch(getCheck(cache.get('token')));

      // 만약 로그인을 안한 상태에서 local cart 에 추가된게 있다면 모두 올려주기.
      const localCartData = localCart.get();
      // 서버와 Cart 데이터 동기화
      dispatch(localAddCart({ data: localCartData }));
      localCart.init(); // 모두 서버와 동기화 후 초기화하기.

      // dispatch(getCart(cache.get('token')));

      dispatch(initGithub());
    }
  }, [github]);

  // 생명주기(뒷정리)
  useEffect(() => {
    return () => {
      dispatch(initGithub());
    };
  }, []);
  return { github };
}
