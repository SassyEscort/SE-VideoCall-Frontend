import { Area } from 'react-easy-crop';

export const getRepositionImage = (image: string, pixelCrop: Area): Promise<string> => {
  const canvas = document.createElement('canvas');
  canvas.width = 600;
  canvas.height = 900;
  const ctx = canvas.getContext('2d');

  const newImage = new Image();
  newImage.src = image;
  newImage.crossOrigin = 'anonymous';

  return new Promise<string>((resolve, reject) => {
    newImage.onload = () => {
      ctx?.drawImage(newImage, pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height, 0, 0, canvas.width, canvas.height);

      const dataUrl = canvas.toDataURL('image/jpeg');
      resolve(dataUrl);
    };

    newImage.onerror = (error) => {
      reject(error);
    };
  });
};
