import styled from 'styled-components';

export const CartContainer = styled.div`
  .container-header {
    width: calc(100% - 80px);
    height: 36px;
    display: grid;
    margin: 40px 0px 0px 0px;
    grid-template-columns: 36px repeat(10, 1fr);
    background-color: var(--backgroundGrey);
    border-top: 0.5px solid var(--pastelBlack);
  }
  .content-center-align {
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content-check {
    width: 36px;
  }
  .content-info {
    grid-column-start: 2;
    grid-column-end: 9;
  }
  .content-count {
    grid-column-start: 9;
    grid-column-end: 10;
  }
  .content-amount {
    grid-column-start: 10;
    grid-column-end: 11;
  }
  .content-ship {
    grid-column-start: 11;
    grid-column-end: 12;
  }
  .content-title-text {
    font-weight: bold;
    color: var(--pastelBlack);
    font-size: 12px;
  }
`;
