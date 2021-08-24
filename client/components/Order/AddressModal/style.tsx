import styled from '@lib/styledComponent';

export const AddressModal = styled.div`
  min-height: 350px;
  width: 650px;
  border-radius: 20px;
  padding: 40px;
  background-color: var(--background-white);

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .address-modal-title {
    font-size: var(--body-huge-font);
    margin-bottom: 28px;
  }

  .address-container {
    max-height: 240px;
    overflow: auto;
  }
  .address-div {
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
      background-color: var(--background-mint);
      color: var(--text-white);
      &:hover {
        background-color: var(--background-dark-mint);
      }
    }
  }
`;

export const Address = styled.div`
  height: 60px;
  width: 100%;
  background-color: var(--background-gray);
  display: flex;
  flex-direction: row;
  position: relative;

  .address-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 12px;

    .address-title {
      font-size: var(--body-middle-font);
      font-weight: 700;
      color: var(--text-pastel-black);
    }
    .address-dDay {
      margin-top: 5px;
      font-size: var(--body-small-font);
      color: var(--text-pastel-black);
    }
  }
  .address-checked {
    position: absolute;
    width: 16px;
    object-fit: contain;
    top: calc(50% - 8px);
    right: 21px;
  }
`;