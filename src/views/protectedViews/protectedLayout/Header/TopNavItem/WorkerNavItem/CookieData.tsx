export const getCookie = (name: string) => {
  const cookieArr = document.cookie.split(';');
  for (let cookie of cookieArr) {
    cookie = cookie.trim();
    if (cookie.startsWith(`${name}=`)) {
      return cookie.split('=')[1];
    }
  }
  return null;
};

export const setCookie = (name: string, value: string, days: number, path: string) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=${path}`;
};
