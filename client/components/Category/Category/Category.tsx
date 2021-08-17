import Card from '@client/components/Main/Card/Card';
import { useRouter } from '@client/hooks/router/router';
import { IProduct } from '@server/models/Product';
import { categoryKeyName } from '@middle/category/category';
import * as S from './style';
interface ICategoryComponent {
  cards: IProduct[] | undefined;
}
function Category({ cards }: ICategoryComponent) {
  const { router } = useRouter();
  return (
    <S.Category>
      <div className="main-inner">
        <div className="title">
          <div className="category-inner">
            <div className="category-name">
              {router && <h4>{categoryKeyName[Number(router.params)]}</h4>}
            </div>
            <div className="category-items">
              <div className="category-item">추천순</div>
              <div className="category-item">인기순</div>
              <div className="category-item">낮은 가격순</div>
              <div className="category-item">높은 가격순</div>
            </div>
          </div>
        </div>
        <div className="content">
          {cards &&
            cards.map((item: IProduct, index: number) => (
              <Card key={index} index={index} item={item} />
            ))}
        </div>
      </div>
    </S.Category>
  );
}
export default Category;
