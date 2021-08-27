import { ChangeEvent, ReactElement, useState } from 'react';
import * as S from './style';
import Modal from '@client/components/common/Modal/Modal';
import ImgItem from '@client/components/ProductDetailSection/ProductReviewList/ReviewForm/ImgListForm/ImgItem';
import { useCheck } from '@client/hooks/auth/check';
import { useDispatch } from 'react-redux';
import cache from '@client/utils/cache';
import { updateCheck } from '@client/store/auth/check';
import { ICheckRes, ICheckBody } from '@middle/type/auth/check';
import PenSvg from '@image/svg/pen.svg';
import Plus from '@image/icon/plusIcon.svg';
import { uploadImg } from '@client/api/upload';
import { createToast } from '@client/utils/createToast';

interface EditProfileModalProps {
  closeForm: () => void;
  confirm: React.MouseEventHandler<HTMLButtonElement>;
}

export function EditProfileModal(props: EditProfileModalProps): ReactElement {
  const [isImgExist, setIsImgExist] = useState(true);

  const { check, setCheck } = useCheck();
  const dispatch = useDispatch();
  const [username, setUsername] = useState(check?.username ?? '');
  const [imageUrl, setImageUrl] = useState(check?.imageUrl ?? '');

  const handleInputChange = ({ target }: { target: HTMLInputElement }) => {
    setUsername(target.value);
  };

  const handleDeleteClick = async (idx: number) => {
    setImageUrl('');
    setIsImgExist(false);
  };

  const handleImgSubmit = async (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    const uploadImage = e.target.files;
    if (!uploadImage) return;

    const imgBlob = Object.values(uploadImage);

    imgBlob.forEach((blob) => formData.append('image', blob));

    const data = await uploadImg(formData);

    if (!data.success) {
      createToast('업로드 실패', true);
      return;
    }

    setImageUrl(data.imgSrc);
  };

  const confirmEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // API 요청으로 적용
    if (check) {
      const body: ICheckBody = { id: check.id, username, imageUrl };
      await setCheck(body, cache.get('token'));
      await props.confirm(e);
    }
  };

  return (
    <Modal closeModal={props.closeForm}>
      <S.EditProfileModal>
        <div>프로필을 수정할 수 있는 모달입니다. </div>
        <div>현재 구현중입니다 ㅠㅠ </div>
        <div>테투리를 누르시면 닫을 수 있습니다.</div>
        {/* <form>
          <div className="container-input-img-src">
            {check?.imageUrl ? (
              <ImgItem
                key={check?.imageUrl}
                idx={0}
                {...{ imgSrc: check?.imageUrl, handleDeleteClick }}
              />
            ) : (
              <form>
                <label className="img-form__add-btn" htmlFor="input-file">
                  <Plus className="img-form__plus-icon" />
                </label>
                <input type="file" id="input-file" onChange={handleImgSubmit} />
              </form>
            )}
          </div>
          <div className="container-input-username">
            <input
              type="text"
              id="input-profile-username"
              value={username}
              onChange={handleInputChange}
            />
          </div>
        </form> */}
      </S.EditProfileModal>
    </Modal>
  );
}
