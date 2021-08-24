import { MyPage } from '@components/MyPage/common/style';
import styled from 'styled-components';

export const MyWishPage = styled(MyPage)`
  @media only screen and (min-width: 1200px) {
    flex-direction: row;

    #navigation-small {
      display: none;
    }
  }
  /* 캐러셀  width만 조정 */
  @media only screen and (max-width: 1200px) {
    flex-direction: column;

    #navigation-big {
      display: none;
    }
  }
`;
