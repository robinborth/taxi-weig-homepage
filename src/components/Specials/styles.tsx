import styled from "styled-components";
import { device } from "../../styles/theme";
import {motion} from 'framer-motion';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 8rem;
    margin-bottom: 4rem;

    @media ${device.laptop} {
        margin: 12rem 0;
    }
`

export const ItemBox = styled(motion.div)`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 5.5rem;

    @media ${device.laptop} {
        max-width: 25vw;
        margin-bottom: 0;
    }
`

export const Icon = styled(motion.img)`
    width: 50%;
    margin-bottom: 1.2rem;
`

export const Header = styled(motion.h2)`
    font-size: 24px;
    margin-bottom: 0.9rem;
`

export const Text = styled(motion.p)`
    text-align: justify;
    font-weight: 600;
    font-size: 16px;
    color: ${p=>p.theme.colors.secondary};
    line-height: 1.5;
    padding: 0 0.5rem;
    @media ${device.tablet} {
        padding: 0;
    }
`

export const ButtonWrapper = styled(motion.div)``