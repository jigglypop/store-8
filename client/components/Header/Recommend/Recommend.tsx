import * as S from './style';
import { useRecommend } from '@client/hooks/recommend/recommend';
import { useCheck } from '@client/hooks/auth/check';
import { IRecommend } from '@middle/type/recommend/recommend';
import { Link } from '@client/utils/router';

const idOver = (id: number) => {
  return id + 1 >= 307 ? 307 : id + 1;
};
export default function Recommend() {
  const { recommend } = useRecommend();
  const { check } = useCheck();

  return (
    <S.Recommend>
      {check && recommend && recommend.length !== 0 && (
        <S.RecommendItem>
          <h4>추천해요</h4>
          {recommend.map((item: IRecommend, key: number) => (
            <Link to={`/product/${idOver(item.id)}`} key={key} className="recommend-item">
              {item.title}
            </Link>
          ))}
        </S.RecommendItem>
      )}
    </S.Recommend>
  );
}
