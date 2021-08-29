import styled from 'styled-components';

export const Card = styled.div`
  .cardInner {
    position: relative;
    display: grid;
    height: 500px;
    grid-column: 1/2;
    overflow: hidden;

    .image {
      img {
        position: relative;
        width: 292.5px;
        object-fit: cover;
        cursor: pointer;
      }
    }

    .wc-container {
      position: absolute;
      top: -36px;

      display: flex;
      flex-direction: flex-end;

      margin-left: 8px;
      width: calc(100% - 8px);
      transition: top 0.3s;

      div:first-child {
        margin-right: 4px;
      }
    }

    &:hover {
      .wc-container {
        top: 8px;
      }
    }

    .text {
      .non-red {
        margin-top: -22px;
      }
      .red {
        position: relative;
        margin: 4px 0px;
        font-size: 20px;
        color: #ff6350;
        font-weight: 600;
      }

      .large {
        margin: 0;
        padding: 3px 0 0 0;
        font-weight: normal;
        color: var(--text-black-dark);
        font-size: 16px;
      }

      .line {
        color: var(--gray3);
        text-decoration: line-through;
        margin: 0;
        padding: 6px 0 2px 0;
        text-align: left;
        font-size: 12px;
      }

      .small {
        margin: 0;
        font-weight: 600;
        font-size: 18px;
        color: var(--text-black-dark);
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .cardInner {
      height: 250px;

      .image {
        img {
          width: 146.25px;
        }
      }
      .text {
        margin-top: 5px;
        .red {
          margin: 2px 2px;
          font-size: 10px;
        }

        .large {
          margin: 2px 2px;
          font-size: 10px;
        }

        .line {
          margin: 2px 2px;
          font-size: 8px;
        }

        .small {
          margin: 2px 2px;
          font-size: 10px;
        }
      }
    }
  }
`;
