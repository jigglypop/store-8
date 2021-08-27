import { RootState } from '@client/store';
import {
  toggleStoreModeToken,
  changeStoreModeToken,
  changeNotStoreModeToken,
} from '@client/utils/setStoreMode';
import { useSelector } from 'react-redux';

export function useStoreMode() {
  const { storemode } = useSelector((state: RootState) => state.storemode);
  const { router } = useSelector((state: RootState) => state.router);

  const onToggleStoreMode = () => {
    toggleStoreModeToken();
  };
  const onSetStoreMode = () => {
    changeStoreModeToken();
  };
  const onSetNotStoreMode = () => {
    changeNotStoreModeToken();
  };
  return { storemode, onToggleStoreMode, onSetNotStoreMode, onSetStoreMode, router };
}
