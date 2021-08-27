import { useRouter } from '@client/hooks/router/router';
import { Link } from '@client/utils/router';
import * as S from './style';

interface IPaginationItemComponent {
  num: number;
}
// 카테고리 페이지네이션 아이템
// 지금 선택하고 있는게 페이지랑 일치하는지 보고 색 바꿔줌
function PaginationItem({ num }: IPaginationItemComponent) {
  const { router, query } = useRouter();
  const isNow = num === Number(query.page);
  return (
    <S.PaginationItem>
      <Link
        to={`/category/${router.params}/?page=${num}&order=${query.order}`}
        className="pagination-text"
      >
        <p className={isNow ? 'now' : ''}>{num.toString()}</p>
      </Link>
    </S.PaginationItem>
  );
}
export default PaginationItem;
