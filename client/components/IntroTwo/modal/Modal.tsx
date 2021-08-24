import * as S from './style';
import main from '@image/main.png';
import Button from '@client/components/Button/Button';
import { HistoryPush } from '@client/utils/router';
export default function Modal() {
  const onClickMain = () => {
    HistoryPush('main');
  };
  const onClickStore = () => {
    HistoryPush('store');
  };
  return (
    <S.Modal>
      <img src={main} />
      <div className="button">
        <Button buttonTitle="입장" size="large" background="white" clickHandler={onClickMain} />
      </div>
      <div className="button">
        <Button buttonTitle="스토어" size="large" background="white" clickHandler={onClickStore} />
      </div>
    </S.Modal>
  );
}
