import React from "react";
import CallButton from "../CallButton";
import { specials } from "./specials-data";
import { InView } from 'react-intersection-observer';
import { 
    Container,
    ItemBox,
    Header,
    Icon,
    Text,
    ButtonWrapper,
} from "./styles";

const icon = {
    animate: {
        opacity: 1,
        transition: {duration: 1.3},
    },
    initial: {opacity: 0},
    hover: {scale: 1.05},
}

const header = {
    animate: {
        opacity: 1,
        x: 0,
        transition: {duration: 0.9},
    },
    initial: {opacity: 0, x: "10px"}
}

const text = {
    animate: {
        opacity: 1,
        x: 0,
        transition: {duration: 0.9},
    },
    initial: {opacity: 0, x: "-10px"}
}


const Specials = () => {
    return (
        <Container>
            {specials.map((special, index) =>
                <InView threshold={0.5}>
                    {({ref, inView})=> (
                        <ItemBox key={index} ref={ref} whileHover="hover" variants={icon}>
                                <Icon src={special.url} alt={special.header} initial="initial" animate={inView ? "animate" : "inital"} variants={icon}/>
                                {special.call ? 
                                    <ButtonWrapper initial="initial" animate={inView ? "animate" : "inital"} variants={icon}>
                                        <CallButton />
                                    </ButtonWrapper> : 
                                    <> 
                                        <Header initial="initial" animate={inView ? "animate" : "inital"} variants={header}>{special.header}</Header>
                                        <Text initial="initial" animate={inView ? "animate" : "inital"} variants={text}>{special.text}</Text>
                                    </>}
                        </ItemBox>
                    )}
                </InView>
            )}
        </Container>
    );
}

export default Specials;