import React from "react";
import {
    Container,
    AnimatedIcon
} from "./styles";
import ArrowDown from '../../assets/arrowDown.svg';


const GoDownButton = () => {
    return (
        <Container>
            <AnimatedIcon
                animate={{translateY: [0, -35, 0, -20, 0]}} 
                transition={{duration: 2, repeat: Infinity}}
                src={ArrowDown}
                alt="arrowDown"
            />
        </Container>
    );
}

export default GoDownButton;