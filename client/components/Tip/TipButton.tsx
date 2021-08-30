import * as S from './style';
import { toggleTip } from './toggleTip';
import { useRouter } from '@client/hooks/router/router';

export default function TipButton() {
  const { router } = useRouter();
  return (
    <S.TipButton onClick={() => toggleTip()}>
      <div className="tip-item">3D 이용방법</div>
      {router.pathname !== '' && (
        <>
          <div className="tip-text">마우스 좌클릭 + 좌우</div>
          <div className="tip-text">(카메라 시점 이동)</div>

          <div className="tip-text">마우스 스크롤</div>
          <div className="tip-text">(카메라 줌)</div>
        </>
      )}
    </S.TipButton>
  );
}
