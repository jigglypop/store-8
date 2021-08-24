import styled from '@lib/styledComponent';

export const AddressDeleteModal = styled.div`
  min-height: 350px;
  width: 650px;
  border-radius: 20px;
  padding: 40px;
  background-color: var(--background-white);

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .coupon-modal-title {
    font-size: var(--body-huge-font);
    margin-bottom: 12px;
  }
  .coupon-modal-info {
    margin-bottom: 28px;
  }

  .coupon-container {
    max-height: 240px;
    overflow: auto;
  }
  .coupon-div {
    margin: 5px 0px;
  }

  .used-coupon {
    opacity: 0.5;
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
      background-color: var(--background-mint);
      color: var(--text-white);
      &:hover {
        background-color: var(--background-dark-mint);
      }
    }
  }
`;
