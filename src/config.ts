import { Manrope } from 'next/font/google';
import { DefaultConfigProps, MenuOrientation, ThemeDirection, ThemeMode } from 'types/config';

export const twitterColor = '#1DA1F2';
export const facebookColor = '#3b5998';
export const linkedInColor = '#0e76a8';

export const APP_DEFAULT_PATH = '/profile';
export const HORIZONTAL_MAX_ITEM = 6;
export const DRAWER_WIDTH = 280;
export const MINI_DRAWER_WIDTH = 90;
export const HEADER_HEIGHT = 74;

const manropeFont = Manrope({ subsets: ['latin'] });

const config: DefaultConfigProps = {
  fontFamily: manropeFont.style.fontFamily,
  i18n: 'en',
  menuOrientation: MenuOrientation.HORIZONTAL,
  menuCaption: true,
  miniDrawer: false,
  container: false,
  mode: ThemeMode.LIGHT,
  presetColor: 'theme',
  themeDirection: ThemeDirection.LTR,
  themeContrast: false
};

export default config;
