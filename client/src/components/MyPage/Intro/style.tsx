import styled from 'styled-components';

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  font-size: var(--largeFont);

  h2 {
    font-size: var(--body-title-font);
    font-weight: bold;
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
      margin-bottom: 10px;
    }
  }
`;

export const UserPoint = styled.div`
  display: flex;
  gap: 16px;
  color: var(--text-gray);
  b {
    color: var(--text-pastel-black);
    margin-right: 5px;
  }

  .text-bold {
    font-weight: 600;
  }
`;
