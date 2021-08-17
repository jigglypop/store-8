import styled from '@lib/styledComponent';

export const CartContainer = styled.table`
  width: 100%;
  margin-top: 60px;
  border-spacing: 0px;
  border-bottom: 0.5px solid var(--line-gray);
  border-top: 0.5px solid var(--line-black);

  thead,
  tbody,
  tfoot {
    vertical-align: middle;
  }
  td,
  th,
  tr {
    vertical-align: inherit;
  }

  .cart-container-header {
    width: 100%;
    height: 2.25rem;
    margin: 40px 0px 0px 0px;
    background-color: var(--background-gray);
  }

  .cart-container-header th {
    height: 2.25rem;
  }

  .cart-content-check-colgroup {
    @media only screen and (min-width: 375px) {
      width: 1.25rem;
    }
    @media only screen and (min-width: 768px) {
      width: 1.75rem;
    }
    @media only screen and (min-width: 1300px) {
      width: 2.25rem;
    }
  }

  .cart-content-info-colgroup {
    @media only screen and (min-width: 375px) {
      width: calc(54% - 1.75rem);
    }
    @media only screen and (min-width: 768px) {
      width: calc(59% - 1.75rem);
    }
    @media only screen and (min-width: 1300px) {
      width: calc(67% - 2.25rem);
    }
  }

  .cart-content-count-colgroup {
    width: 11%;
  }

  .cart-content-amount-colgroup {
    @media only screen and (min-width: 375px) {
      width: 22%;
    }
    @media only screen and (min-width: 768px) {
      width: 18%;
    }
    @media only screen and (min-width: 1300px) {
      width: 11%;
    }
  }

  .cart-content-ship-colgroup {
    width: 11%;
  }

  .cart-content-title-text {
    font-weight: bold;
    color: var(--text-black);
    font-size: var(--body-small-font);
  }

  .cart-content-body > tr:first-child > td:last-child {
    border-left: 0.5px solid var(--line-gray);
  }
`;

export const CartGoToBack = styled.div`
  margin-top: 12px;
  .cart-keep-shopping {
    font-size: var(--body-small-font);
    color: var(--text-black);
    text-align: center;
    padding-bottom: 4px;
    border-bottom: 1px solid var(--text-black);
    cursor: pointer;
  }
`;

export const NothingView = styled.div`
  .cart-nothing-container {
    height: 140px;
  }
  .cart-nothing-container > p {
    font-size: var(--body-small-font);
    color: var(--text-gray);
  }
`;
