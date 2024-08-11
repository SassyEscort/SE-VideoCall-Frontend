export const gaEventTrigger = (action: string, data: any) => {
  if (window.gtag) {
    try {
      const parsedValue = JSON.parse(data.value);
      const flattenedValue = flattenObject(parsedValue, 'custom_');
      data = { ...data, ...flattenedValue };
      window.gtag('event', action, data);
    } catch (e) {
      console.error('Error parsing value field:', e);
    }
  }
};

//Helper function to flatten a nested object
const flattenObject = (obj: any, prefix: string = '', parentKey: string = ''): any => {
  return Object.keys(obj).reduce((acc :any, key) => {
    const newKey = `${prefix}${parentKey ? `${parentKey}_` : ''}${key}`.replace(/\./g, '_');
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(acc, flattenObject(obj[key], prefix, newKey));
    } else {
      acc[newKey] = obj[key];
    }
    return acc;
  }, {});
};
