import CubeSVG from '@image/svg/Cube.svg';
import GoIntroSVG from '@image/svg/GoIntro.svg';
import * as S from './style';
import { useRouter } from '@client/hooks/router/router';
import { Link } from '@client/utils/router';
export default function GoIntro() {
  const { router } = useRouter();
  return (
    <>
      {router && router.pathname !== '' && (
        <S.GoIntro>
          <Link to="/">
            <S.GoIntroItem>
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
