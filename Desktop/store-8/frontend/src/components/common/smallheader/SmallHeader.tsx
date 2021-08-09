import React from "react";
import { SmallImage, SmallWrapper, SmallText } from "./style";

interface ISmallHeader {
  ImageUrl : string
  content : string
}

const SmallHeader = ({ ImageUrl, content } : ISmallHeader) => {
  return (
    <div>
      <SmallWrapper>
        <SmallImage>
          <img src={ImageUrl}/>
        </SmallImage>
        <SmallText>
          <h1>{content}</h1>
        </SmallText>
      </SmallWrapper>
    </div>
  );
};

export default SmallHeader;
