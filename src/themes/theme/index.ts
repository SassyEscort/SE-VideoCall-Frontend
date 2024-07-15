import { PaletteColorOptions, createTheme } from '@mui/material/styles';
import { CSSProperties } from 'react';
import { Manrope } from 'next/font/google';

const manropeFont = Manrope({ subsets: ['latin'] });
declare module '@mui/material/styles' {
  interface PaletteOptions {
    white?: PaletteColorOptions;
    black?: PaletteColorOptions;
  }

  interface PaletteColor {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface SimplePaletteColorOptions {
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
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
    SubtitleSmallMedium: CSSProperties;
    newTitle: CSSProperties;
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
    buttonLargeMenu?: CSSProperties;
    bodySemiBold?: CSSProperties;
    SubtitleSmallRegular?: CSSProperties;
    captionBold?: CSSProperties;
    buttonSmallBold?: CSSProperties;
    bodyRegular?: CSSProperties;
    buttonLargeBold?: CSSProperties;
    SubtitleLargeBold?: CSSProperties;
    subtitleLargeRegular?: CSSProperties;
    SubtitleSmallMedium?: CSSProperties;
    TypographyAttract?: CSSProperties;
    TypographyPercentage?: CSSProperties;
    SmallerText?: CSSProperties;
    ExtraSmallerText?: CSSProperties;
    MediumBold?: CSSProperties;
    MediumSemiBold?: CSSProperties;
    MediumSemiBoldText?: CSSProperties;
    SmallText?: CSSProperties;
    captionLargeBold?: CSSProperties;
    newTitle?: CSSProperties;
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
    buttonLargeMenu: true;
    bodySemiBold: true;
    SubtitleSmallRegular: true;
    captionBold: true;
    buttonSmallBold: true;
    bodyRegular: true;
    buttonLargeBold: true;
    SubtitleLargeBold: true;
    subtitleLargeRegular: true;
    SubtitleSmallMedium: true;
    TypographyAttract: true;
    SmallerText: true;
    ExtraSmallerText: true;
    MediumBold: true;
    MediumSemiBold: true;
    MediumSemiBoldText: true;
    SmallText: true;
    captionLargeBold: true;
    TypographyPercentage: true;
    newTitle: true;
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
    text: {
      primary: '#B7B5B9',
      secondary: '#E9E8EB',
      disabled: '#58535E'
    },
    primary: {
      100: '#D12288',
      200: '#290F1E',
      900: '#E92F2F',
      500: '#611441',
      700: '#232027',
      800: '#D12288',
      400: '#FF68C0',
      300: '#FF0000',
      600: '#FFE500',
      main: '#FF48B3'
    },
    error: {
      // 100: "rgba(255, 37, 37, 0.15)",
      300: '#FF5959',
      main: '#FF2525'
    },
    success: {
      main: '#079C46',
      100: '#79E028'
      // 300: "rgba(7, 156, 70, 0.30)",
    },
    secondary: {
      main: '#290F1E',
      light: '#58535E',
      dark: '#1E0815',
      // light: "#e7e7e7",
      100: '#EEEEEE',
      200: '#B7B5B9',
      500: '#100B19',
      700: '#86838A',
      300: '#DDDDDD',
      400: '#79E02852',
      600: '#B7B5B952',
      800: '#07030E',
      900: '#D4D3D63D'
    },

    white: {
      main: '#fff'
    },
    black: {
      main: '#000'
    },
    background: {
      paper: '#000',
      default: '#000'
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
    fontFamily: `${manropeFont.style.fontFamily}, sans-serif`,
    h1: {
      fontSize: '48px',
      fontWeight: 700,
      lineHeight: '125%',
      letterSpacing: '-0.5px'
    },
    h2: {
      fontSize: '38px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '125%'
    },
    h3: {
      fontSize: '30px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '140%',
      letterSpacing: '-0.5px'
    },
    h4: {
      fontSize: '31px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '120%'
    },
    h5: {
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '140%',
      letterSpacing: '0.5px'
    },
    h6: {
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '140%'
    },
    subtitle: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '120%'
    },
    subtitleLargeRegular: {
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: '160%',
      letterSpacing: '0.3px'
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
    buttonSmallBold: {
      fontSize: '14px',
      lineHeight: '120%',
      fontStyle: 'normal',
      fontWeight: 700,
      textTransform: 'none'
    },
    buttonLargeBold: {
      fontSize: '16px',
      lineHeight: '120%',
      fontStyle: 'normal',
      fontWeight: 700
    },
    bodyRegular: {
      fontSize: '16px',
      lineHeight: '160%',
      fontWeight: 400,
      fontStyle: 'normal',
      letterSpacing: '0.1px'
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
    bodySemiBold: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '160%',
      fontStyle: 'normal'
    },
    bodySmall: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '120%'
    },
    SubtitleSmallRegular: {
      fontSize: '14px',
      fontStyle: 'normal',
      letterSpacing: '0.3px',
      fontWeight: 400,
      lineHeight: '140%'
    },
    SubtitleLargeBold: {
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '150%'
    },
    caption: {
      fontSize: '13px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '18.2px%'
    },
    captionBold: {
      fontSize: '13px',
      fontWeight: 800,
      lineHeight: '140%',
      fontStyle: 'normal',
      textTransform: 'uppercase'
    },
    button: {
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '120%',
      fontStyle: 'normal',
      textTransform: 'none'
    },
    buttonLargeMenu: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '120%',
      fontStyle: 'normal'
    },
    captionLarge: {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '120%'
    },
    captionLargeBold: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '140%'
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
    },
    SubtitleSmallMedium: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '140%',
      fontStyle: 'normal',
      letterSpacing: '0.3px'
    },
    TypographyAttract: {
      fontSize: '96px',
      fontWeight: 300,
      lineHeight: '110%',
      fontStyle: 'normal'
    },
    TypographyPercentage: {
      fontSize: '40px',
      fontWeight: 300,
      lineHeight: '110%'
    },
    SmallerText: {
      fontSize: '10px',
      fontWeight: 800,
      lineHeight: '14px'
    },
    ExtraSmallerText: {
      fontSize: '10px',
      fontWeight: 600,
      lineHeight: '14px'
    },
    MediumBold: {
      fontSize: '28px',
      fontWeight: 800,
      lineHeight: '32px',
      textTransform: 'uppercase'
    },
    SmallText: {
      fontSize: '11px',
      fontWeight: 500,
      lineHeight: '16px'
    },
    MediumSemiBold: {
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: '52px'
    },
    MediumSemiBoldText: {
      fontSize: '32px',
      fontWeight: 700,
      lineHeight: '50px'
    },
    newTitle: {
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: '24px'
    }
  }
});

export default theme;
