import styled from "styled-components";
import { ImgFormat } from "./image-data";
import { device } from "../../styles/theme";
import { motion } from "framer-motion";
import {NavLink} from "react-router-dom";

export const Container = styled.div``

interface ISection {
    index: number,
    startImgLeff: boolean,
}

export const Section = styled(motion.div)<ISection>`
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 4rem;

    @media ${device.laptop} {
        flex-direction: ${p => {
            const increment = p.startImgLeff ? 0 : 1;
            const index = p.index + increment;
            return index % 2 === 0 ? 'row' : 'row-reverse'
        }};
    }
`

interface IImage {
    format?: ImgFormat
}


export const ImageContainer = styled(motion.div)<IImage>`
    height: ${p=>p.format === ImgFormat.Small ? '50vh' : '85vh'};
`

export const Image = styled(motion.img)`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 2rem;
`

export const Content = styled.div<ISection>`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media ${device.laptop} {
        ${p => {
            const increment = p.startImgLeff ? 0 : 1;
            const index = p.index + increment;
            return `${index % 2 === 1 ? 'padding-right:' : 'padding-left:'} 2rem`
        }};
       
    }
`

export const Header = styled(motion.h1)`
    text-align: center;
    margin-bottom: 1.1rem;
`
export const Text = styled(motion.p)`
    text-align: justify;
    margin-bottom: 1.1rem;
    font-weight: 600;
    font-size: 16px;
    color: ${p=>p.theme.colors.secondary};
    line-height: 1.5;

    @media ${device.laptop} {
       margin-bottom: 0rem;
    }
`

export const LinkContainer = styled(motion.span)`
`

export const Link = styled(NavLink)`
    text-decoration: none;
    color: ${p=>p.theme.colors.orange};
    font-size: 16px;
    font-weight: 600;
    margin-left: 1rem;
`