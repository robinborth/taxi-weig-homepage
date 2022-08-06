import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "../styles/theme";

export const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  padding: 2.5rem 0;
`;

export const BrandWrapper = styled.div``

export const Brand = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-wrap: nowrap;
  letter-spacing: -1px;
  align-items: center;
`

export const BrandTitle = styled.h1`
    color: ${p=>p.theme.colors.primary};

    font-size: 24px;
    @media ${device.tablet} {
       font-size: 32px;
    }
`

export const BrandTitleColor = styled.h1`
    color: ${p=>p.theme.colors.orange};
    font-size: 24px;
    @media ${device.tablet} {
       font-size: 32px;
    }
`


export const Taxi = styled.img`
  width: 28px;
  margin-right: 2px;
  object-fit: cover;
  
  @media ${device.tablet} {
      width: 40px;
      margin-right: 4px;
  }
`