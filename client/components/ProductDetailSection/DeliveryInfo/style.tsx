import styled from 'styled-components';

export const DeliveryInfo = styled.section`
  background-color: var(--white);
  margin-top: 45px;
  font-size: var(--body-small-font);
  color: var(--text-gray);

  .title {
    color: var(--text-pastel-black);
    font-size: var(--body-large-font);
    font-weight: bold;
    margin-left: 12px;
    margin-bottom: 20px;
  }

  .delivery-info__content {
    display: flex;
    margin-bottom: 8px;
  }

  .subtitle {
    margin-right: 5px;
  }

  & > div:last-child {
    margin-top: 32px;
  }
`;
