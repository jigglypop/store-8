import styled from 'styled-components';

export const DeleteModal = styled.div`
  border-radius: 20px;
  background-color: var(--background-select-section-dark);

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (min-width: 0px) {
    width: 300px;
    min-height: 150px;
    padding: 20px;
  }
  @media only screen and (min-width: 768px) {
    width: 650px;
    min-height: 350px;
    padding: 40px;
  }

  .delete-modal-contents-container {
    @media only screen and (min-width: 0px) {
      overflow-y: auto;
    }
    @media only screen and (min-width: 768px) {
      overflow-y: inherit;
    }
  }

  .delete-modal-title {
    color: var(--text-black-dark);

    @media only screen and (min-width: 0px) {
      font-size: var(--body-large-font);
      margin-bottom: 18px;
    }
    @media only screen and (min-width: 768px) {
      font-size: var(--body-huge-font);
      margin-bottom: 28px;
    }
  }

  .delete-row {
    display: flex;
    flex-direction: row;
    margin-bottom: var(--body-small-font);

    @media only screen and (min-width: 0px) {
      font-size: var(--body-middle-font);
    }
    @media only screen and (min-width: 768px) {
      font-size: 1rem;
    }

    & > p {
      color: var(--text-black-dark);
    }
  }

  .button-space {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 12px;

    & > button {
      @media only screen and (min-width: 0px) {
        width: 80px;
        height: 24px;
        border-radius: 3px;
      }
      @media only screen and (min-width: 768px) {
        width: 100px;
        height: 36px;
        border-radius: 4px;
      }
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
