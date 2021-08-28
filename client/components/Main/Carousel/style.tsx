import styled from 'styled-components';

export const CarouselDot = styled.li`
  position: relative;
  margin: 0 5px;
  padding: 0;
  cursor: pointer;
  width: 15px;
  height: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;
    border: none;
  }

  .dot-white {
    background: var(--white);
  }

  .dot-gray {
    background: var(--gray3);
  }

  h4 {
    visibility: hidden;
  }
`;

export const Carousel = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .carouselInner {
    position: relative;
    width: 100%;
    width: var(--carousel-width);
    margin: 20px;
    height: 600px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
  }

  .carousels {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.3s ease-in;
  }

  .carousel {
    width: var(--carousel-width);
    height: 600px;
    object-fit: cover;
  }

  .carouselButton {
    position: absolute;
    width: var(--carousel-width);
    bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
