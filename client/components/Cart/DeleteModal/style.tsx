import styled from 'styled-components';

export const DeleteModal = styled.div`
  min-height: 350px;
  width: 650px;
  border-radius: 20px;
  padding: 40px;
  background-color: var(--background-select-section-dark);

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .delete-modal-title {
    font-size: var(--body-huge-font);
    color: var(--text-black-dark);
    margin-bottom: 28px;
  }

  .delete-row {
    display: flex;
    flex-direction: row;
    margin-bottom: var(--body-small-font);
    & > p {
      color: var(--text-black-dark);
    }
  }

  .button-space {
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

    .delete-btn {
      background-color: var(--background-red);
      color: var(--text-white);
      &:hover {
        background-color: var(--background-dark-red);
      }
    }
  }
`;
