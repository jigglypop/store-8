import styled from '@lib/styledComponent';

export const Proceed = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.875rem;

  .cart-proceed-button-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .cart-proceed-button-side-layout {
    display: flex;
    flex-direction: row;
  }

  .cart-proceed-button-side-layout > div:first-child {
    margin-right: 0.625rem;
  }

  .cart-proceed-guide-container {
    margin-top: 1.25rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .cart-proceed-guide-container > img {
    width: 0.875rem;
    height: 0.875rem;
    margin-right: 0.25rem;
  }

  .cart-proceed-guide-container > p {
    font-size: var(--body-small-font);
  }
`;
