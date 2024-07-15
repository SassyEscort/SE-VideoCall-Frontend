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
