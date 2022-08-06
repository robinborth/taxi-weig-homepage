import React from 'react';
import {
    Container,
    HouseIcon,
    ChatIcon,
    Text,
    TextBox,
    Header,
    SubHeader
} from './styles';


const Imprint= () => {
    return (
        <Container>
            <Header>Impressum</Header>
            <SubHeader>Angaben gem&auml;&szlig; &sect; 5 TMG</SubHeader>
            <TextBox>
                <HouseIcon />
                <Text>Wolfram Weig</Text>
                <Text>Bahnhofstraße 4</Text>
                <Text>74196 Neuenstadt am Kocher</Text>
            </TextBox>
            <TextBox>
                <ChatIcon />
                <Text>Telefon: 07139 932 444</Text>
                <Text>Fax: 07139 932 445</Text>
                <Text>Taxi-Weig@gmx.de</Text>
            </TextBox>
        </Container>
    );
}

export default Imprint;