import React from "react";
import { ClipDiv } from "./style";

interface IClipImage {
    text: string
    imageurl : string
}

const ClipImage = ({ text, imageurl }:IClipImage) => {
    return (
        <ClipDiv
            image={`url(/mbti/${imageurl}.jpg)`}>
            <h1>{text}</h1>
        </ClipDiv>
    );
};

export default ClipImage;