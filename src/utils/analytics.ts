export const gaEventTrigger = (action: string, data: any) => {
  if (window.gtag) {
    window.gtag('event', action, data);
  }
};
