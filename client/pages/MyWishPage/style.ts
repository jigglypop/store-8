import styled from 'styled-components';

export const MyWishPage = styled.div`
  margin-top: 12px;
  margin-left: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 32px;
  min-height: 650px;

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
