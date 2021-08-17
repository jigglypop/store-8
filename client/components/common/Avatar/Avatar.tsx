import * as S from './style';

// 프로필 이미지 아바타 props타입
export interface IAvatar {
  imageUrl?: string;
  width?: string;
  height?: string;
  boxShadow?: string;
  className?: string;
}
// 프로필 이미지 아바타
export default function Avatar({
  imageUrl = '',
  width = '40px',
  height = '40px',
  boxShadow = '2px 2px 10px var(--text-black-dark)',
  className = 'admin',
}: IAvatar) {
  return (
    <S.Avatar width={width} height={height} boxShadow={boxShadow}>
      <div className="border-div blob white">
        <div className="box">
          <img
            src={`${
              imageUrl === null || imageUrl === '' ? '/public/image/common/avatar.png' : imageUrl
            }`}
            className={`avatar-img ${className}`}
          />
        </div>
      </div>
    </S.Avatar>
  );
}
