import styled from '@lib/styledComponent';

export const AddressSection = styled.div`
  padding-top: 12px;
  .address-header {
    display: flex;
    flex-direction: row;

    width: 940px;
    margin-top: 60px;
    padding: 10px 0px;

    background-color: var(--gray6);
    border-top: 1px solid var(--gray4);
    border-bottom: 1px solid var(--gray5);
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
    width: 37.5%;
  }

  .address-receiver-section {
    width: 10%;
  }

  .address-call-section {
    width: 12.5%;
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
