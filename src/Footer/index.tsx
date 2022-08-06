import React from 'react';
import {
    Links,
    Credentials,
    FooterLink,
    Copyright,
    Container,
    Wave,
    Programmer,
    LinkWrapper
} from './styles';
import WaveSVG from '../assets/wave.svg';
import ProgrammerSVG from '../assets/programming.svg';
import { InView } from 'react-intersection-observer';

const scale = {
     hover: {scale: 1.05}
}

const image = {
    animate: {
        opacity: 1,
        transition: {duration: 1.0},
    },
    initial: {opacity: 0},
}

const copyright = {
    animate: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.5},
    },
    initial: {opacity: 0, y: "10px"}
}

const linkContainer = {
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            staggerChildren: 0.4,
            duration: 0.3
        }
    },
    initial: {opacity: 0, x: "10px"},
}

const link = {
    animate: {
        opacity: 1,
        x: 0,
        transition: {duration: 0.7},
    },
    initial: {opacity: 0, x: "10px"},
    hover: {scale: 1.05}
}



const Footer = () => (
    <InView threshold={0.2}>
        {({ref, inView})=> (
            <>
                <Wave src={WaveSVG} alt="wave"/>
                <Container ref={ref}>
                    <Credentials whileHover="hover" variants={scale}>
                        <Programmer src={ProgrammerSVG} alt="programmer" initial="initial" animate={inView ? "animate" : "inital"} variants={image}/>
                        <Copyright initial="initial" animate={inView ? "animate" : "inital"} variants={copyright}>© Robin Borth</Copyright>
                    </Credentials>
                    <Links initial="initial" animate={inView ? "animate" : "inital"} variants={linkContainer}>
                        <LinkWrapper whileHover="hover" variants={link}>
                            <FooterLink to="/" exact>Home</FooterLink>
                        </LinkWrapper>
                        <LinkWrapper whileHover="hover" variants={link}>
                            <FooterLink to="/impressum" exact>Impressum</FooterLink>
                        </LinkWrapper>
                        <LinkWrapper whileHover="hover" variants={link}>
                            <FooterLink to="/datenschutz" exact>Datenschutz</FooterLink>
                        </LinkWrapper>
                    </Links>
                </Container>
            </>
        )}
    </ InView>
);

export default Footer;