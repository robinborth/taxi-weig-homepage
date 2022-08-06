import {ImageData} from './image-data';
import {
    Container,
    Section,
    ImageContainer,
    Image,
    Content,
    Header,
    Text,
    Link,
    LinkContainer
} from './style';
import {useMediaQuery} from 'react-responsive';
import {device} from '../../styles/theme';
import {InView} from 'react-intersection-observer';
import {FooterLink} from "../../Footer/styles";
import React from "react";

const imageContainerLaptop = {
    animate: {
        minWidth: "40vw",
        transition: {duration: 0.7},
    },
    initial: {
        minWidth: "60vw",
    }
}

const imageLaptop = {
    animate: {
        borderRadius: "2.0rem",
        transition: {duration: 0.7},
    },
    initial: {borderRadius: "0.8rem"}
}

const textLaptop = {
    animate: {
        opacity: 1,
        maxHeight: "100%",
        transition: {duration: 1.5},
    },
    initial: {opacity: 0, maxHeight: "0%"}
}

const imageMobile = {
    animate: {
        opacity: 1,
        transition: {duration: 1.3},
    },
    initial: {opacity: 0}
}

const textMobile = {
    animate: {
        opacity: 1,
        x: 0,
        transition: {duration: 0.9},
    },
    initial: {opacity: 0, x: "-10px"}
}

const headlineMobile = {
    animate: {
        opacity: 1,
        x: 0,
        transition: {duration: 0.9},
    },
    initial: {opacity: 0, x: "10px"}
}

type ImageGalleryProps = {
    startImgLeft?: boolean,
    images: Array<ImageData>
}

const ImageGallery = ({startImgLeft = true, images}: ImageGalleryProps) => {
    const isDesktopOrLaptop = useMediaQuery({query: device.laptop});

    return (
        <Container>
            {images.map((image, index) => <>
                    {isDesktopOrLaptop ? <>
                        <Section key={index} index={index} startImgLeff={startImgLeft} initial="initial"
                                 whileHover="animate">
                            <ImageContainer format={image.format} variants={imageContainerLaptop}>
                                <Image src={image.url} alt={image.header} variants={imageLaptop}/>
                            </ImageContainer>
                            <Content index={index} startImgLeff={startImgLeft}>
                                <Header>{image.header}</Header>
                                <Text variants={textMobile}>{image.text} {image.isTeamSection &&
                                <LinkContainer variants={textLaptop}>
                                    <Link to="/imagegallery" exact>Erfahre mehr!</Link>
                                </LinkContainer>}</Text>
                            </Content>
                        </Section>
                    </> : <>
                        <InView threshold={0.15}>
                            {({ref, inView}) => (
                                <Section key={index} index={index} startImgLeff={startImgLeft} initial="initial"
                                         animate={inView ? "animate" : "inital"} ref={ref}>
                                    <ImageContainer format={image.format} variants={imageMobile}>
                                        <Image src={image.url} alt={image.header}/>
                                    </ImageContainer>
                                    <Content index={index} startImgLeff={startImgLeft}>
                                        <Header variants={headlineMobile}>{image.header}</Header>
                                        <Text variants={textMobile}>{image.text} {image.isTeamSection &&
                                        <LinkContainer variants={textLaptop}>
                                            <Link to="/imagegallery" exact>Erfahre mehr!</Link>
                                        </LinkContainer>}</Text>
                                    </Content>
                                </Section>
                            )}
                        </InView>
                    </>}
                </>
            )}
        </Container>
    );
}

export default ImageGallery;