import cache from '@client/utils/cache';
import { Link } from '@client/utils/router';
import * as S from './style';
import { useRecommend } from '@client/hooks/recommend/recommend';
import { useCheck } from '@client/hooks/auth/check';

const MainRecommend = () => {
  const { recommend } = useRecommend();
  const { check } = useCheck();

  return (
    <S.MainRecommend>
      {check && recommend && recommend.length !== 0 && (
        <div className="main-inner">
          <div className="title">
            <h3>{'당신에게 추천해요!'}</h3>
          </div>
          <div className="content">
            {recommend.map((element, index) => {
              return (
                <Link to={`/product/${element.id + 1}`} className="gift-link">
                  <div className="gift-item">
                    <div className="text">
                      <p className="large">{element.title}</p>
                      <p className="small">{'이상품, 궁금하시죠?'}</p>
                      <p className="small">{`당신은 ${(element.sims * 100).toFixed(
                        1
                      )}% 만큼 이걸 좋아할거에요!`}</p>
                    </div>
                    <div className="image">
                      <img src={element.productImgSrc} alt={`recommend${index}`} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </S.MainRecommend>
  );
};

export default MainRecommend;
