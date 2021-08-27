import styled from 'styled-components';

export const DetailInfo = styled.section`
  margin-top: 45px;
  color: var(--text-black-dark);
  .title {
    margin-left: 50px;
    margin-bottom: 50px;
    font-size: var(--body-large-font);
    font-weight: bold;
  }
  .detail-imgs {
    text-align: center;
  }
  @media only screen and (min-width: 375px) {
    width: 100vw;
    .detail-imgs > img {
      width: 100vw;
    }
  }
  @media only screen and (min-width: 768px) {
    width: 668px;
    .detail-imgs > img {
      width: 668px;
    }
  }
  @media only screen and (min-width: 1300px) {
    width: 1200px;
    .detail-imgs > img {
      width: 1200px;
    }
  }
`;
