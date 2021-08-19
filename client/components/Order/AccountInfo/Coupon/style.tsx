import styled from '@lib/styledComponent';

// 푸터 부분
export const Coupon = styled.div`
  height: 60px;
  width: calc(100% - 3px);
  background-color: var(--background-gray);
  display: flex;
  flex-direction: row;

  .coupon {
    &-yellow {
      height: 60px;
      width: 3px;
      background-color: var(--background-yellow);
    }
  }
  .coupon-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 12px;

    .coupon-title {
      font-size: var(--body-middle-font);
      font-weight: 600;
      color: var(--text-pastel-black);
    }
    .coupon-dDay {
      margin-top: 5px;
      font-size: var(--body-small-font);
      color: var(--text-pastel-black);
    }
  }
`;
