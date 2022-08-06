import React from 'react';
import Taxi from '../assets/taxi.svg';
import CountingStats from '../components/CountingStats';
import ImageGallery from '../components/ImageGallery';
import { InView } from 'react-intersection-observer';
import Map from '../components/Map'
import { imagesFirst, imagesSecond } from '../components/ImageGallery/image-data';
import {
    Container,
    Image,
    Title,
    TitleWrapper,
    TitleHighlight,
    SubTitle,
    Description,
    ButtonWrapper,
} from './styles';
import Specials from '../components/Specials';
import CallButton from '../components/CallButton';

const image = {
    animate: {
        opacity: 1,
        transition: {duration: 1.5},
    },
    initial: {opacity: 0},
    hover: {scale: 1.05}
}

const title = {
    animate: {
        opacity: 1,
        x: 0,
        transition: {duration: 1.0},
    },
    initial: {opacity: 0, x: "-40px"}
}


const subtitle = {
    animate: {
        opacity: 1,
        x: 0,
        transition: {duration: 1.0},
    },
    initial: {opacity: 0, x: "40px"}
}

const description = {
    animate: {
        opacity: 1,
        transition: {duration: 2},
    },
    initial: {opacity: 0}
}

const button = {
    animate: {
        opacity: 1,
        y: 0,
        transition: {duration: 1.0},
    },
    initial: {opacity: 0, y: "20px"}
}

const Home = () => {
    return <>
        <InView threshold={0.2}>
            {({ref, inView}) => (
                <Container ref={ref}>
                    <Image src={Taxi} alt="Taxi Logo" initial="initial" animate={inView ? "animate" : "inital"} whileHover="hover" variants={image}/>
                    <TitleWrapper>
                        <Title initial="initial" animate={inView ? "animate" : "inital"} variants={title}>Willkommen bei <TitleHighlight>Taxi Weig</TitleHighlight></Title>
                        <SubTitle initial="initial" animate={inView ? "animate" : "inital"} variants={subtitle}>Allzeit bereit!</SubTitle>
                        <Description initial="initial" animate={inView ? "animate" : "inital"} variants={description}>
                            Wir sind ein seit 2001 gegründetes Familienunternehmen mit Sitz in Kochertürn. Seitdem befördern wir zahlreiche Kunden sowohl schnell als auch sicher ans Ziel.
                        </Description>
                        <ButtonWrapper initial="initial" animate={inView ? "animate" : "inital"} variants={button}><CallButton /></ButtonWrapper>              
                    </TitleWrapper>
                </Container>
            )}
        </InView>
        <ImageGallery images={imagesFirst}/>
        <Specials />
        <ImageGallery images={imagesSecond} startImgLeft={false}/>

        
        <CountingStats />
        <Map />
    </>;
}

export default Home;