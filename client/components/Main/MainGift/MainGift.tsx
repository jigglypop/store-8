import { Link } from '@client/utils/router';
import * as S from './style';

const MainGift = () => {
  return (
    <S.MainGift>
      <div className="main-inner">
        <div className="title">
          <h3>선물하기 딱 좋아요!</h3>
        </div>
        <div className="content">
          <Link to={`/product/${270}`} className="gift-link">
            <div className="gift-item">
              <div className="image">
                <img src="public/image/gift/gift1.jpg" alt="gift1" />
              </div>
              <div className="text">
                <p className="large">소리에 집중해보세요</p>
                <p className="small">을지로 연필. 사각사각</p>
              </div>
            </div>
          </Link>
          <Link to={`/product/${223}`} className="gift-link">
            <div className="gift-item">
              <div className="image">
                <img src="public/image/gift/gift2.jpg" alt="gift2" />
              </div>
              <div className="text">
                <p className="large">우리 둘만 아는 이야기</p>
                <p className="small">쉿 비밀펜으로 써보세요</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </S.MainGift>
  );
};

export default MainGift;
