import styled from "styled-components";

export const Card = styled.div`
  .cardInner {
    position: relative;
    display: grid;
    grid-column: 1/2;

    .image {
      img {
        position: relative;
        width: 280px;
        cursor: pointer;
      }
      .underbutton {
        position: absolute;
        transition: all 0.3s ease-in;

        width: 280px;
        display: flex;
        justify-content: center;
        align-items: center;

        .smallbutton {
          width: 30px;
          height: 30px;
          line-height: 28px;
          color: #000;
          background: #ffffff;
        }
      }
    }
    .text {
      z-index: 1;
      background: #ffffff;
      .red {
        position: relative;
        margin: 0;
        font-size: 20px;
        color: #ff6350;
        font-weight: 600;
      }
      .large {
        margin: 0;
        padding: 3px 0 0 0;
        position: relative;
        font-weight: normal;
        color: #333;
        font-size: 16px;
      }
      .line {
        color: #888;
        text-decoration: line-through;
        margin: 0;
        padding: 20px 0 0 0;
        text-align: left;
        vertical-align: middle;
        font-size: 12px;
      }
      .small {
        margin: 0;
        font-weight: 600;
        font-size: 18px;
        color: #000;
      }
    }
    .mark {
      position: absolute;
      button {
        border: none;
        border-radius: 2px;
        margin-left: 3px;
      }

      .green {
        background: #38ef7d;
      }
      .new {
        background: #6dd5ed;
      }
      .sale {
        background: #ed213a;
      }
      .marktext {
        margin: 0;
        padding: 2px 0;
        color: white;
        font-weight: 600;
      }
    }
  }
`;
