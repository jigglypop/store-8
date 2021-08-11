import styled from "styled-components";

export const NavigationBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    gap: 30px;

    h3 {
        font-size: var(--largeFont);
        font-weight: 600;
        padding-bottom: 16px;
        border-bottom: 1.5px solid var(--gray5);
    }

`;


export const NavigatorGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* padding: 12px; */
    font-size: var(--smallFont);

    h4 {
        font-size: var(--middleFont);
        font-weight: 600;
        margin-bottom: 12px;
    }

    a {
        /* height: 20px; */
        padding: 10px 12px;
        text-decoration: none;
        color: var(--pastelBlack);
    }

    a:hover {
        font-weight: 600;
        color: var(--realBlack);
        background-color: var(--gray6);
    }
`;
