import styled from "styled-components";
import { device } from "../styles/theme";

export const Container = styled.div`
    margin-top: 2rem;
    @media ${device.tablet} {
        margin-top: 4rem;
    }
`

export const Header = styled.h2`
    margin-bottom: 0.3rem;
`

export const SubHeader = styled.h2`
    margin-bottom: 0.3rem;
`

export const SubSubHeader = styled.h3`
    margin-bottom: 0.3rem;
    margin-top: 0.3rem;
`

export const Text = styled.p`
    text-align: justify;
    font-weight: 600;
    font-size: 16px;
    color: ${p=>p.theme.colors.secondary};
    
`
export const Link = styled.a`
    color: ${p=>p.theme.colors.orange};
    font-weight: 600;
    font-size: 16px;
`

export const List  = styled.ul`
    
`

export const ListItem = styled.li`
    margin-left: 2rem;
    text-align: justify;
    font-weight: 600;
    font-size: 16px;
    color: ${p=>p.theme.colors.secondary};
`

export const Section = styled.div`
    margin-bottom: 2rem;
`