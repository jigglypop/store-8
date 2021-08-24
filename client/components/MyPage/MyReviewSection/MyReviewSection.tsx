import { ReactElement } from 'react';
import * as S from './style';

import Intro from '@components/MyPage/Intro/Intro';
import MyReviewResultContainer from '../MyReviewResultcontainer/MyReviewResultContainer';

interface Props {}

export default function MyReviewSection({}: Props): ReactElement {
  return (
    <S.MyReviewSection>
      <Intro />
      <MyReviewResultContainer />
    </S.MyReviewSection>
  );
}
