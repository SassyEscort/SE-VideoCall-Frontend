export const PASSWORD_PATTERN =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\-\^_+=.,~'"`#[\](){}<>|/\\:;])[A-Za-z\d@$!%*?&\-\^_+=.,~'"`#[\](){}<>|/\\:;]*$/;

export const PASSWORD_PATTERN_WITHOUT_CAPITAL_LETTER =
  /^(?=.*\d)(?=.*[@$!%*?&-^_+=.,~'"`#[\](){}<>|/\\:;])[A-Za-z\d@$!%*?&-^_+=.,~'"`#[\](){}<>|/\\:;]*$/;

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z0-9_-]*\.[a-zA-Z]{2,}$/;

export const NAME_REGEX = /^(?!.*\s$)(?!.*\s{4})[^\s](?:(?!\s{4}).)*[^\s]$/;
