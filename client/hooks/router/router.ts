import { RootState } from '@client/store';
import { changeRouterAll, IRouterReq } from '@client/store/router/router';
import { useDispatch, useSelector } from 'react-redux';

export function useRouter() {
  const { router, query } = useSelector((state: RootState) => state.router);
  const dispatch = useDispatch();

  const onChangeRouterAll = (payload: IRouterReq) => {
    dispatch(changeRouterAll(payload));
  };
  return { router, query, onChangeRouterAll };
}
