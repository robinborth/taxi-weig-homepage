import 'styled-components';
import {DefaultTheme} from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            orange: string;
        },
        device: {
            mobileS: string;
            mobileM: string;
            mobileL: string;
            tablet: string;
            laptop: string;
            laptopL: string;
            desktop: string;
            desktopL: string;
        }
    }
}

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};


export const theme: DefaultTheme = {
    device,
    colors: {
            primary: "#2d2d2d",
            secondary: "#5b5b5b",
            orange: "#ffaa2b",
    },
}

/*
<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
*/

