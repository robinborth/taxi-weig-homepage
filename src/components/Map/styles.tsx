import styled, {css} from "styled-components";
import { motion } from "framer-motion";
import { BsFillHouseDoorFill, BsChatDotsFill} from 'react-icons/bs';
import { device } from "../../styles/theme";

export const ScrollContainer = styled.div`
    height: 300vh;
    position: relative;
`

export const ContentContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    position: sticky;
    top: 10%;

    @media (min-width: 1348px) {
        top: 29%;
    }
`

export const ImageContainer = styled(motion.div)`
    height: 400px;
    width: 600px; 
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
`

export const TextContainer = styled(motion.div)`
    height: 400px;
    width: 300px;

    @media ${device.mobileM} {
        width: 360px;
    }

    @media ${device.mobileL} {
        width: 400px;
    }

    @media ${device.tablet} {
        width: 600px;
    }
`

export const TextBoxWrapper = styled(motion.div)`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    height: 400px;
    position: absolute;

    width: 300px;
    

    @media ${device.mobileM} {
        width: 360px;
    }

    @media ${device.mobileL} {
        width: 400px;
    }

    @media ${device.tablet} {
        width: 600px;
    }
`

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const Text = styled.p`
    margin-bottom: 1.1rem;
    font-weight: 600;
    font-size: 14px;
    color: ${p=>p.theme.colors.secondary};
    line-height: 1.5;

     @media ${device.tablet} {
        font-size: 16px;
    }
`

const icon = css`
    color: ${p => p.theme.colors.primary};
    font-size: 2.5rem;
    margin-bottom: 2rem;
`

export const HouseIcon = styled(BsFillHouseDoorFill)`${icon}`

export const ChatIcon = styled(BsChatDotsFill)`
    ${icon}
`
export const Title = styled.h2`
    size: 18px;
    text-align: center;
    margin-bottom: 1rem;
`

export const Description = styled.p`
    text-align: justify;
    margin-bottom: 1.1rem;
    font-weight: 600;
    font-size: 14px;
    color: ${p=>p.theme.colors.secondary};
    line-height: 1.5;
    

    @media ${device.tablet} {
        font-size: 16px;
    }


    @media (min-width: 1348px) {
       padding: 0 2rem;
    }
`