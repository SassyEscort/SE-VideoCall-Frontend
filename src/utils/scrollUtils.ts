export const scrollToError = (className: string) => {
  setTimeout(() => {
    const container = document.querySelector(className) as HTMLElement;
    if (container) {
      container.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      });
    }
  }, 300);
};
