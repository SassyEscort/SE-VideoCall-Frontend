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

      setImageUrl(
        photo.split('/images')[0] + `/images/tr:` + (coordinates ? '' : !noResize ? `:h-${height + 100}` : '') + photo.split('/images')[1]
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
