import styled from "styled-components";

export const NavigationBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    gap: 30px;
`;


export const NavigatorGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* padding: 12px; */
    font-size: var(--smallFont);

    a {
        /* height: 20px; */
        padding: 10px 12px;
    }
`;
