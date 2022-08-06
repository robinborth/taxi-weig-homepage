import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 12rem;
    margin-bottom: 6rem;
    
    @media ${device.laptop} {
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: top;
        margin-bottom: 2rem;
    }
`

export const Title = styled(motion.h2)`
    size: 18px;
    width: 100%;
    margin-bottom: 2rem;
    text-align: center;
    @media ${device.laptop} {
        width: auto;
        margin-bottom: 0;
        margin-top: 1rem;
    }
`

export const Item = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 0 1rem;
    min-height: 100px;
`

export const Header = styled(motion.div)`
    display: flex;
    align-content: space-around;
    align-items: center;
`

export const Icon = styled(motion.div)`
    color: ${p => p.theme.colors.primary};
    font-size: 2rem;
    width: 32px;
    height: 32px;
    margin-right: 0.5rem;
`

export const CounterText = styled(motion.div)`
    font-size: 24px;
    font-weight: 600;
`

export const Description = styled(motion.p)`
    text-align: justify;
    font-weight: 600;
    font-size: 16px;
    color: ${p=>p.theme.colors.secondary};
    line-height: 1.5;
`