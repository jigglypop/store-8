import { useSelector, useDispatch } from 'react-redux';
import { useEffect, ChangeEvent } from 'react';
import { changeLogin, postLogin, initLogin } from '@client/store/auth/login';
import { RootState } from '@client/store';
import { HistoryPush } from '@client/utils/router';
import cache from '@client/utils/cache';
import { getCheck } from '@client/store/auth/check';
import { ILoginReq } from '@middle/type/auth/login';
import { debounceRedux } from '@client/utils/debounce';

export function useLogin() {
  const { loginform, login, error, loading } = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    debounceRedux(changeLogin, dispatch, e, 500)();

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await dispatch(postLogin(loginform));
  };

  // 로그인 후 성공 user 로컬스토리지 저장, 체크
  useEffect(() => {
    if (login) {
      HistoryPush('main');
      dispatch(getCheck(cache.get('token')));
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
