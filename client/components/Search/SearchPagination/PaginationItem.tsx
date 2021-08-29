import * as S from './style';

import { Link } from '@client/utils/router';
import { useRouter } from '@client/hooks/router/router';

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
      <Link to={`/search/0/?title=${query.title}&page=${num}`} className="pagination-text">
        <p className={isNow ? 'now' : ''}>{num.toString()}</p>
      </Link>
    </S.PaginationItem>
  );
}
export default PaginationItem;
