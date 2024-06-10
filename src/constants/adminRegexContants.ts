export const PasswordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-^_+=.,~'"`#[\](){}<>|/\\:;])[A-Za-z\d@$!%*?&-^_+=.,~'"`#[\](){}<>|/\\:;]*$/;

export const PhoneRegExp = /^[0-9]{10}$/;

export const SpecialCharactersRegex = /[^a-zA-Z0-9@-_]/g;

export const RedirectURL = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
export const Alphabets = /^[^\s]+$/;

export const AccountNameMin = 3;
export const AccountNameMax = 50;

export const AlphanumericWithSpace = /^[a-zA-Z0-9]*$/;

export const IBANMin = 10;
export const IBANMax = 30;

export const OnlyAlphabets = /^[A-Za-z]+$/;

export const MobileNumMin = 10;
export const MobileNumMax = 15;

export const NameMin = 3;
export const NameMax = 200;

export const ImageRegex = /\.(jpg|jpeg|bmp|gif|png|webp)$/i;
