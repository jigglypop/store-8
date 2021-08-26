import styled from '@lib/styledComponent';

export const OptionModal = styled.div`
  min-height: 350px;
  width: 700px;
  border-radius: 20px;
  padding: 40px;
  background-color: var(--background-white);

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .option-modal-title {
    font-size: var(--body-huge-font);
    margin-bottom: 28px;
  }

  .product-count-header {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .product-count-container {
    display: flex;
    flex-direction: row;
    width: 100px;
    height: 22px;
    align-items: center;
    justify-content: space-between;

    & > p {
      margin-top: 3px;
      font-size: 22px;
      font-weight: bold;
    }

    .num-scaler {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }
  }

  .option-container {
    max-height: 240px;
    overflow: auto;
  }
  .option-div {
    margin: 5px 0px;
  }

  .button-space {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > button {
      width: 100px;
      height: 36px;
      border-radius: 4px;
    }

    .cancle-btn {
      border: 1px solid black;
      &:hover {
        background-color: var(--background-gray);
      }
    }

    .submit-btn {
      background-color: var(--prime-picker);
      color: var(--text-white);
      &:hover {
        background-color: var(--prime-hover-picker);
      }
    }
  }
`;

export const Option = styled.div`
  height: 60px;
  width: 100%;
  background-color: var(--background-gray);
  display: flex;
  flex-direction: row;
  position: relative;

  .option-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 12px;

    .option-title {
      font-size: var(--body-middle-font);
      font-weight: 700;
      color: var(--text-pastel-black);
    }
    .option-dDay {
      margin-top: 5px;
      font-size: var(--body-small-font);
      color: var(--text-pastel-black);
    }
  }
  .option-checked {
    position: absolute;
    width: 16px;
    object-fit: contain;
    top: calc(50% - 8px);
    right: 21px;
  }
`;
