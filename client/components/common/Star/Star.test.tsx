import Star from '@components/common/Star/Star';
import { render } from '@testing-library/react';

const starProps = {
  isSelect: true,
  handleClick: () => console.log('clicked'),
};

describe('Star 테스트', () => {
  it('Star 렌더링 테스트', () => {
    const { container } = render(<Star {...starProps} />);
    expect(container).toBeInTheDocument();
  });
});
