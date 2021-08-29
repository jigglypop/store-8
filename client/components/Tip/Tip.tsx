import * as S from './style';
import { toggleTip } from './toggleTip';
import { useRouter } from '@client/hooks/router/router';
import { IntroTipItem, CategoryTipItem, MainTipItem } from './TipItem';
import { $ } from '@client/utils/jQurey';
export default function Tip() {
  const { router } = useRouter();
  const onToggleTip = (e: any) => {
    if (e.target.id === 'tip' || e.target.id === 'close') {
      $('#tip').addClass('isNotDisplay');
    }
  };
  return (
    <S.Tip className="tip isNotDisplay" id="tip" onClick={(e) => onToggleTip(e)}>
      <div className="tip-item">
        <div className="close" id="close" onClick={(e) => onToggleTip(e)}>
          X
        </div>
        {router.pathname === '' && <IntroTipItem />}
        {router.pathname === 'main' && <MainTipItem />}
        {router.pathname === 'category' && <CategoryTipItem />}
      </div>
    </S.Tip>
  );
}
