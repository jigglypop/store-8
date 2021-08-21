import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@client/store';
import { useEffect } from 'react';
import { getMyWish } from '@client/store/mywish/mywish';

export function useMyWish() {
  const { mywish } = useSelector((state: RootState) => state.mywish);
  return { mywish };
}
