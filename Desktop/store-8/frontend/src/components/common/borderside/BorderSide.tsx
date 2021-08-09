import React from "react";
import { Link } from "react-router-dom";
import { BorderDiv } from './style';

interface IBorderAvatar {
    width? : string | null
    height? : string | null
    src : string | null
    permission : number
    profileId : string
    border?: string | null
    shadow?: string | null
}

const BorderSide = ({ width, height, src, permission, profileId, border, shadow } : IBorderAvatar) => {
    return (
      <Link to={`/profile/${profileId}`}>
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
      </Link>
    );
  };
  

export default BorderSide;