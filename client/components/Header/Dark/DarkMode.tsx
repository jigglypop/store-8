import SunSVG from '@image/svg/sun.svg';
import MoonSVG from '@image/svg/moon.svg';
import * as S from '../style';
import { useMode } from '@client/hooks/mode/router';
import { toggleDarkMode } from '@client/utils/setDisplay';
import { useStoreMode } from '@client/hooks/storemode/storemode';

function DarkMode() {
  const { mode } = useMode();
  const { storemode } = useStoreMode();

  return (
    <S.DarkMode storemode={storemode} onClick={() => toggleDarkMode()}>
      {mode ? <SunSVG /> : <MoonSVG />}
      <p>{mode ? '다크모드로 보기' : '일반모드로 보기'}</p>
    </S.DarkMode>
  );
}

export default DarkMode;
