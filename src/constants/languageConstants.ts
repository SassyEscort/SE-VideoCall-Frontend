export const FLAG_IMAGES: { [key: string]: string } = {
  en: '/images/flags/english-flag.png',
  sp: '/images/flags/spain-flag.png'
};

export const LANGUAGES = [
  { title: 'English', locale: 'en' },
  { title: 'Spanish', locale: 'sp' }
];

export enum LANGUAGES_TYPES {
  EN = 'en',
  SP = 'sp',
  NL = 'nl'
}

export const CHATROOM = [
  { title: 'SexChat', id: 1, url: '/sex-chat' },
  { title: 'CamToCam', id: 2, url: '/cam-to-cam' }
];
