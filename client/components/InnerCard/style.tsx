import styled from 'styled-components';

export const InnerCard = styled.div`
  .cardInner {
    position: relative;
    height: 361px;
    overflow: hidden;

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

    .image {
      img {
        position: relative;
        width: 292.5px;
        object-fit: cover;
        cursor: pointer;
      }
    }
    &:hover {
      .wc-container {
        top: 8px;
      }
      .card-inner-text-container {
        bottom: 0px;
      }
    }

    .card-inner-text-container {
      position: absolute;
      display: flex;
      align-items: center;
      bottom: -60px;
      width: 100%;
      height: 60px;
      background-color: rgba(0, 0, 0, 0.7);
      transition: bottom 0.3s;
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
`;
