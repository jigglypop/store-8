import styled from '@lib/styledComponent';

export const AddressResult = styled.div`
  width: 940px;
  padding: 10px 0px;
  display: flex;
  flex-direction: row;
  .content-text {
    color: var(--text-black-dark);
    font-size: var(--body-small-font);
  }
  .content-main-text {
    color: var(--text-black-dark);
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
      border: 1px solid var(--line-dark-gray-dark);
      color: var(--text-black-dark);
      margin-right: 3px;
      border-radius: 2px;
      &:hover {
        background-color: var(--background-white-darken-dark);
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
