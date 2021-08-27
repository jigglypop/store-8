import ReviewForm from './ReviewForm';
import { render, screen, fireEvent } from '@testing-library/react';
import { mockReduxWrapper, prepareReduxWrapper } from '@client/utils/testUtils';

const mockCreateFormProps = {
  closeReviewForm: () => {},
  productInfo: {
    id: 1,
    title: '멋진 연필깎이',
    productImgSrc: 'testImgSrc',
  },
};

describe('<ReviewForm />', () => {
  it('ReviewForm 렌더링', () => {
    const [Wrapper, routerStore] = prepareReduxWrapper();
    const { getByText, getByLabelText, container } = render(
      <Wrapper>
        <ReviewForm {...mockCreateFormProps} />
      </Wrapper>
    );
    expect(container).toBeInTheDocument();
    screen.debug();
  });

  it('title, contents가 들어와있을 때 버튼 able', () => {
    const [Wrapper, routerStore] = prepareReduxWrapper();
    const { getByText, getByLabelText, container } = render(
      <Wrapper>
        <ReviewForm {...mockCreateFormProps} />
      </Wrapper>
    );
    expect(container).toBeInTheDocument();
    const button = getByText('등록');
    const titleInput = getByLabelText('title-input');
    const contentsInput = getByLabelText('contents-input');

    expect(button).toBeDisabled();

    fireEvent.change(titleInput, { target: { value: '정말 좋아요!' } });
    fireEvent.change(contentsInput, { target: { value: '굿굿굿!' } });

    expect(button).toBeEnabled();
  });
});
