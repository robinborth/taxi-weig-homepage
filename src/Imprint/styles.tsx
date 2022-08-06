import styled, {css} from "styled-components";
import { BsFillHouseDoorFill, BsChatDotsFill} from 'react-icons/bs';

export const Container = styled.div`
    height: 95vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
`

const icon = css`
    color: ${p => p.theme.colors.primary};
    font-size: 2.5rem;
`

export const HouseIcon = styled(BsFillHouseDoorFill)`${icon}`

export const ChatIcon = styled(BsChatDotsFill)`${icon}`


export const Text = styled.p`
    text-align: justify;
    font-weight: 600;
    font-size: 16px;
    color: ${p=>p.theme.colors.secondary};
`

export const TextBox = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 1rem;
`

export const Header = styled.h1`
    text-align: center;
    width: 100%;
    margin-bottom: 2rem;
`

export const SubHeader = styled.h2`
    text-align: center;
    width: 100%;
    margin-bottom: 4rem;
`