import { RootState } from '@client/store';
import { useSelector } from 'react-redux';

export function useMode() {
  const { mode, vals } = useSelector((state: RootState) => state.mode);
  return { mode, vals };
}
