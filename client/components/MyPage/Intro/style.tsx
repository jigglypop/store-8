import styled from 'styled-components';

export const Intro = styled.div`
  min-height: 150px;
  display: flex;
  flex-direction: row;
  font-size: var(--largeFont);
  grid-template-columns: 200px 1fr;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }

  .left {
    max-width: 200px;
    min-width: 100px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right {
    min-width: 100px;
    flex-grow: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .container-greeting {
      display: flex;
      flex-direction: row;
      align-items: baseline;

      .button-edit-profile:hover {
        cursor: pointer;
      }
    }
  }

  h2 {
    font-family: 'Do Hyeon', sans-serif;
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
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 35px;
      font-weight: bold;
    }

    .user-grade {
      font-size: 15px;
    }
  }
  @media only screen and (max-width: 400px) {
    h2 {
      font-size: 25px;
      font-weight: bold;
    }

    .user-grade {
      font-size: 10px;
    }
  }
`;

export const UserPoint = styled.div`
  display: flex;
  gap: 16px;
  color: var(--text-gray);
  .coupon-cursor {
    cursor: pointer;
  }
  b {
    color: var(--text-dark-picker);
    margin-right: 5px;
  }

  .text-bold {
    font-weight: 600;
  }
`;
