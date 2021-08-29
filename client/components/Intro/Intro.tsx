import TipButton from '../Tip/TipButton';
import Modal from './modal/Modal';
import Three from './Store';
import * as S from './style';

const Intro = () => {
  return (
    <S.Intro>
      <TipButton />
      <Modal />
      <Three />
    </S.Intro>
  );
};

export default Intro;
