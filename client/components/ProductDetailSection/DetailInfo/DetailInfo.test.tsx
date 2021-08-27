import DetailInfo from './DetailInfo';
import { render } from '@testing-library/react';
import { prepareReduxWrapper } from '@client/utils/testUtils';

describe('<DetailInfo /> 테스트', () => {
  it('리덕스 연동 렌더링 테스트', () => {
    const [Wrapper, store] = prepareReduxWrapper();
    const { container } = render(
      <Wrapper>
        <DetailInfo />
      </Wrapper>
    );
    expect(container).toBeInTheDocument();
    // const titleInput = getByText('상품상세정보');
  });
});
