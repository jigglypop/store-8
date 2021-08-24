import styled from '@lib/styledComponent';

export const AddressDeleteModal = styled.div`
  min-height: 1 50px;
  width: 650px;
  border-radius: 20px;
  padding: 40px;
  background-color: var(--background-white);

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .address-modal-title {
    font-size: var(--body-huge-font);
    margin-bottom: 16px;
  }

  .address-modal-info {
    margin-bottom: 16px;
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

    .remove-btn {
      background-color: var(--background-red);
      color: var(--text-white);
      &:hover {
        background-color: var(--background-dark-red);
      }
    }
  }
`;
