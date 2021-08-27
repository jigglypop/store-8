import styled from 'styled-components';

export const Cart = styled.div`
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
    transform: scale(0.8);
    cursor: pointer;
    transition: all 0.3s;
    path {
      stroke: var(--white);
    }
    circle {
      fill: var(--white);
    }
  }
  svg:hover {
    transform: scale(1);
  }
`;
