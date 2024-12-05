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
  { title: 'CamToCam', id: 1, url: '/cam-to-cam' },
  { title: 'SexChat', id: 1, url: '/sex-chat' },
  { title: 'ChatWithGirls', id: 2, url: '/chat-with-girls' },
  { title: 'DirtyTalks', id: 3, url: '/dirty-talks' }
];

export const SEOCHATPATH = ['/cam-to-cam', '/sex-chat', '/chat-with-girls'];
