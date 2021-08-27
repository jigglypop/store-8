import styled from '@lib/styledComponent';

// 메인
export const UsagePage = styled.div`
  position: relative;
  width: var(--app-width);
  margin: 0px calc(50vw - var(--app-width) / 2) 30px calc(50vw - var(--app-width) / 2);
  min-height: 555px;

  display: flex;
  flex-direction: column;

  .text-feilds {
    display: flex;
    flex-direction: flex;
    align-items: center;
    & > a {
      margin: -2px 6px 0px 6px;
    }
  }
  .usage-header {
    font-size: var(--body-title-font);
    color: var(--text-black-dark);
    margin: 12px 0px;
  }
  .usage-subheader {
    font-size: var(--body-huge-font);
    color: var(--text-black-dark);
    margin: 8px 0px;
  }
  .plain-textfield {
    margin-left: 12px;
  }
  .usage-plain {
    font-size: var(--body-middle-font);
    color: var(--text-black-dark);
    margin: 6px 0px 6px 0px;
    line-height: 20px;
  }
`;
