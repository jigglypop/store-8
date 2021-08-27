import * as S from './style';
import { HistoryPush } from '@client/utils/router';
import { useStoreMode } from '@client/hooks/storemode/storemode';
export default function Modal() {
  const { onSetNotStoreMode, onSetStoreMode } = useStoreMode();
  const onClickMain = async () => {
    await onSetNotStoreMode();
    await HistoryPush('main');
  };
  const onClickStore = async () => {
    await onSetStoreMode();
    await HistoryPush('main');
  };
  return (
    <S.Modal>
      <div className="buttonset">
        <div className="button" onClick={onClickMain}>
          <h4>2D로 입장</h4>
        </div>
        <div className="button" onClick={onClickStore}>
          <h4>3D로 입장</h4>
        </div>
      </div>
    </S.Modal>
  );
}
