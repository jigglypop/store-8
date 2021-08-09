import styled from "styled-components";

interface IAdmin{
  width: string;
  height: string;
  border: string;
  shadow: string;
  permission: number;
}

export const BorderDiv = styled.div<IAdmin>`
  cursor: pointer;
  .box {
    display: inline-block;
    justify-content: center;
    align-items: center;
  }

  img {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border: ${(props) => props.border} solid transparent;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: ${(props) => props.shadow} ${(props) => props.shadow}
      ${(props) => props.shadow} black;
  }

  .admin {
    background: linear-gradient(45deg, #000000, #000000) padding-box,
      linear-gradient(45deg, #ff6a00, #ee0979) border-box;
  }
  
  .manager {
    background: linear-gradient(45deg, #000000, #000000) padding-box,
      linear-gradient(45deg, #8e2de2, #4a00e0) border-box;
  }
  .teacher {
    background: linear-gradient(45deg, #000000, #000000) padding-box,
      linear-gradient(45deg, #00b09b, #96c93d) border-box;
  }
  .normal {
    background: linear-gradient(45deg, #000000, #000000) padding-box,
      linear-gradient(45deg, #000000, #434343) border-box;
  }
`;