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
  const [imgFormError, setImgFormError] = useState('');
  const [usernameFormError, setUsernameError] = useState('');
  const [username, setUsername] = useState(check?.username ?? '');
  const [imageUrl, setImageUrl] = useState(check?.imageUrl ?? '');

  const handleInputChange = ({ target }: { target: HTMLInputElement }) => {
    if (validUsernameInput(target.value)) {
      setUsernameError('');
      setUsername(target.value);
    } else {
      setUsernameError('16글자를 초과할 수 없습니다.');
      setUsername(target.value.substr(0, 16));
    }
  };

  const validUsernameInput = (username: string): boolean => {
    return username.length < 17;
  };

  const handleDeleteClick = async (idx: number) => {
    setImageUrl('');
    setIsImgExist(false);
  };

  const isImgFile = (type: string) => {
    return type === 'image/jpeg' || type === 'image/png' || type === 'image/jpg';
  };

  const checkImgSize = (imgBlob: File[]) => {
    for (const file of imgBlob) {
      if (file.size > 10000000) return false;
    }
    return true;
  };

  const checkImgExtension = (imgBlob: File[]) => {
    for (const file of imgBlob) {
      if (!isImgFile(file.type)) return false;
    }
    return true;
  };

  const handleImgSubmit = async (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    const uploadImage = e.target.files;
    if (!uploadImage) return;

    const imgBlob = Object.values(uploadImage);

    if (!checkImgExtension(imgBlob)) {
      setImgFormError('이미지는 jpg, jpeg, png 파일만 업로드 가능합니다.');
      return;
    }

    if (!checkImgSize(imgBlob)) {
      setImgFormError('0MB 이하 이미지만 업로드 가능합니다.');
      return;
    }

    imgBlob.forEach((blob) => formData.append('image', blob));
    const data = await uploadImg(formData);
    if (!data.success) {
      createToast('업로드 실패', true);
      return;
    }
    setImageUrl(data.imgSrc);
  };

  const requestEditProfile = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // API 요청으로 적용
    if (username.length < 2 || username.length > 16) {
      setUsernameError('닉네임은 2글자 이상 16글자 이하로 설정해주세요.');
      return;
    }
    if (check) {
      const body: ICheckBody = { id: check.id, username, imageUrl };
      await setCheck(body, cache.get('token'));
      await props.confirm(e);
    }
  };

  return (
    <Modal closeModal={props.closeForm}>
      <S.EditProfileModal>
        <h2>프로필 수정하기</h2>
        <form>
          <h3>프로필 이미지 수정</h3>
          <div className="container-input-img-src">
            {imageUrl ? (
              <ImgItem key={imageUrl} idx={0} {...{ imgSrc: imageUrl, handleDeleteClick }} />
            ) : (
              <>
                <label className="img-form__add-btn" htmlFor="input-file">
                  <Plus className="img-form__plus-icon" stroke="black" />
                </label>
                <input type="file" id="input-file" onChange={handleImgSubmit} />
              </>
            )}
          </div>
          <div className="text-error text-img-error">{imgFormError}</div>
          <h3>닉네임 수정</h3>
          <div className="container-input-username">
            <input
              type="text"
              id="input-profile-username"
              placeholder="새로운 닉네임을 입력하세요 (2자~16자)"
              value={username}
              onChange={handleInputChange}
            />
          </div>
          <div className="text-error text-username-error">{usernameFormError}</div>
        </form>
        <div className="container-button">
          <button className="button-cancel" onClick={props.closeForm}>
            취소
          </button>
          <button className="button-ok" onClick={requestEditProfile}>
            확인
          </button>
        </div>
      </S.EditProfileModal>
    </Modal>
  );
}
