export const gaEventTrigger = (action: string, data: any) => {
  if (window.gtag) {
    try {
      const parsedValue = tryParseJSON(data.value);
      if (parsedValue) {
        const flattenedValue = flattenObject(parsedValue, 'custom_');
        data = { ...data, ...flattenedValue };
      }
    } catch (e) {
      console.error('Error processing value field:', e);
    }
    window.gtag('event', action, data);
  }
};

// Helper function to flatten a nested object with a custom prefix and replace '.' with '_'
const flattenObject = (obj: any, prefix: string = '', parentKey: string = ''): any => {
  return Object.keys(obj).reduce((acc:any, key) => {
    const newKey = `${prefix}${parentKey ? `${parentKey}_` : ''}${key}`.replace(/\./g, '_');
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(acc, flattenObject(obj[key], prefix, newKey));
    } else {
      acc[newKey] = obj[key];
    }
    return acc;
  }, {});
};

// Helper function to safely parse JSON
const tryParseJSON = (jsonString: string): any => {
  try {
    const obj = JSON.parse(jsonString);
    if (obj && typeof obj === "object") {
      return obj;
    }
  } catch (e) {
    console.error('Invalid JSON string:', jsonString);
  }
  return null;
};
