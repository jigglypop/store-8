import styled from 'styled-components';

export const CartContainer = styled.table`
  width: calc(100% - 70px);
  border-spacing: 0px;
  border-collapse: separate;
  border-bottom: 0.5px solid var(--cartGrey);
  .container-header {
    width: 100%;
    height: 36px;
    margin: 40px 0px 0px 0px;
    padding: 0px;
    background-color: var(--backgroundGrey);
    border-top: 0.5px solid var(--pastelBlack);
  }
  .content-center-align {
    height: 36px;
  }
  .content-check {
    width: 36px;
  }
  .content-info {
    width: calc(70% - 36px);
  }
  .content-count {
    width: 10%;
  }
  .content-amount {
    width: 10%;
  }
  .content-ship {
    width: 10%;
  }
  .content-title-text {
    font-weight: bold;
    color: var(--pastelBlack);
    font-size: 12px;
  }
`;
