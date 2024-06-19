import { VideoAcceptType } from 'constants/workerVerification';
import { MutableRefObject, useEffect, useState } from 'react';
import { Area } from 'react-easy-crop';

function useImageOptimize(
  imageUrlRef: MutableRefObject<HTMLElement | undefined>,
  photo: string,
  type?: 'BG' | 'IMG',
  noResize?: boolean,
  isWaterMark?: boolean,
  coordinates?: string
) {
  type = type ?? 'BG';
  isWaterMark = isWaterMark ?? true;

  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (imageUrlRef.current && photo) {
      const height = imageUrlRef.current.clientHeight;
      const videoTypeCondition = VideoAcceptType.includes(photo.substring(photo.lastIndexOf('.') + 1));

      setImageUrl(
        photo.split('/images')[0] +
          `/images/tr:` +
          `${
            videoTypeCondition && isWaterMark
              ? `l-text,i-Sassy,fs-45,tg-b,co-FFFFFF75,l-end`
              : isWaterMark && `l-text,i-Sassy,co-FFFFFF75,tg-b,fs-45,pa-40,ia-left,ly-N0,lx-N0,l-end`
          }` +
          (coordinates ? '' : !noResize ? `:h-${height + 100}` : '') +
          photo.split('/images')[1]
      );
    }
  }, [coordinates, imageUrlRef, isWaterMark, noResize, photo]);

  useEffect(() => {
    const setImage = (image: string) => {
      if (imageUrlRef.current && image) {
        if (type === 'BG') imageUrlRef.current.style.backgroundImage = 'url(' + image + ')';
        else imageUrlRef.current.setAttribute('src', image);
      }
    };

    const finalCroppedImage = async () => {
      const existingCords: Area | undefined = coordinates && JSON.parse(coordinates).cords;

      if (existingCords) {
        const croppedImage = `${photo}?tr=w-${existingCords.width},h-${existingCords.height},cm-extract,x-${existingCords.x},y-${existingCords.y}`;
        setImage(croppedImage);
      } else setImage(imageUrl);
    };

    finalCroppedImage();
  }, [coordinates, imageUrl, imageUrlRef, photo, type]);
}

export default useImageOptimize;
