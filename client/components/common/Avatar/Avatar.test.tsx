import Avatar from './Avatar';
import { render } from '@testing-library/react';

describe('아바타 테스트', () => {
  it('아바타 렌더링 테스트', () => {
    const { container } = render(<Avatar />);
    expect(container).toBeInTheDocument();
  });
});
