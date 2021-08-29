import styled from '@lib/styledComponent';

export const AddressResult = styled.div`
  width: 100%;
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
  }
  .base-check-section {
    img {
      width: 18px;
      height: 18px;
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

  .mobile-container {
    width: 100%;
    padding-right: 16px;
    display: flex;
    flex-direction: column;
  }

  .mobile-content-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: 16px;
      height: 16px;
      margin-right: 4px;
    }
  }

  .mobile-address-content-container {
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    & > p {
      margin-bottom: 8px;
      line-height: 12px;
    }
  }

  .mobile-receiver-content-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    & > p {
      margin-right: 8px;
      line-height: 12px;
    }
  }

  .mobile-address-modify-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

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
