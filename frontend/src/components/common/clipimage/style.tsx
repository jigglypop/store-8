import styled from 'styled-components'


export interface IClip {
  image? : string
  align? : string
}
export const ClipDiv = styled.div<IClip>`
  background-image: url(/mbti/isfp.jpg);
  /* background-image: ${props => props.image};  */
  background-size: cover;
  position: relative; 
  height: 100%; 
  h1 {
    background-color:black;
    color:white;
    font-size: 10vw; 
    font-weight: 800;
    margin: 0 auto; 
    padding: 10px;
    width: 95%;
    text-align: center; 
    position: absolute; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    mix-blend-mode: multiply;
    opacity:0.8
  }
`
