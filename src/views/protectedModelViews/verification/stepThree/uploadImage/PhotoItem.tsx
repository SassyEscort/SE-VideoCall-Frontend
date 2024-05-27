import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { Area } from 'react-easy-crop';
import { FormikErrors } from 'formik';
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
import { FormattedMessage } from 'react-intl';
import { VerificationStepService } from 'services/modelAuth/verificationStep.service';
import { TokenIdType } from '../..';
import { toast } from 'react-toastify';

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
  handleClickThumbnailImageId,
  token,
  handleBlobThumbnail
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
  token: TokenIdType;
  handleBlobThumbnail: (id: number | undefined, image: UploadPhotos) => void;
}) => {
  const [openRepositionModal, setOpenRepositionModal] = useState(false);
  const [croppedImage, setCroppedImage] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [thumbnail, setThumbnail] = useState(false);

  const open = Boolean(anchorEl);
  const videoTypeCondition =
    VideoAcceptType.includes(image?.photoURL?.substring(image?.photoURL?.lastIndexOf('.') + 1)) ||
    image?.photoURL?.startsWith('video-blob:');

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

  const handleClickThumbnailPhoto = async () => {
    if (handleClickThumbnailImageId) {
      if (image.id) {
        const response = await VerificationStepService.modelThumbnailPhoto({ model_photo_id: image.id }, token);
        if (response.code === 200) {
          toast.success(response.message);
        }
      }

      if (!image.id) {
        setThumbnail(true);
        image.isFavorite = true;
        setValue('is_favourite', image.name);
        toast.success('Image marked as thumbnail');
      }
    }

    handleClose();
  };

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

  useEffect(() => {
    if (thumbnail) {
      handleBlobThumbnail(undefined, image);
      image.isFavorite = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image, thumbnail]);

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
                handleClickThumbnailPhoto={handleClickThumbnailPhoto}
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
