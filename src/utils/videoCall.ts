export const randomID = (len = 5): string => {
  let result = '';
  const chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP';
  const maxPos = chars.length;
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
};

export const getUrlParams = (url: string = ''): URLSearchParams => {
  if (typeof window === 'undefined') return new URLSearchParams();
  const urlStr = (typeof window !== 'undefined' && window.location.href.split('?')[1]) || [];
  return new URLSearchParams(urlStr);
};
