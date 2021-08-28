import React, { ReactElement, useState } from 'react';
import * as S from './style';

interface Props {
  src: string;
  isTablet?: boolean;
  isMobile?: boolean;
}

export default function ImgMagifier({
  src,
  isTablet = false,
  isMobile = false,
}: Props): ReactElement {
  const IMG_SRC = src;
  let imgWidth: number = 480;
  let imgHeight: number = 530;
  let magifiedHeight: number = 300;
  let magnifiedWidth: number = 300;

  if (isTablet) {
    imgWidth = 300;
    imgHeight = 330;
    magifiedHeight = 150;
    magnifiedWidth = 150;
  }

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
    if (positionX - magnifiedWidth / 2 < 0) positionX = magnifiedWidth / 2;
    if (positionX - magnifiedWidth / 2 > imgWidth - magnifiedWidth)
      positionX = imgWidth - magnifiedWidth / 2;
    return positionX;
  };
  //마우스 y좌표구하는 함수 (이미지 크기에 따른 제한)
  const getPositionY = (pageY: number, top: number) => {
    const y = pageY - top - window.pageYOffset;
    let positionY = y;
    if (positionY - magifiedHeight / 2 < 0) positionY = magifiedHeight / 2;
    if (positionY - magifiedHeight / 2 > imgHeight - magifiedHeight)
      positionY = imgHeight - magifiedHeight / 2;
    return positionY;
  };

  return (
    <S.ZoomImg
      imgWitdh={imgWidth}
      imgHeight={imgHeight}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img src={IMG_SRC} alt="image" />
      {showMagifier && !isMobile && (
        <S.Magnifier
          width={magnifiedWidth}
          height={magifiedHeight}
          positionX={positionX}
          positionY={positionY}
        />
      )}
      {showMagifier && !isMobile && (
        <S.MagnifiedImg
          imgWidth={imgWidth}
          imgHeight={imgHeight}
          magnifierWidth={magnifiedWidth}
          magnifierHeight={magifiedHeight}
          positionX={positionX}
          positionY={positionY}
        >
          <img src={IMG_SRC} alt="magnified-image" />
        </S.MagnifiedImg>
      )}
    </S.ZoomImg>
  );
}
