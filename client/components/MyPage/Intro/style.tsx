import styled from 'styled-components';

export const Intro = styled.div`
  position: relative;
  height: 150px;
  display: grid;
  flex-direction: column;
  font-size: var(--largeFont);
  grid-template-columns: 200px 1fr;

  .left {
    grid-column: 1/2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right {
    grid-column: 2/3;
    line-height: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  h2 {
    font-family: 'BMDOHYEON';
    font-size: 60px;
    font-weight: bold;
    color: var(--text-dark-picker);
    margin: 2rem 0;
  }
  .container-user-point {
    display: flex;
    .container-user-coupon {
      padding-right: 16px;
      margin-right: 16px;
      border-right: 1px solid #626666;
    }
  }

  .text-user-info {
    & > div:first-child {
      color: var(--text-black-dark);
      margin-bottom: 10px;
    }
  }
`;

export const UserPoint = styled.div`
  display: flex;
  gap: 16px;
  color: var(--text-gray);
  b {
    color: var(--text-dark-picker);
    margin-right: 5px;
  }

  .text-bold {
    font-weight: 600;
  }
`;
