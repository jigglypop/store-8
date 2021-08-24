import Card from '@client/components/Card/Card';
import { useRouter } from '@client/hooks/router/router';
import { IProduct } from '@server/models/Product';
import { categoryKeyName } from '@middle/category/category';
import * as S from './style';
import { categoryOrderItems, ICategoryOrderItem } from '@client/constants/category_order';
import { Link } from '@client/utils/router';
import { useCategory } from '@client/hooks/category/category';

export default function Category() {
  const { category } = useCategory();
  const { router, query } = useRouter();
  return (
    <S.Category>
      <div className="main-inner">
        <div className="title">
          <div className="category-inner">
            <div className="category-name">
              {router && <h4>{categoryKeyName[Number(router.params)]}</h4>}
            </div>
            <div className="category-items">
              {categoryOrderItems.map((item: ICategoryOrderItem, index: number) => (
                <Link to={`/category/${router.params}/?page=1&order=${item.id}`} key={index}>
                  <div className={`category-item ${item.id === query.order ? 'isSelected' : ''}`}>
                    {item.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="content">
          {category &&
            category.rows &&
            category.rows.map((item: IProduct, index: number) => (
              <Card key={index} index={index} item={item} />
            ))}
        </div>
      </div>
    </S.Category>
  );
}
