import styled from 'styled-components';
import { device } from './theme';

export const Container = styled.div`
  margin: 0 auto;
  width: 95%;

  @media ${device.laptop} {
       width: 90%;
  } 

  @media ${device.laptopL} {
       width: 85%;
  } 
`