import styled from 'styled-components';

interface IWish {
  isInMyWish?: boolean;
}

export const Wish = styled.div<IWish>`
  svg {
    fill: ${(props) => (props.isInMyWish ? 'var(--text-dark-picker)' : 'var(--gray3)')};
    transform: scale(0.8);
  }
  svg:hover {
    cursor: pointer;
  }
`;
