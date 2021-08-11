import styled from "styled-components";

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
    background: var(--grayA);
  }

  .dot-gray {
    background: var(--grayD);
  }

  h4 {
    visibility: hidden;
  }
`;

export const Carousel = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .carouselInner {
    width: var(--carousel-width);
    height: 500px;
    overflow: hidden;
  }

  .carousels {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.3s ease-in;
  }

  .carousel {
    width: var(--carousel-width);
    height: 500px;
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
