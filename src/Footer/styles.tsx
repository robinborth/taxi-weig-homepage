import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../styles/theme';


export const Wave = styled.img`
    margin-bottom: -5px;
`

export const Container = styled.div`
    background-color: ${p=>p.theme.colors.orange};
    padding-bottom: 2rem;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-around;
`

export const Links = styled(motion.div)`
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   gap: 2rem;
`;

export const LinkWrapper = styled(motion.div)``

export const FooterLink = styled(NavLink)`
    text-decoration: none;
    color: #f5f5f5;

    font-size: 16px;
    font-weight: 600;
`;

export const Credentials = styled(motion.a)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const Copyright = styled(motion.a)`
    color: #f5f5f5;
    text-decoration: none;
    cursor: pointer;
    padding-bottom: 1rem;

    font-size: 16px;
    font-weight: 600;

    padding-top: 1.5rem;
    padding-bottom: 1.5rem;

     @media ${device.tablet} {
         padding-top: 2.5rem;
    }
`
export const Programmer = styled(motion.img)`
    width: 40vw;

    @media ${device.tablet} {
        width: 30vw;
    }
`