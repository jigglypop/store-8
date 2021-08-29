import styled from 'styled-components';

export const InnerCard = styled.div`
  .cardInner {
    position: relative;
    height: 361px;
    overflow: hidden;

    .wc-container {
      position: absolute;

      display: flex;
      flex-direction: flex-end;

      width: calc(100% - 8px);
      transition: top 0.3s;

      div:first-child {
        margin-right: 4px;
      }
      @media only screen and (min-width: 0px) {
        top: 4px;
        margin-left: 4px;
        transform: scale(0.6);
        transform-origin: left top;
      }
      @media only screen and (min-width: 768px) {
        top: -36px;
        margin-left: 8px;
        transform: scale(1);
      }
    }

    .image {
      img {
        position: relative;
        width: 292.5px;
        object-fit: cover;
        cursor: pointer;
        transition: all 0.3s;
      }
    }

    &:hover {
      .image img {
        transform: scale(1.1);
      }
      .wc-container {
        @media only screen and (min-width: 0px) {
          top: 4px;
        }
        @media only screen and (min-width: 768px) {
          top: 8px;
        }
      }
      .card-inner-text-container {
        bottom: 0px;
      }
    }

    .card-inner-text-container {
      position: absolute;
      display: flex;
      align-items: center;
      width: 100%;
      height: 60px;
      background-color: rgba(0, 0, 0, 0.7);
      transition: bottom 0.3s;

      @media only screen and (min-width: 0px) {
        bottom: 0px;
      }
      @media only screen and (min-width: 768px) {
        bottom: -60px;
      }
    }
    .text-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 6px;
    }
    .text {
      padding: 6px;

      .red {
        position: relative;
        color: var(--text-red);
        font-weight: 700;
        margin-right: 8px;
      }
      .large {
        margin: 0;
        font-weight: normal;
        color: var(--text-white);
      }
      .line {
        color: var(--gray3);
        text-decoration: line-through;
        text-align: left;
        margin-right: 6px;
        margin-top: -4px;
        font-size: 12px;
      }
      .small {
        margin: 0;
        font-weight: 700;
        color: var(--text-white);
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .cardInner {
      height: 180.5px;

      .image {
        img {
          width: 146.25px;
        }
      }
      .text {
        margin-top: 5px;
        .red {
          font-size: 12px;
        }

        .large {
          font-size: 12px;
        }

        .line {
          font-size: 10px;
        }

        .small {
          font-size: 12px;
        }
      }
    }
  }
`;
