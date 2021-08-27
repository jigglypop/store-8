import cache from '@client/utils/cache';
import { setDarkMode } from '@client/utils/setDisplay';
import { MouseEvent } from 'react';
import * as S from '../style';
function Picker() {
  const onClick = (e: any) => {
    if (e.target.className === 'colorpicker-button') {
      const colors = e.target.id.split('-');
      cache.set('color', colors[1]);
      setDarkMode();
    }
  };
  return (
    <S.Picker className="colorpicker-outer">
      <div className="colorpicker-outer" onClick={(e) => onClick(e)}>
        <div className="colorpicker-button" id="color-1">
          <h4></h4>
        </div>
        <div className="colorpicker-button" id="color-2">
          <h4></h4>
        </div>
        <div className="colorpicker-button" id="color-3">
          <h4></h4>
        </div>
        <div className="colorpicker-button" id="color-4">
          <h4></h4>
        </div>
      </div>
    </S.Picker>
  );
}

export default Picker;
