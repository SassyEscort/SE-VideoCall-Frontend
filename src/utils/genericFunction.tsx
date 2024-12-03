export const encodeQuery = (data: { [key: string]: string }) => {
  let query = '';
  for (const d in data) query += encodeURIComponent(d) + '=' + encodeURIComponent(data[d]) + '&';
  return query.slice(0, -1);
};

export const getQueryParams = (keys: string[]) => {
  const params: { [key: string]: string } = {};
  const queryParams = new URLSearchParams(location.search);
  keys.forEach((key) => {
    if (queryParams.has(key)) {
      params[key] = queryParams.get(key) as string;
    }
  });
  return params;
};

export const getQueryParam = (key: string, defaultValue?: string | number) => {
  let value = defaultValue ? defaultValue : '';
  const queryParams = new URLSearchParams(location.search);
  if (queryParams.has(key)) {
    value = queryParams.get(key) as string;
  }
  return value;
};

export const parseQueryString = (queryString: string) => {
  return queryString?.split('&')?.reduce((acc: any, pair: any) => {
    const [key, value] = pair?.split('=');
    acc[key] = isNaN(value) ? value : Number(value);
    return acc;
  }, {});
};

export const areObjectsEqual = (obj1: any, obj2: any) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  return keys1.every((key) => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
};
