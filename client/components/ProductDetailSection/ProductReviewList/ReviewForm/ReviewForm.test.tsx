import ReviewForm from './ReviewForm';
import { render } from '@testing-library/react';
import { mockReduxWrapper, prepareReduxWrapper } from '@client/utils/testUtils';

const mockCreateFormProps = {
  closeReviewForm: () => {},
  productInfo: {
    id: 1,
    title: '멋진 연필깎이',
    productImgSrc: 'testImgSrc',
  },
};

const initRouterState = {
  pathname: '/product/305',
  params: '',
  query: '',
  notfound: '',
};
describe('<ReviewForm />', () => {
  it('title, contents가 들어와있을 때 버튼 able', () => {
    const [Wrapper, routerStore] = prepareReduxWrapper();
    const { getByText, getByLabelText } = render(
      <Wrapper>
        <ReviewForm {...mockCreateFormProps} />
      </Wrapper>
    );
    const button = getByText('등록');
    const titleInput = getByLabelText('title-input');
    const contentsInput = getByLabelText('contents-input');

    expect(button).toBeDisabled();
  });
});
