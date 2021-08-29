import styled from '@client/lib/styledComponent';

export const AlertModal = styled.div`
  min-height: 300px;
  padding: 40px;
  background-color: var(--background-select-section-dark);
  color: var(--text-black-dark);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05);

  @media only screen and (min-width: 0px) {
    width: 350px;
    padding: 20px;
  }
  @media only screen and (min-width: 768px) {
    width: 450px;
    padding: 40px;
  }

  .alert-modal-title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    flex: 1;
    font-size: var(--body-huge-font);
  }
  & button {
    width: 200px;
    height: 50px;
    border-radius: 5px;
    color: var(--text-black-dark);
    border: 1px solid var(--background-black-dark);
    background-color: var(--background-select-section-dark);
    &:hover {
      background-color: var(--background-section-dark);
      color: var(--text-black-dark);
    }
  }
`;
