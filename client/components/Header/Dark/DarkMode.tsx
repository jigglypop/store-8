import SunSVG from '@image/svg/sun.svg';
import MoonSVG from '@image/svg/moon.svg';
import * as S from '../style';
import { useMode } from '@client/hooks/mode/router';
import { toggleDarkMode } from '@client/utils/setDisplay';

function DarkMode() {
  const { mode } = useMode();

  return (
    <S.DarkMode onClick={() => toggleDarkMode()}>
      {mode ? <MoonSVG /> : <SunSVG />}
      <p>{mode ? '다크모드로 보기' : '일반모드로 보기'}</p>
    </S.DarkMode>
  );
}

export default DarkMode;
