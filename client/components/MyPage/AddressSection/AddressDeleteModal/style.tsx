import styled from '@lib/styledComponent';

export const AddressDeleteModal = styled.div`
  min-height: 1 50px;
  border-radius: 20px;
  padding: 40px;
  background-color: var(--background-select-section-dark);

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (min-width: 0px) {
    width: 300px;
  }
  @media only screen and (min-width: 768px) {
    width: 650px;
  }

  .address-modal-title {
    color: var(--text-black-dark);
    margin-bottom: 16px;
    @media only screen and (min-width: 0px) {
      font-size: 1rem;
    }
    @media only screen and (min-width: 768px) {
      font-size: var(--body-huge-font);
    }
  }

  .address-modal-info {
    color: var(--text-black-dark);
    margin-bottom: 16px;
    @media only screen and (min-width: 0px) {
      font-size: var(--body-small-font);
    }
    @media only screen and (min-width: 768px) {
      font-size: 1rem;
    }
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
      color: var(--text-black-dark);
      border: 1px solid var(--line-black-dark);
      &:hover {
        background-color: var(--background-section-dark);
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
