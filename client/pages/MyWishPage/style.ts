import styled from 'styled-components';

export const MyWishPage = styled.div`
  width: var(--app-width);
  margin: 0px calc(50vw - var(--app-width) / 2) 0px calc(50vw - var(--app-width) / 2);
  position: relative;

  display: flex;
  justify-content: center;

  .mypage-inner {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
`;
