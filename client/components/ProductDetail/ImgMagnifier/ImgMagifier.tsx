import { debounce } from '@client/utils/performance';
import React, { ReactElement, useState } from 'react';
import { useEffect } from 'react';
import * as S from './style';

interface Props {
  src: string;
}

export default function ImgMagifier({ src }: Props): ReactElement {
  const IMG_SRC = src;
  const [imgWidth, setImgWitdh] = useState(480);
  const [imgHeight, setImgHeight] = useState(530);
  const [magifiedHeight, setMagifiedHeight] = useState(300);
  const [magnifiedWidth, setMagnifiedWidth] = useState(300);
  const [showMagifier, setShowMagifier] = useState(false);
  const [[positionX, positionY], setPosition] = useState([0, 0]);

  const resizeImg = () => {
    const width = window.innerWidth;

    if (width > 1300) {
      setImgWitdh(480);
      setImgHeight(530);
      setMagifiedHeight(300);
      setMagnifiedWidth(300);
    } else {
      setImgWitdh(300);
      setImgHeight(330);
      setMagifiedHeight(150);
      setMagnifiedWidth(150);
    }
  };

  const handleWindowSize = debounce(resizeImg, 200);
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

  useEffect(() => {
    resizeImg();
    window.addEventListener('resize', handleWindowSize);
    return () => window.removeEventListener('resize', handleWindowSize);
  }, []);

  return (
    <S.ZoomImg
      imgWitdh={imgWidth}
      imgHeight={imgHeight}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img src={IMG_SRC} alt="image" />
      {showMagifier && (
        <S.Magnifier
          width={magnifiedWidth}
          height={magifiedHeight}
          positionX={positionX}
          positionY={positionY}
        />
      )}
      {showMagifier && (
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
