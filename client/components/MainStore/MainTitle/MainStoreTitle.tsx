import { useRouter } from '@client/hooks/router/router';
import * as S from './style';

export default function MainStoreTitle() {
  const { router } = useRouter();
  return (
    <S.MainStoreTitle>
      <div className="main-name">
        <h4>드림문방구 메인</h4>
      </div>
    </S.MainStoreTitle>
  );
}
