import { PaletteColorOptions, createTheme } from '@mui/material/styles';
import { CSSProperties } from 'react';
import { Roboto, Roboto_Slab } from 'next/font/google';

const robotoFont = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

const robotoSlabFont = Roboto_Slab({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
});

declare module '@mui/material/styles' {
  interface PaletteOptions {
    white?: PaletteColorOptions;
    black?: PaletteColorOptions;
  }

  interface PaletteColor {
    100: string;
    200: string;
    400: string;
    800: string;
  }

  interface SimplePaletteColorOptions {
    100?: string;
    200?: string;
    400?: string;
    800?: string;
  }

  interface TypographyVariants {
    button: CSSProperties;
    subtitle: CSSProperties;
    captionLarge: CSSProperties;
    captionLargeSemiBold: CSSProperties;
    body: CSSProperties;
    bodySmall: CSSProperties;
    bodySmallBold: CSSProperties;
    bodyLight: CSSProperties;
    bodyLargeBold: CSSProperties;
    bodyBold: CSSProperties;
    bodyLarge: CSSProperties;
    bodyUltraLarge: CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    button?: CSSProperties;
    subtitle?: CSSProperties;
    captionLarge?: CSSProperties;
    captionLargeSemiBold?: CSSProperties;
    body?: CSSProperties;
    bodySmall?: CSSProperties;
    bodySmallBold?: CSSProperties;
    bodyLight?: CSSProperties;
    bodyLargeBold?: CSSProperties;
    bodyBold?: CSSProperties;
    bodyLarge?: CSSProperties;
    bodyUltraLarge?: CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    button: true;
    subtitle: true;
    captionLarge: true;
    captionLargeSemiBold: true;
    body: true;
    bodySmall: true;
    bodySmallBold: true;
    bodyLight: true;
    bodyLargeBold: true;
    bodyBold: true;
    bodyLarge: true;
    bodyUltraLarge: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
    black: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    white: true;
    black: true;
  }
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      100: 'rgba(213, 42, 142, 0.10)',
      200: 'rgba(213, 42, 142, 0.20)',
      700: 'rgba(213, 42, 142, 0.70)',
      800: '#B02375',
      main: '#D52A8E'
    },
    error: {
      100: 'rgba(255, 37, 37, 0.15)',
      300: 'rgba(255, 37, 37, 0.30)',
      400: '#FF5959',
      main: '#FF2525'
    },
    success: {
      main: '#079C46',
      100: 'rgba(7, 156, 70, 0.15)',
      300: 'rgba(7, 156, 70, 0.30)'
    },
    secondary: {
      main: '#00000033',
      dark: '#313131',
      light: '#e7e7e7',
      800: '#747474',
      200: '#DCDCDC',
      500: 'rgba(0, 0, 0, 0.5)'
    },
    white: {
      main: '#fff'
    },
    black: {
      main: '#000'
    },
    background: {
      paper: '#fff',
      default: '#fff'
    },
    warning: {
      main: '#A98F00',
      light: '#ECC700',
      300: 'rgba(254, 168, 50, 0.3)'
    },
    info: {
      main: '#57ADDD',
      300: 'rgba(87, 173, 221, 0.3)'
    }
  },
  typography: {
    // fontFamily: "'Roboto Slab', sans-serif",
    fontFamily: `${robotoFont.style.fontFamily}, sans-serif`,
    h1: {
      fontSize: '56px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '110%',
      letterSpacing: '-0.56px',
      fontFamily: robotoSlabFont.style.fontFamily
    },
    h2: {
      fontSize: '49px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '120%',
      fontFamily: robotoSlabFont.style.fontFamily
    },
    h3: {
      fontSize: '39px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '120%',
      fontFamily: robotoSlabFont.style.fontFamily
    },
    h4: {
      fontSize: '31px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '120%',
      fontFamily: robotoSlabFont.style.fontFamily
    },
    h5: {
      fontSize: '25px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '120%',
      fontFamily: robotoSlabFont.style.fontFamily
    },
    subtitle: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '120%',
      fontFamily: robotoSlabFont.style.fontFamily
    },
    bodyLargeBold: {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '120%'
    },
    bodyLarge: {
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: '120%'
    },
    bodyBold: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '19.2px'
    },
    body: {
      fontSize: '16px',
      lineHeight: '120%',
      fontStyle: 'normal',
      fontWeight: 700,
      textTransform: 'none'
    },
    body1: {
      fontSize: '16px',
      lineHeight: '150%',
      fontWeight: 400,
      fontStyle: 'normal'
    },
    bodyLight: {
      fontSize: '16px',
      lineHeight: '120%',
      fontWeight: 400
    },
    bodySmallBold: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '120%'
    },
    bodySmall: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '120%'
    },
    caption: {
      fontSize: '10px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '120%'
    },
    button: {
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '120%',
      fontStyle: 'normal',
      textTransform: 'none'
    },
    captionLarge: {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '120%'
    },
    captionLargeSemiBold: {
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: '120%'
    },
    bodyUltraLarge: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '120%'
    }
  }
});

export default theme;
