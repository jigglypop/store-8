import styled from '@lib/styledComponent';

export const AddressModal = styled.div`
  border-radius: 20px;
  min-height: 350px;
  background-color: var(--background-select-section-dark);

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (min-width: 0px) {
    width: 300px;
    padding: 20px;
  }
  @media only screen and (min-width: 375px) {
    width: 450px;
    padding: 20px;
  }
  @media only screen and (min-width: 768px) {
    width: 650px;
    padding: 40px;
  }
  @media only screen and (min-width: 1300px) {
    width: 650px;
    padding: 40px;
  }

  .address-modal-title {
    color: var(--text-black-dark);

    @media only screen and (min-width: 0px) {
      font-size: var(--body-large-font);
      margin-bottom: 18px;
    }
    @media only screen and (min-width: 375px) {
      font-size: var(--body-large-font);
      margin-bottom: 18px;
    }
    @media only screen and (min-width: 768px) {
      font-size: var(--body-huge-font);
      margin-bottom: 28px;
    }
    @media only screen and (min-width: 1300px) {
      font-size: var(--body-huge-font);
      margin-bottom: 28px;
    }
  }

  .address-container {
    max-height: 240px;
    overflow: auto;
  }
  .address-div {
    margin: 5px 0px;
  }

  .button-space {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > button {
      @media only screen and (min-width: 0px) {
        width: 80px;
        height: 24px;
        border-radius: 3px;
      }
      @media only screen and (min-width: 375px) {
        width: 80px;
        height: 24px;
        border-radius: 3px;
      }
      @media only screen and (min-width: 768px) {
        width: 100px;
        height: 36px;
        border-radius: 4px;
      }
      @media only screen and (min-width: 1300px) {
        width: 100px;
        height: 36px;
        border-radius: 4px;
      }
    }

    .cancle-btn {
      color: var(--text-black-dark);
      border: 1px solid var(--line-black-dark);
      &:hover {
        background-color: var(--background-section-dark);
      }
    }

    .non-submit-btn {
      background-color: var(--border-dark-gray);
      cursor: default;
      color: white;
      &:hover {
        background-color: var(--border-dark-gray);
      }
    }

    .submit-btn {
      background-color: var(--background-mint);
      color: var(--text-white);
      &:hover {
        background-color: var(--background-dark-mint);
      }
    }
  }
`;

export const Address = styled.div`
  height: 60px;
  width: 100%;
  background-color: var(--background-section-dark);
  display: flex;
  flex-direction: row;
  position: relative;

  .address-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 12px;
    padding-right: 48px;

    .address-title {
      font-weight: 700;
      color: var(--text-pastel-black-dark);

      @media only screen and (min-width: 0px) {
        font-size: var(--body-small-font);
      }
      @media only screen and (min-width: 375px) {
        font-size: var(--body-small-font);
      }
      @media only screen and (min-width: 768px) {
        font-size: var(--body-middle-font);
      }
      @media only screen and (min-width: 1300px) {
        font-size: var(--body-middle-font);
      }
    }
    .address-dDay {
      margin-top: 5px;
      font-size: var(--body-small-font);
      color: var(--text-pastel-black-dark);
    }
  }
  .address-checked {
    position: absolute;
    width: 16px;
    object-fit: contain;
    top: calc(50% - 8px);
    right: 21px;
  }
`;
