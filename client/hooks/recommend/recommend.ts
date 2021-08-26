import { useSelector } from 'react-redux';
import { RootState } from '@client/store';

export function useRecommend() {
  const { recommend } = useSelector((state: RootState) => state.recommend);
  return { recommend };
}
