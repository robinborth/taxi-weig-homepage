import styled from 'styled-components';
import { theme, device } from '../styles/theme';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
 
  height: 85vh;

  @media ${device.laptop} {
    flex-wrap: nowrap;
    margin: auto 0;
    height: 95vh;
  }
`;

export const Image = styled(motion.img)`
    width: 80vw;
    padding-bottom: 7vh;
   
    @media ${device.tablet} {
      width: 70vw;
    }

    @media ${device.laptop} {
        width: 45vw;
        padding-bottom: 0;
    }
`

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;

    @media ${device.tablet} {
      font-size: 2.3rem;
      gap: 0.8rem;
    }

    @media ${device.laptop} {
        margin-left: 3vw;
        gap: 1rem;
    }
    
`

export const Title = styled(motion.h1)`
    color: ${p=>p.theme.colors.primary};
    font-size: 1.8rem;
    text-align: center;

    @media ${device.tablet} {
      font-size: 2.2rem;
    }

    @media ${device.laptop} {
      font-size: 2.7rem;
    }
`

export const SubTitle = styled(motion.h1)`
    color: ${p=>p.theme.colors.primary};
    font-size: 1.5rem;

    @media ${device.tablet} {
      font-size: 1.8rem;
    }

    @media ${device.laptop} {
      font-size: 2.2rem;
    }
`

export const TitleHighlight = styled.span`
    display: inline-block;
    color: ${p=>p.theme.colors.orange};
    font-size: 1.1em;
`

export const Description = styled(motion.h3)`
    color: ${p=>theme.colors.secondary};
    text-align: center;
    font-size: 1.2rem;

    padding: 1.5vh 0;

    @media ${device.tablet} {
      font-size: 1.3rem;
    }

    @media ${device.laptop} {
      font-size: 1.5rem;
    }
`

export const ButtonWrapper = styled(motion.div)``