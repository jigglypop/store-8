import Modal from './modal/Modal';
import Store from './store/Store';
import * as S from './style';

const Intro = () => {
  return (
    <S.Intro>
      <Store />
      <Modal />
    </S.Intro>
  );
};

export default Intro;
