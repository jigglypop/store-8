import { Link } from '@client/utils/router';
import * as S from './style';
import { useRecommend } from '@client/hooks/recommend/recommend';
import { useCheck } from '@client/hooks/auth/check';

const RECCOMMEND_MAX = 3000;
const INTRO_TEXT = [
  '이 상품, 궁금하시죠?',
  '이런건 어떠신가요?',
  '이것도 한번 보세요!',
  '일단 클릭해보세요!',
  '좋아 보이지 않나요?',
];

function getRandomIntroText() {
  const length = INTRO_TEXT.length;
  return INTRO_TEXT[Math.floor(Math.random() * length)];
}

const MainRecommend = () => {
  const { recommend } = useRecommend();
  const { check } = useCheck();

  return (
    <S.MainRecommend>
      {check && recommend && recommend.length !== 0 && (
        <div className="main-inner">
          <div className="title text-wrapper">
            <h3>{'당신에게'}</h3>
            <h3 className="number">{RECCOMMEND_MAX}</h3>
            <h3>{'만큼 추천해요!'}</h3>
          </div>
          <div className="content">
            {recommend.map((element, index) => {
              return (
                <Link to={`/product/${element.id}`} className="rec-link">
                  <div className="rec-item">
                    <div className="text">
                      <p className="large">{element.title}</p>
                      <p className="small">{getRandomIntroText()}</p>
                      <div className="text-wrapper">
                        <p className="small">{'당신은'}</p>
                        <p className="small number">{Math.floor(element.sims * RECCOMMEND_MAX)}</p>
                        <p className="small">{'만큼 이걸 좋아할거에요!'}</p>
                      </div>
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
