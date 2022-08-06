import React from 'react'
import { 
  Container,
  Taxi,
  Brand,
  BrandTitle,
  BrandTitleColor,
  BrandWrapper,
} from './styles';
import TaxiIcon from '../assets/taxiIcon.png';
import CallButton from '../components/CallButton';


const Navbar = () => (
    <Container>
      <BrandWrapper>
        <Brand to="/" exact activeClassName="active">
          <Taxi src={TaxiIcon} alt="Taxi Icon"/>
          <BrandTitle>Taxi</BrandTitle>
          <BrandTitleColor>Weig</BrandTitleColor>
        </Brand>
      </BrandWrapper>
      <CallButton />
    </Container>
);

export default Navbar;
