import styled from 'styled-components';

export const SectionItem = styled.div`
  margin: 0 30px;
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 12px;
  min-height: 650px;
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 940px;
  color: var(--text-black-dark);

  .container-column {
    margin-top: 12px;
    display: grid;
    width: 100%;
    background-color: var(--gray6);
    border-top: 1px solid var(--gray4);
    border-bottom: 1px solid var(--gray5);
    color: var(--text-black);

    > * {
      flex-grow: 1;
      text-align: center;
      font-size: var(--body-small-font);
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
    }
  }

  &.no-data {
    * {
      display: hidden;
    }

    .text-no-data {
      display: block;
    }
  }
`;
