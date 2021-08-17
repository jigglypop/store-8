import Category from '@client/components/Category/Category/Category';
import CategoryPagination from '@client/components/Category/CategoryPagination/CategoryPagination';
import { useCategory } from '@client/hooks/category/category';
import * as S from './style';

const CategoryPage = () => {
  const { category } = useCategory();
  return (
    <S.CategoryPage>
      {category && (
        <>
          <Category cards={category.rows} />
          <CategoryPagination page={category.count} />
        </>
      )}
    </S.CategoryPage>
  );
};

export default CategoryPage;
