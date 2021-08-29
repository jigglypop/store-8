import CubeSVG from '@image/svg/Cube.svg';
import PlaneSVG from '@image/svg/Plane.svg';
import * as S from './style';
import { useStoreMode } from '@client/hooks/storemode/storemode';
function StoreMode() {
  const { router, storemode, onToggleStoreMode } = useStoreMode();
  return (
    <>
      {router && router.pathname !== '' && (
        <S.StoreMode storemode={storemode} onClick={() => onToggleStoreMode()}>
          {storemode ? <PlaneSVG /> : <CubeSVG />}
          <p>{storemode ? '3D모드로 보기' : '2D모드로 보기'}</p>
        </S.StoreMode>
      )}
    </>
  );
}

export default StoreMode;
