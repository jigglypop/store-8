import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@client/store';
import { logout } from '@client/store/auth/check';
import { HistoryPush } from '@client/utils/router';
import { createToast } from '@client/utils/createToast';
import { initMyWish } from '@client/store/mywish/mywish';

export function useCheck() {
  const { check } = useSelector((state: RootState) => state.check);
  const dispatch = useDispatch();
  const onLogout = async () => {
    await dispatch(logout());
    await dispatch(initMyWish());
    await HistoryPush('main');
    await createToast('로그아웃');
  };
  return { check, onLogout };
}
