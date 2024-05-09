import { MutableRefObject, useEffect, useState } from 'react';

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

      setImageUrl(
        photo.split('/images')[0] + `/images/` + (coordinates ? '' : !noResize ? `:h-${height + 100}` : '') + photo.split('/images')[1]
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

    setImage(imageUrl);
  }, [coordinates, imageUrl, imageUrlRef, photo, type]);
}

export default useImageOptimize;
