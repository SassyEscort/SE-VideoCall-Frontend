export const encodeQuery = (data: { [key: string]: string }) => {
  let query = '';
  for (const d in data) query += encodeURIComponent(d) + '=' + encodeURIComponent(data[d]) + '&';
  return query.slice(0, -1);
};
