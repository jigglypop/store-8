import React from "react";
import { BorderDiv } from './style';

interface IBorderAvatar {
    width? : string | null
    height? : string | null
    src : string | null
    permission : number
    border?: string | null
    shadow?: string | null
}

const BorderProfile = ({ width, height, src, permission, border, shadow } : IBorderAvatar) => {
    return (
        <BorderDiv
          width={width? width : '40px'}
          height={height? height : '40px'}
          permission={permission}
          border={border? border : '2px'}
          shadow={shadow? shadow : '3px'}
        >
          <div className="box">
            {permission === 1 && (
              <img
                src={src ? src : "/image/peopleicon.png"}
                className="admin"
                alt="box"
              />
            )}
            {permission === 2 && (
              <img
                src={src ? src : "/image/peopleicon.png"}
                className="manager"
                alt="box"
              />
            )}
            {permission === 3 && (
              <img
                src={src ? src : "/image/peopleicon.png"}
                className="teacher"
                alt="box"
              />
            )}
            {permission === 4 && (
              <img
                src={src ? src : "/image/peopleicon.png"}
                className="normal"
                alt="box"
              />
            )}
          </div>
        </BorderDiv>
    );
  };
  

export default BorderProfile;