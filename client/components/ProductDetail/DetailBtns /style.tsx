import styled from '@client/lib/styledComponent';

interface StyledProps {
  isHeart: boolean;
}

export const DetailBtns = styled.div<StyledProps>`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 30px;

  background-color: var(--body-background-dark);

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    padding: 3px;
  }

  .like-btn {
    background-color: var(--body-background-dark);
    border: 1px solid var(--gray4);
    width: 50px;
    border-radius: 5px;

    & > svg {
      stroke-width: ${({ isHeart }) => (isHeart ? '0px' : '1px')};
      fill: var(${({ isHeart }) => (isHeart ? '--red' : '--white')});
    }
  }

  .cart-btn {
    width: 170px;
    color: var(--text-black-dark);
    background-color: var(--body-background-dark);
    border: 1px solid var(--gray4);
    border-radius: 5px;
  }

  .like-btn:hover,
  .cart-btn:hover {
    background-color: var(--background-white-dark);
  }

  .purchase-btn {
    width: 230px;
    color: var(--text-white);
    background-color: var(--tag-picker);
    border-radius: 5px;
  }

  .purchase-btn:hover {
    opacity: 0.9;
  }
`;
