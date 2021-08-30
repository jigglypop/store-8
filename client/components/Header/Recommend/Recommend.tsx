import * as S from './style';
import { useRecommend } from '@client/hooks/recommend/recommend';
import { useCheck } from '@client/hooks/auth/check';
import { IRecommend } from '@middle/type/recommend/recommend';
import { Link } from '@client/utils/router';
import { useStoreMode } from '@client/hooks/storemode/storemode';

const idOver = (id: number) => {
  return id + 1 >= 307 ? 307 : id + 1;
};
export default function Recommend() {
  const { recommend } = useRecommend();
  const { check } = useCheck();
  const { storemode } = useStoreMode();

  const isMain = window.location.href.endsWith('main');
  const renderingCondition = !storemode || !isMain;

  return (
    <S.Recommend>
      {check && recommend && renderingCondition && recommend.length !== 0 && (
        <S.RecommendItem storemode={storemode}>
          <h4>추천해요</h4>
          {recommend.map((item: IRecommend, key: number) => (
            <Link to={`/product/${idOver(item.id) - 1}`} key={key} className="recomment-item-link">
              <h5>{item.title}</h5>
            </Link>
          ))}
        </S.RecommendItem>
      )}
    </S.Recommend>
  );
}
