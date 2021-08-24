import styled from '@lib/styledComponent';

export const AddressResult = styled.div`
  width: 940px;
  padding: 10px 0px;
  display: flex;
  flex-direction: row;
  .content-text {
    font-size: var(--body-small-font);
  }
  .content-main-text {
    font-size: var(--body-small-font);
    font-weight: 600;
    margin-bottom: 8px;
  }
  .base-check-section {
    img {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }
  }
  .address-location-section {
    flex-direction: column;
  }
  .address-call-section {
    flex-direction: column;
  }
  .address-modify-section {
    flex-direction: row;

    .modify-button {
      padding: 4px 8px;
      cursor: pointer;
      background-color: var(--background-white);
      border: 1px solid var(--border-dark-gray);
      color: var(--text-pastel-black);
      margin-right: 3px;
      border-radius: 2px;
      &:hover {
        background-color: var(--background-gray);
      }
    }

    .remove-button {
      cursor: pointer;
      background-color: var(--background-red);
      color: var(--text-white);
      padding: 5px 8px;
      border-radius: 2px;
      &:hover {
        background-color: var(--background-dark-red);
      }
    }
  }
`;
