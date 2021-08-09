import React from "react";
import { ToggleDiv, ToggleContainerDiv, BallDiv, Label, CheckBoxDiv } from "./style";

const Toggle = () => {
    const onCheck = () => {
        const RootEl = document.getElementById('root')
        RootEl?.classList.toggle('not-darkmode')
        RootEl?.classList.toggle('darkmode')
    }

    return (
        <ToggleDiv>
            <ToggleContainerDiv>
                <CheckBoxDiv 
                    id="checkbox" type="checkbox"  
                    onChange={onCheck} />
                <Label htmlFor="checkbox" >
                    <BallDiv className="ball"/>
                </Label>
            </ToggleContainerDiv>
        </ToggleDiv>
    );
};

export default Toggle;