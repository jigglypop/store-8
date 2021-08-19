import React, { ReactElement, useState } from 'react';
import * as S from './style';

interface Props {
  src: string;
}

export default function ImgMagifier({ src }: Props): ReactElement {
  const IMG_WIDTH = 480;
  const IMG_HEIGHT = 530;
  const MAGNIFIER_HEIGHT = 300;
  const MAGNIFIER_WIDTH = 300;
  const IMG_SRC = 'http://localhost:8000/' + src;

  const [showMagifier, setShowMagifier] = useState(false);
  const [[positionX, positionY], setPosition] = useState([0, 0]);

  const handleMouseEnter = () => setShowMagifier(true);

  const handleMouseLeave = () => setShowMagifier(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const imgElem = e.currentTarget;
    const { top, left } = imgElem.getBoundingClientRect();

    const positionX = getPositionX(e.pageX, left);
    const positionY = getPositionY(e.pageY, top);
    setPosition([positionX, positionY]);
  };

  //마우스 x좌표구하는 함수 (이미지 크기에 따른 제한)
  const getPositionX = (pageX: number, left: number) => {
    const x = pageX - left - window.pageXOffset;

    let positionX = x;
    if (positionX - MAGNIFIER_WIDTH / 2 < 0) positionX = MAGNIFIER_WIDTH / 2;
    if (positionX - MAGNIFIER_WIDTH / 2 > IMG_WIDTH - MAGNIFIER_WIDTH)
      positionX = IMG_WIDTH - MAGNIFIER_WIDTH / 2;
    return positionX;
  };
  //마우스 y좌표구하는 함수 (이미지 크기에 따른 제한)
  const getPositionY = (pageY: number, top: number) => {
    const y = pageY - top - window.pageYOffset;
    let positionY = y;
    if (positionY - MAGNIFIER_HEIGHT / 2 < 0) positionY = MAGNIFIER_HEIGHT / 2;
    if (positionY - MAGNIFIER_HEIGHT / 2 > IMG_HEIGHT - MAGNIFIER_HEIGHT)
      positionY = IMG_HEIGHT - MAGNIFIER_HEIGHT / 2;
    return positionY;
  };

  return (
    <S.ZoomImg
      imgWitdh={IMG_WIDTH}
      imgHeight={IMG_HEIGHT}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img src={IMG_SRC} alt="image" />
      {showMagifier && (
        <S.Magnifier
          width={MAGNIFIER_WIDTH}
          height={MAGNIFIER_HEIGHT}
          positionX={positionX}
          positionY={positionY}
        />
      )}
      {showMagifier && (
        <S.MagnifiedImg
          imgWidth={IMG_WIDTH}
          imgHeight={IMG_HEIGHT}
          magnifierWidth={MAGNIFIER_WIDTH}
          magnifierHeight={MAGNIFIER_HEIGHT}
          positionX={positionX}
          positionY={positionY}
        >
          <img src={IMG_SRC} alt="magnified-image" />
        </S.MagnifiedImg>
      )}
    </S.ZoomImg>
  );
}
