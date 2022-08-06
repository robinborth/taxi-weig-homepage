import styled from "styled-components";
import {motion} from 'framer-motion';
import {CgPhone} from 'react-icons/cg';
import { device } from "../../styles/theme";

export const Button = styled(motion.a)`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-decoration: none;

    background-color: transparent;
    border: 0.15rem solid ${p=>p.theme.colors.secondary};
    border-radius: 1rem;

    max-width: 14rem;
    min-width: 10rem;
    min-height: 2.5rem;

    &:hover{
        cursor: pointer;
    }

    @media ${device.tablet} {
        min-height: 3rem;
        min-width: 14rem;
        padding-right: 1rem;
    }
`
export const Text = styled.p`
    color: ${p=>p.theme.colors.secondary};
    font-weight: 600;
    font-size: 1rem;
    min-width: 8.5rem;
    margin-left: -0.5rem;
    text-align: center;

    @media ${device.tablet} {
        font-size: 1.2rem;
        margin-left: 0.5rem;
    }
`

export const ColoredText = styled.span`
    color: ${p=>p.theme.colors.orange};
`

export const IconPhone = styled(CgPhone)`
    color: ${p=>p.theme.colors.secondary};
    min-width: 2.2rem;
`
