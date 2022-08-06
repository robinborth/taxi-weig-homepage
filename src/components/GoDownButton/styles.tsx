import styled from 'styled-components';
import { motion } from "framer-motion";

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const AnimatedIcon = styled(motion.img)`
    background-color: white;
    width: 65px;
    height: 65px;
    padding: 10px;
    border: 2px solid ${ p=> p.theme.colors.primary};
    border-radius: 50%;
    
    &:hover{
        cursor: pointer;
    }
`
