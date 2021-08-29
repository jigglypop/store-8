import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@client/store';
import { getCheck, logout, updateCheck } from '@client/store/auth/check';
import { HistoryPush } from '@client/utils/router';
import { createToast } from '@client/utils/createToast';
import { initMyWish } from '@client/store/mywish/mywish';
import { ICheckBody } from '@middle/type/auth/check';

export function useCheck() {
  const { check } = useSelector((state: RootState) => state.check);
  const dispatch = useDispatch();

  const setCheck = async (checkForm: ICheckBody, token: any) => {
    await dispatch(updateCheck({ checkForm, token }));
    // await dispatch(getCheck(token));
  };

  const onLogout = async () => {
    await dispatch(logout());
    await dispatch(initMyWish());
    await HistoryPush('main');
    await createToast('로그아웃');
  };
  return { check, setCheck, onLogout };
}
