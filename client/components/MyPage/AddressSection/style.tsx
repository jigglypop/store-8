/// import styled from '@lib/styledComponent';
import styled from 'styled-components';

export const AddressSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 12px;
  margin-bottom: 30px;
  width: 940px;
  min-height: 620px;

  @media only screen and (max-width: 960px) {
    width: 90vw;
  }

  .address-header {
    flex-direction: row;

    width: 100%;
    margin-top: 60px;
    padding: 10px 0px;

    background-color: var(--gray6);
    border-top: 1px solid var(--gray4);
    border-bottom: 1px solid var(--gray5);

    @media only screen and (min-width: 0px) {
      display: none;
    }
    @media only screen and (min-width: 375px) {
      display: none;
    }
    @media only screen and (min-width: 768px) {
      display: flex;
    }
    @media only screen and (min-width: 1300px) {
      display: flex;
    }
  }

  .title-text {
    font-size: var(--body-small-font);
    font-weight: 600;
  }

  .base-check-section {
    width: 10%;
  }

  .address-name-section {
    width: 15%;
  }

  .address-location-section {
    width: 30%;
  }

  .address-receiver-section {
    width: 15%;
  }

  .address-call-section {
    width: 15%;
  }

  .address-modify-section {
    width: 15%;
  }

  .add-address {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 12px;
    margin-bottom: 60px;
    cursor: pointer;

    .add-image {
      path {
        stroke: var(--text-black-dark);
      }
      circle {
        stroke: var(--text-black-dark);
      }
      margin-right: 12px;
    }
    img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
    p {
      color: var(--text-black-dark);
    }
  }
`;
