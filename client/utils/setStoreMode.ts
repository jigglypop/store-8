import cache from './cache';
import { store } from '../store';
import { setNotStoreMode, setStoreMode } from '@client/store/storemode/storemode';

// 스토어모드 확인해보고 있으면 boolean 값 변환
export const isStoreModeToken = () => {
  const flag = cache.get('storemode');
  if (!flag) {
    return true;
  } else {
    if (flag === 'false') {
      return false;
    } else {
      return true;
    }
  }
};

// 스토어 모드로
export const changeStoreModeToken = () => {
  cache.set('storemode', 'false');
  store.dispatch(setStoreMode());
};
// not 스토어 모드로
export const changeNotStoreModeToken = () => {
  cache.set('storemode', 'true');
  store.dispatch(setNotStoreMode());
};
// 초기셋용
export const initStoreModeToken = () => {
  const storemode = cache.get('storemode');
  if (storemode === 'false') {
    changeStoreModeToken();
  } else {
    changeNotStoreModeToken();
  }
};
// 토글용
export const toggleStoreModeToken = () => {
  const storemode = cache.get('storemode');
  if (storemode === 'false') {
    changeNotStoreModeToken();
  } else {
    changeStoreModeToken();
  }
};
