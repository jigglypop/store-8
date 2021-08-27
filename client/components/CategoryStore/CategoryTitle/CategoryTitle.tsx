import Card from '@client/components/Card/Card';
import { useRouter } from '@client/hooks/router/router';
import { IProduct } from '@server/models/Product';
import { categoryKeyName } from '@middle/category/category';
import * as S from './style';
import { categoryOrderItems, ICategoryOrderItem } from '@client/constants/category_order';
import { Link } from '@client/utils/router';

export default function CategoryStoreTitle() {
  const { router } = useRouter();
  return (
    <S.CategoryStoreTitle>
      <div className="category-name">
        {router && <h4>{categoryKeyName[Number(router.params)]}</h4>}
      </div>
    </S.CategoryStoreTitle>
  );
}
