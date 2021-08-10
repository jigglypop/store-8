import React, { ReactElement, useEffect, useState } from 'react';
import CartContent from './Content';
import * as S from './style';
import {
  ContentData,
  INFO_HEADER_TEXT,
  COUNT_HEADER_TEXT,
  AMOUNT_HEADER_TEXT,
  SHIP_HEADER_TEXT,
} from '@constants/Cart';

interface ContentDataList {
  contents: ContentData[];
}

function CartContentsContainer({ contents }: ContentDataList): ReactElement {
  const [contentsData, setContentsData] = useState(contents);

  const isOff = () => {
    let result: boolean = true;

    contentsData.forEach((content) => {
      if (!content.isChecked) result = false;
    });
    return result;
  };

  const toggleAllSelect = () => {
    const temp: ContentData[] = [...contentsData];
    const toggleDest = !isOff();
    temp.forEach((content) => {
      content.isChecked = toggleDest;
    });
    setContentsData([...temp]);
  };

  const toggleHandler = (index: number) => {
    const temp: ContentData[] = [...contentsData];
    temp[index].isChecked = !temp[index].isChecked;
    setContentsData([...temp]);
  };

  return (
    <S.CartContainer>
      <colgroup>
        <col className="content-check"></col>
        <col className="content-info"></col>
        <col className="content-count"></col>
        <col className="content-amount"></col>
        <col className="content-ship"></col>
      </colgroup>
      <thead className="container-header">
        <tr>
          <th className="content-center-align">
            <input type="checkbox" onChange={() => toggleAllSelect()} checked={isOff()} />
          </th>
          <th className="content-center-align">
            <p className="content-title-text">{INFO_HEADER_TEXT}</p>
          </th>
          <th className="content-center-align">
            <p className="content-title-text">{COUNT_HEADER_TEXT}</p>
          </th>
          <th className="content-center-align">
            <p className="content-title-text">{AMOUNT_HEADER_TEXT}</p>
          </th>
          <th className="content-center-align">
            <p className="content-title-text">{SHIP_HEADER_TEXT}</p>
          </th>
        </tr>
      </thead>
      <tbody>
        {contents.map((content: ContentData, index: number) => (
          <CartContent content={content} key={index} index={index} toggleHandler={toggleHandler} />
        ))}
      </tbody>
    </S.CartContainer>
  );
}

export default CartContentsContainer;
