import styled from 'styled-components';

export const UserFeedbackTitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 1px solid var(--pastel-black);

  .title {
    color: var(--text-pastel-black);
    font-size: var(--body-large-font);
    font-weight: bold;
    margin-left: 12px;
    margin-bottom: 20px;
  }
  .create-review-btn {
    width: 140px;
    height: 38px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--black);
    color: var(--white);
    border-radius: 3px;
  }
`;

export const UserPostingList = styled.ul`
  & > li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    border-bottom: 1px solid var(--gray4);

    padding: 18px 13px;
  }
  .empty-msg {
    justify-content: center;
    padding: 30px;
  }
`;
