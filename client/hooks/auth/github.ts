import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@client/store';
import { getCheck, logout } from '@client/store/auth/check';
import { HistoryPush } from '@client/utils/router';
import { useEffect } from 'react';
import cache from '@client/utils/cache';
import { getGithub, initGithub } from '@client/store/auth/github';
import { getMyWish } from '@client/store/mywish/mywish';

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
