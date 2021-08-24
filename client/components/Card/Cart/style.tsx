import styled from 'styled-components';

export const Cart = styled.div`
  svg {
    transform: scale(0.8);
    path {
      stroke: var(--text-black-dark);
    }
    circle {
      fill: var(--text-black-dark);
    }
  }
  svg:hover {
    transform: scale(1);
    cursor: pointer;
  }
`;
