import {
    ContentContainer,
    ScrollContainer,
    ImageContainer,
    Image,
    TextContainer,
    TextBoxWrapper,
    TextBox,
    Text,
    Title,
    ChatIcon,
    HouseIcon,
    Description
} from './styles';
import MapImage from '../../assets/map.jpg';
import { useTransform } from "framer-motion";
import { useRefScrollProgress } from "./useRefScrollProgress";
import CallButton from '../CallButton';


const Map = () => {
    const {ref, calcInput, progress} = useRefScrollProgress<HTMLDivElement>();
    const scaleImageMaps = useTransform(progress, calcInput(10), [0, 1, ...Array(8).fill(1)]);
    const opacityTextOne = useTransform(progress, calcInput(10), [0, 0, 1, 1, 1, ...Array(5).fill(0)]);
    const opacityTextTwo = useTransform(progress, calcInput(10), [...Array(7).fill(0), 1, 1, 1]);

    return <>
        <ScrollContainer ref={ref}>
            <ContentContainer>
                <ImageContainer style={{scale: scaleImageMaps}}>
                    <Image src={MapImage} alt="Map" />     
                </ImageContainer>
                <TextContainer>
                    <TextBoxWrapper style={{opacity: opacityTextOne}}>
                        <TextBox>
                            <HouseIcon />
                            <Text>Taxi Weig</Text>
                            <Text>Bahnhofstraße 4</Text>
                            <Text>74196 Neuenstadt am Kocher</Text>
                        </TextBox>
                         <TextBox>
                            <ChatIcon />
                            <Text>Telefon: 07139 932 444</Text>
                            <Text>Fax: 07139 932 445</Text>
                            <Text>Taxi-Weig@gmx.de</Text>
                        </TextBox>
                    </TextBoxWrapper>
                    <TextBoxWrapper style={{opacity: opacityTextTwo}}>
                        <TextBox>
                            <Title>Vielen dank.</Title>
                            <Description>Falls Sie noch offene Fragen haben, oder einen Termin vereinbaren möchten, können Sie uns gerne jeder Zeit anrufen. Wir sind für Sie da!</Description>
                            <CallButton />
                        </TextBox>
                    </TextBoxWrapper>
                </TextContainer>
            </ContentContainer>
        </ScrollContainer>
    </>;
}

export default Map;