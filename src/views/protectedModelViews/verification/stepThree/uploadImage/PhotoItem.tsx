import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { Area } from 'react-easy-crop';
import { FormikErrors } from 'formik';
// import useFavouritePhoto from '@/services/hooks/Profile/usePostFavouriteProfilePhoto';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { VideoAcceptType } from 'constants/workerVerification';
import {
  DragAndDropMultipleImageCloseButton,
  DragAndDropMultipleImageEditButton,
  DragAndDropMultipleImageThumbnailPhoto
} from '../dragAndDropMultipleImage/DragAndDropMultipleImage.styled';
import RepositionPhoto from './RepositionPhoto';
import { getRepositionImage } from 'utils/getRepositionImage';
import ImageShotByMenu from './ShortBytoggle';
import { VerificationFormStep5TypeV2 } from '.';
import { UploadPhotos } from './ModelMultiplePhoto';
import { VideoBox } from './UploadMultiplePhoto.styled';

const PhotoItem = ({
  image,
  isEdit,
  isFeaturePhoto,
  thumbnailImageId,
  height,
  width,
  setValue,
  removeImage,
  handleChangeFile5Cords,
  handleClickThumbnailImageId
}: {
  image: UploadPhotos;
  isEdit: boolean;
  isFeaturePhoto: boolean;
  thumbnailImageId?: number;
  height: number;
  width: number;
  setValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<VerificationFormStep5TypeV2>>;
  removeImage: (name: string, photoId?: number) => void;
  handleChangeFile5Cords?: (name: string, cords: string) => void;
  handleClickThumbnailImageId?: (id: number | undefined, name: string) => void;
}) => {
  const [openRepositionModal, setOpenRepositionModal] = useState(false);
  const [croppedImage, setCroppedImage] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const videoTypeCondition =
    VideoAcceptType.includes(image.photoURL.substring(image.photoURL.lastIndexOf('.') + 1)) || image.photoURL.startsWith('video-blob:');

  // const mutationThumbnailePhoto = useFavouritePhoto({ isAdmin: false });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseRepositionModal = () => {
    setOpenRepositionModal(false);
    handleClose();
  };

  const handleOpenRepositionModal = () => {
    setOpenRepositionModal(true);
    handleClose();
  };

  // const handleClickThimbnailPhoto = () => {
  //   if (handleClickThumbnailImageId) {
  //     if (image.id)
  //       mutationThumbnailePhoto.mutate(
  //         { photoId: image.id },
  //         {
  //           onSuccess: (res) => {
  //             if (res.success) {
  //               handleClickThumbnailImageId(image.id, image.name);
  //               toast.success('ProfilePictureUpdated');
  //             }
  //           }
  //         }
  //       );

  //     if (!image.id) {
  //       setValue('isFavorite', image.name);
  //       handleClickThumbnailImageId(undefined, image.name);
  //     }
  //   }

  //   handleClose();
  // };

  const handleRemoveImage = (name: string) => {
    setCroppedImage('');
    setValue(name, null);
    removeImage(image.photoURL, image.id);
  };

  const handleSaveRepositionCords = (cords: string) => {
    const { name } = image;
    if (handleChangeFile5Cords) {
      switch (name) {
        case 'file1':
          setValue('cords1', cords);
          break;
        case 'file2':
          setValue('cords2', cords);
          break;
        case 'file3':
          setValue('cords3', cords);
          break;
        case 'file4':
          setValue('cords4', cords);
          break;
      }

      if (name.includes('file5[')) {
        const index = name.substring(name.indexOf(']') - 1, name.indexOf(']'));
        setValue(`cords5[${index}]`, cords);
      } else if (name.includes('file5Existing')) {
        setValue(`${name}.cords`, cords);
      }

      handleChangeFile5Cords(name, cords);
    }
  };

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
  }, [image.cords, image.photoURL]);

  return (
    <>
      <Box>
        <>
          {!image.isFavorite && (
            <Box sx={{ position: 'relative' }} id="imageContainer">
              <DragAndDropMultipleImageCloseButton size="small" onClick={() => handleRemoveImage(image.name)}>
                <Box component="img" src="/images/verification/close-icon.svg" />
              </DragAndDropMultipleImageCloseButton>
            </Box>
          )}
          {!videoTypeCondition && (
            <Box sx={{ position: 'relative' }}>
              <DragAndDropMultipleImageEditButton
                size="small"
                onClick={handleClick}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Box component="img" src="/images/verification/more-icon.svg" />
              </DragAndDropMultipleImageEditButton>
              <ImageShotByMenu
                anchorEl={anchorEl}
                isFeaturePhoto={isFeaturePhoto}
                videoTypeCondition={videoTypeCondition}
                handleClose={handleClose}
                handleOpenRepositionModal={handleOpenRepositionModal}
                // handleClickThimbnailPhoto={handleClickThimbnailPhoto}
              />
            </Box>
          )}
          {((thumbnailImageId !== undefined && image.id !== undefined && thumbnailImageId === image.id) || image.isFavorite) && (
            <Box sx={{ position: 'relative' }}>
              <DragAndDropMultipleImageThumbnailPhoto
                sx={{
                  top: isEdit ? 260 : 'inherited',
                  left: isEdit ? 45 : 'inherited'
                }}
              >
                <UINewTypography variant="SubtitleSmallRegular">ThumbnailPhoto</UINewTypography>
              </DragAndDropMultipleImageThumbnailPhoto>
            </Box>
          )}
        </>

        {videoTypeCondition ? (
          <VideoBox height={height} width={width}>
            <Box
              component="img"
              src="/images/dashboard/play_icon.svg"
              sx={{
                position: 'absolute'
              }}
            />
            <Box component="video" width="100%" height="100%" preload="metadata">
              <Box component="source" src={`${image.photoURL}#t=0.1`} />
            </Box>
          </VideoBox>
        ) : (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: height,
              width: width,
              borderRadius: 2,
              overflow: 'hidden',
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
      <RepositionPhoto
        image={image.photoURL}
        open={openRepositionModal}
        croppedCords={image.cords}
        handleClose={handleCloseRepositionModal}
        handleSave={handleSaveRepositionCords}
      />
    </>
  );
};

export default PhotoItem;
