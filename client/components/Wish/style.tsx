import styled from 'styled-components';

interface IWish {
  isInMyWish?: boolean;
}

export const Wish = styled.div<IWish>`
  .svg-container {
    width: 36px;
    height: 36px;
    border-radius: 18px;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    transition: all 0.3s;
    fill: ${(props) => (props.isInMyWish ? 'var(--text-dark-picker)' : 'var(--gray3)')};
    transform: scale(0.8);
  }
  svg:hover {
    cursor: pointer;
  }
`;
