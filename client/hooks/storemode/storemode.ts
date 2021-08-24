import { RootState } from '@client/store';
import { setNotStoreMode, setStoreMode, toggleStoreMode } from '@client/store/storemode/storemode';
import { useDispatch, useSelector } from 'react-redux';

export function useStoreMode() {
  const { storemode } = useSelector((state: RootState) => state.storemode);
  const dispatch = useDispatch();
  const onToggleStoreMode = () => {
    dispatch(toggleStoreMode());
  };
  const onSetStoreMode = () => {
    dispatch(setStoreMode());
  };
  const onSetNotStoreMode = () => {
    dispatch(setNotStoreMode());
  };
  return { storemode, onToggleStoreMode, onSetNotStoreMode, onSetStoreMode };
}
