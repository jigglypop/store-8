import Category from '@client/components/Category/Category/Category';
import CategoryPagination from '@client/components/Category/CategoryPagination/CategoryPagination';
import { useCategory } from '@client/hooks/category/category';
import { useStoreMode } from '../../hooks/storemode/storemode';
import * as S from './style';

const CategoryPage = () => {
  const { storemode } = useStoreMode();
  const { category, pages } = useCategory();

  return (
    <>
      {storemode ? (
        <>
          {category && pages && (
            <S.CategoryPage>
              <Category />
              <CategoryPagination />
            </S.CategoryPage>
          )}
        </>
      ) : (
        <>
          <h1>카테고리</h1>
        </>
      )}
    </>
  );
};

export default CategoryPage;
