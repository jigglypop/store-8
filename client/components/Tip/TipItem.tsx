import * as S from './style';

export const IntroTipItem = () => {
  return (
    <S.TipItem>
      <h1>3D 드림문방구 시작부분 이용방법</h1>
      <div className="img-content">
        <img src={'/public/image/tip/1.png'} />
        <img src={'/public/image/tip/2.png'} />
      </div>
    </S.TipItem>
  );
};

export const CategoryTipItem = () => {
  return (
    <S.TipItem>
      <h1>3D 드림문방구 카테고리 이용방법</h1>
      <div className="img-content">
        <img src={'/public/image/tip/5.png'} />
        <img src={'/public/image/tip/6.png'} />
      </div>
    </S.TipItem>
  );
};
export const MainTipItem = () => {
  return (
    <S.TipItem>
      <h1>3D 드림문방구 메인 이용방법</h1>
      <div className="img-content">
        <img src={'/public/image/tip/3.png'} />
        <img src={'/public/image/tip/4.png'} />
      </div>
    </S.TipItem>
  );
};
