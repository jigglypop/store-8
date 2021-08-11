import styled from "styled-components";

export const Auth = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    background-image: url('/mbti/intp.jpg');
    background-size: cover;
    box-shadow: 4px 4px 4px black;
    @media screen and (max-width: 1200px) { 
        grid-template-columns: 100px 1fr;
    }
    @media screen and (max-width: 800px) { 
        grid-template-columns: 0 1fr;
    }
`
export const AuthForm = styled.div`
    grid-column: 2/3;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgba(0,0,0,0.8);
    width: 100%;
    min-height: 80vh;
    padding:20px;
    @media screen and (max-width: 1200px) { 
        padding:10px;
    }
    @media screen and (max-width: 800px) { 
        padding:5px;
    }
`

export const Form = styled.form`
    width: 50%;
    h1 {
        font-size:20px;
        margin:20px;
    }
    @media screen and (max-width: 1200px) { 
        width: 70%;
    }
`

export const Error = styled.div`
    h3 {
        color: #FF416C;
        font-size:13px;
        margin:20px;
    }
`

export const LogoText = styled.h2`
    font-size: 40px;
    margin:20px;
    text-shadow: 2px 2px 2px black;
`
export const Button = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
`
export const GotoButton = styled.button`
    grid-column: 1/2;
    transition: 0.5s;
    border: 2px solid #ef6eae;
    border-radius: 5px;
    background-color: transparent;
    h4{
        font-size: 12px;
        padding: 10px;
        color: #ef6eae;
    }
    cursor: pointer;
    &:hover{
        background: #ef6eae;
        h4{
            color: #fff;
        }
    }
`;
export const FormButton = styled.button`
    grid-column: 2/3;
    transition: 0.5s;
    border: 2px solid #ff7f82;
    border-radius: 5px;
    background-color: transparent;
    h4{
        font-size: 12px;
        padding: 10px;
        color:#ff7f82;
    }
    cursor: pointer;
    &:hover{
        background:#ff7f82;
        h4{
            color: #fff;
        }
    }
`