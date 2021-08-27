import { useSelector, useDispatch } from 'react-redux';
import { useEffect, ChangeEvent } from 'react';
import { changeLogin, postLogin, initLogin } from '@client/store/auth/login';
import { RootState } from '@client/store';
import { HistoryPush } from '@client/utils/router';
import cache from '@client/utils/cache';
import { getCheck } from '@client/store/auth/check';
import { debounceRedux } from '@client/utils/debounce';
import { getMyWish } from '@client/store/mywish/mywish';
import { getCart, localAddCart } from '@client/store/product/cart';
import localCart from '@utils/cart';
import { ICartAddReq } from '@middle/type/cart/cart';
import { getRecommend } from '@client/store/recommend/recommend';

export function useLogin() {
  const { loginform, login, error, loading } = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    debounceRedux(changeLogin, dispatch, e, 10)();

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await dispatch(postLogin(loginform));
  };

  // 로그인 후 성공 user 로컬스토리지 저장, 체크
  useEffect(() => {
    if (login) {
      HistoryPush('main');
      dispatch(getCheck(cache.get('token')));
      dispatch(getMyWish(cache.get('token')));
      dispatch(getRecommend(cache.get('token')));

      // 만약 로그인을 안한 상태에서 local cart 에 추가된게 있다면 모두 올려주기.
      const localCartData = localCart.get();
      // 서버와 Cart 데이터 동기화
      dispatch(localAddCart({ data: localCartData }));
      localCart.init(); // 모두 서버와 동기화 후 초기화하기.
      dispatch(initLogin());
    }
  }, [login]);

  // 생명주기(뒷정리)
  useEffect(() => {
    return () => {
      dispatch(initLogin());
    };
  }, []);

  return { login, error, loading, onChange, onSubmit };
}
