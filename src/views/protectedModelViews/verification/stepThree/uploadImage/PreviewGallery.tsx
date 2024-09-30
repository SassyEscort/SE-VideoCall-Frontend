import Box from '@mui/material/Box';
import { useEffect, useState, memo } from 'react';
import { Area } from 'react-easy-crop';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { VideoAcceptType } from 'constants/workerVerification';
import { DragAndDropMultipleImageThumbnailPhoto } from '../dragAndDropMultipleImage/DragAndDropMultipleImage.styled';
import { getRepositionImage } from 'utils/getRepositionImage';
import { UploadPhotos } from './ModelMultiplePhoto';
import { CroppedItem, VideoBox } from './UploadMultiplePhoto.styled';
import { FormattedMessage } from 'react-intl';

const PreviewGallery = ({ image, isEdit, height, width }: { image: UploadPhotos; isEdit: boolean; height: number; width: number }) => {
  const [croppedImage, setCroppedImage] = useState('');

  const videoTypeCondition =
    VideoAcceptType.includes(image?.photoURL?.substring(image?.photoURL?.lastIndexOf('.') + 1)) ||
    image?.photoURL?.startsWith('video-blob:');

  useEffect(() => {
    const fetchCroppedImage = async () => {
      const existingCords: Area | undefined = image.cords && JSON.parse(image.cords).cords;

      if (existingCords) {
        const croppedImage = await getRepositionImage(image.photoURL, existingCords);
        setCroppedImage(croppedImage);
      } else {
        setCroppedImage(image.photoURL);
      }
    };

    fetchCroppedImage();
  }, [image.cords, image.photoURL, image]);

  return (
    <>
      <Box>
        <>
          {image.isFavorite && (
            <Box sx={{ position: 'relative' }}>
              <DragAndDropMultipleImageThumbnailPhoto
                sx={{
                  top: isEdit ? 260 : 'inherited',
                  left: isEdit ? 45 : 'inherited'
                }}
              >
                <UINewTypography variant="SubtitleSmallRegular">
                  <FormattedMessage id="ThumbnailPhoto" />
                </UINewTypography>
              </DragAndDropMultipleImageThumbnailPhoto>
            </Box>
          )}
        </>

        {videoTypeCondition ? (
          <VideoBox height={height} width={width}>
            <Box
              component="img"
              alt="play_icon"
              src="/images/verification/play-icon.svg"
              sx={{
                position: 'absolute'
              }}
            />
            <Box component="video" width="100%" height="100%" preload="metadata">
              <Box component="source" src={`${image.photoURL}#t=0.1`} />
            </Box>
          </VideoBox>
        ) : (
          <CroppedItem
            sx={{
              height: height,
              width: width,
              ...(croppedImage
                ? {
                    backgroundImage: `url(${croppedImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }
                : {})
            }}
          />
        )}
      </Box>
    </>
  );
};

export default memo(PreviewGallery);
