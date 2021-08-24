import { ReactElement } from 'react';
import * as S from './style';

import Intro from '@components/MyPage/Intro/Intro';
import MyQuestionResultContainer from '../MyQuestionResultcontainer/MyQuestionResultContainer';

interface Props {}

export default function MyQuestionSection({}: Props): ReactElement {
  return (
    <S.MyQuestionSection>
      <Intro />
      <MyQuestionResultContainer />
    </S.MyQuestionSection>
  );
}
