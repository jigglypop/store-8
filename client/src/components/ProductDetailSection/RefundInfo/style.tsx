import styled from 'styled-components';

export const RefundInfo = styled.div`
  background-color: var(--white);
  margin-top: 45px;
  font-size: var(--body-small-font);
  color: var(--text-gray);

  & > section {
    margin-top: 60px;
  }

  .title {
    color: var(--text-pastel-black);
    font-size: var(--body-large-font);
    font-weight: bold;
    margin-left: 12px;
    margin-bottom: 20px;
  }

  .subject {
    margin-bottom: 8px;
  }
  .description {
    margin-left: 8px;
    margin-bottom: 8px;
  }
  .divider {
    height: 16px;
  }
`;
