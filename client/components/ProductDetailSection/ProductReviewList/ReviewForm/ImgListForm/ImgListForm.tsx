import { ReactElement, Dispatch, SetStateAction, ChangeEvent } from 'react';
import styled from 'styled-components';

import Plus from '@image/icon/plusIcon.svg';
import ImgItem from './ImgItem';

import { uploadImg } from '@api/upload';

interface Props {
  imgList: string[];
  formError: string;
  setImgList: Dispatch<SetStateAction<string[]>>;
  setFormError: Dispatch<SetStateAction<string>>;
}

export default function ImgListForm({
  imgList,
  setImgList,
  formError,
  setFormError,
}: Props): ReactElement {
  const MAX_IMG = 8;

  const handleImgSubmit = async (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    const uploadImage = e.target.files;
    if (!uploadImage) return;

    const imgBlob = Object.values(uploadImage);

    if (!checkImgExtension(imgBlob)) {
      setFormError('이미지는 jpg, jpeg, png 파일만 업로드 가능합니다.');
      return;
    }

    if (!checkImgSize(imgBlob)) {
      setFormError('10MB 이하 이미지만 업로드 가능합니다.');
      return;
    }

    if (imgBlob.length > MAX_IMG || imgList.length + imgBlob.length > MAX_IMG) {
      setFormError('이미지는 최대 8장까지 업로드 가능합니다.');
      return;
    }

    imgBlob.forEach((blob) => formData.append('image', blob));

    if (formError) setFormError('');

    const data = await uploadImg(formData);

    if (!data.success) {
      setFormError(data.errorMessage);
      return;
    }

    setImgList((imgs) => [...imgs, ...data.imgSrc]);
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

  const isImgFile = (type: string) => {
    return type === 'image/jpeg' || type === 'image/png' || type === 'image/jpg';
  };

  const handleDeleteClick = async (idx: number) => {
    setImgList((imgList) => imgList.filter((_, i) => i !== idx));
  };

  const uploadedImgList = imgList.map((imgSrc, idx) => (
    <ImgItem key={imgSrc} {...{ imgSrc, idx, handleDeleteClick }} />
  ));

  return (
    <>
      <StyledImgListFrom>
        <label className="img-form__add-btn" htmlFor="input-file">
          <Plus className="img-form__plus-icon" />
          <div className="img-form__count">
            {imgList.length}/{MAX_IMG}
          </div>
        </label>
        <input type="file" id="input-file" onChange={handleImgSubmit} multiple />
        {uploadedImgList}
      </StyledImgListFrom>
    </>
  );
}

const StyledImgListFrom = styled.div`
  display: flex;
  align-items: flex-end;
  overflow-x: scroll;
  width: 100%;
  height: 90px;

  /* color: var(--text-black-dark); */
  color: var(--text-dark-gray-dark);

  &::-webkit-scrollbar {
    display: none;
  }
  input {
    display: none;
  }

  .img-form__plus-icon {
    stroke: var(--line-gray);
    margin-top: 4px;
    margin-bottom: 8px;
  }

  .img-form__add-btn {
    cursor: pointer;
    min-width: 76px;
    height: 76px;
    /* background-color: var(--body-background-dark); */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    border: 1px solid var(--line-gray);
    border-radius: 8px;
    .form-img-count {
      font-size: 12px;
      color: var(--gray1);
      margin-top: 7px;
    }
  }
`;
