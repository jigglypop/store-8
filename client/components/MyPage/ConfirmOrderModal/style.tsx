import styled from '@lib/styledComponent';

export const ConfirmCheckModal = styled.div`
  min-height: 150px;
  width: 400px;
  border-radius: 20px;
  padding: 40px;
  background-color: var(--background-white);

  display: flex;
  justify-content: space-around;
  flex-direction: column;

  h4 {
    width: 100%;
    text-align: center;
    font-size: var(--body-large-font);
  }

  .container-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button {
      width: 50px;
    }

    button:hover {
      cursor: pointer;
      font-weight: 600;
    }

    .button-ok {
      color: blue;
    }

    .button-cancel {
      color: red;
    }
  }
`;
