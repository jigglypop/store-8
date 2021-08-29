import * as S from './style';
import { toggleTip } from './toggleTip';

export default function TipButton() {
  return (
    <S.TipButton onClick={() => toggleTip()}>
      <div className="tip-item">3D 이용방법</div>
    </S.TipButton>
  );
}
