import styled from 'styled-components';

export const ProductDetailSection = styled.div`
  margin-bottom: 3rem;
  @media only screen and (max-width: 1300px) {
    width: 668px;
  }
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 375px) {
  }
`;

export const UserFeedbackTitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  background-color: var(--body-background-dark);
  color: var(--text-black-dark);
  border-bottom: 1px solid var(--text-black-dark);

  .title {
    color: var(--text-pastel-black-dark);
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
    border: 1px solid var(--text-black-dark);
    border-radius: 3px;
  }
`;

export const UserPostingList = styled.ul`
  min-height: 300px;
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
