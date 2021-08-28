import GoIntroSVG from '@image/svg/GoIntro.svg';
import * as S from './style';
import { useRouter } from '@client/hooks/router/router';
import { Link } from '@client/utils/router';
import { useStoreMode } from '@client/hooks/storemode/storemode';

export default function GoIntro() {
  const { router } = useRouter();
  const { storemode } = useStoreMode();
  return (
    <>
      {router && router.pathname !== '' && (
        <S.GoIntro>
          <Link to="/">
            <S.GoIntroItem storemode={storemode}>
              <div className="storemode-item">
                <GoIntroSVG />
              </div>
            </S.GoIntroItem>
          </Link>
        </S.GoIntro>
      )}
    </>
  );
}
