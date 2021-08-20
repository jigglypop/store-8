import styled from '@lib/styledComponent';

// 푸터 부분
export const Coupon = styled.div`
  height: 60px;
  width: calc(100% - 3px);
  background-color: var(--background-gray);
  display: flex;
  flex-direction: row;
  position: relative;

  .coupon {
    &-yellow {
      height: 60px;
      width: 3px;
      background-color: var(--background-yellow);
    }
    &-dark-blue {
      height: 60px;
      width: 3px;
      background-color: var(--background-dark-blue);
    }
    &-red {
      height: 60px;
      width: 3px;
      background-color: var(--background-red);
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
  .coupon-checked {
    position: absolute;
    width: 16px;
    object-fit: contain;
    top: calc(50% - 8px);
    right: 21px;
  }
`;
