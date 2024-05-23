import Box from '@mui/material/Box';
import { FormikErrors, FormikTouched } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import UINewTypography from 'components/UIComponents/UINewTypography';
import theme from 'themes/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { VideoAcceptType } from 'constants/workerVerification';
import PhotoItem from './PhotoItem';
import UploadGalleryPhotos from '../dragAndDropMultipleImage/UploadGalleryPhotos';
import { VerificationFormStep5TypeV2, WorkerPhotos } from '.';
import { GalleryMainContainer, UploadItem, UploadMultipleContainer } from './UploadMultiplePhoto.styled';
import { FormattedMessage } from 'react-intl';

export type UploadMultiplePhotos = {
  errors: FormikErrors<VerificationFormStep5TypeV2>;
  values: VerificationFormStep5TypeV2;
  setValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<VerificationFormStep5TypeV2>>;
  touched: FormikTouched<VerificationFormStep5TypeV2>;
  workerPhotos: WorkerPhotos[];
  isEdit?: boolean;
};
export type UploadPhotos = {
  id?: number;
  name: string;
  photoURL: string;
  cords?: string;
  isFavorite?: boolean;
};

const ModelMultiplePhoto = ({ values, setValue, errors, touched, workerPhotos }: UploadMultiplePhotos) => {
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const height = isSmUp ? 193 : 210;
  const width = isSmUp ? 145 : 159;

  const [existingPhotos, setExistingPhotos] = useState<UploadPhotos[]>([]);

  const [uploadedImagesURL, setUploadedImagesURL] = useState<UploadPhotos[]>([]);

  const removeImage = (name: string) => {
    let index = existingPhotos?.findIndex((photo) => photo.photoURL === name);
    if (index !== -1) {
      existingPhotos?.splice(index, 1);
    }
    index = uploadedImagesURL?.findIndex((photo) => photo.photoURL === name);
    if (index !== -1) {
      uploadedImagesURL?.splice(index, 1);
    }
  };

  const handleChangeFile5Cords = (name: string, cords: string) => {
    let index = existingPhotos?.findIndex((photo) => photo.name === name);
    if (index !== -1) existingPhotos[index].cords = cords;

    index = uploadedImagesURL?.findIndex((photo) => photo.name === name);
    if (index !== -1) uploadedImagesURL[index].cords = cords;
  };

  const handleUploadPhotos = useCallback(
    (values: VerificationFormStep5TypeV2) => {
      const imageUrls: UploadPhotos[] = [];

      if (values.file5) {
        values.file5.forEach((data, index) => {
          if (data) {
            if (VideoAcceptType.find((x) => data.name?.includes('.' + x))) {
              imageUrls.push({
                photoURL: 'video-' + URL.createObjectURL(data),
                name: `file5[${index}]`
              });
            } else {
              imageUrls.push({
                photoURL: URL.createObjectURL(data),
                name: `file5[${index}]`,
                cords: (values.cords5 && values.cords5[index]) || ''
              });
            }
          }
        });
      }

      if (imageUrls.length) {
        setUploadedImagesURL(imageUrls);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [values]
  );

  const sortExistingPhotos = (file1: WorkerPhotos, file2: WorkerPhotos): number => {
    if (file1.favourite === 1 && file2.favourite === 0) {
      return -1;
    } else if (file1.favourite === 0 && file2.favourite === 1) {
      return 1;
    } else {
      return 0;
    }
  };

  const handleExistingPhotos = useCallback((photos: WorkerPhotos[]) => {
    photos?.sort(sortExistingPhotos);
    setExistingPhotos(
      photos
        ?.filter((photo) => !photo.is_document)
        ?.map((photo, index) => {
          if (photo.type === 'file_5')
            return {
              name: `file5Existing[${index - 4}]`,
              photoURL: photo.link,
              cords: photo.cords
            };
          else {
            return {
              name: `file${photo?.type?.split('_')[1]}`,
              photoURL: photo.link,
              cords: photo.cords,
              isFavorite: photo.favourite === 1
            };
          }
        })
    );
  }, []);

  useEffect(() => {
    handleExistingPhotos(workerPhotos);
  }, [handleExistingPhotos, workerPhotos]);

  return (
    <UploadMultipleContainer>
      <Box paddingBottom={4} pt={4}>
        <UINewTypography variant="h3" sx={{ color: '#E9E8EB' }}>
          <FormattedMessage id="UploadPhotos" />
        </UINewTypography>
      </Box>
      <Box
        display="flex"
        gap={3}
        sx={{
          backgroundColor: 'secondary.500',
          width: '100%',
          maxWidth: 824,
          padding: { xs: '24px 10px', sm: '24px 16px' },
          flexDirection: 'column',
          borderRadius: 3
        }}
      >
        <UploadItem>
          <UINewTypography variant="h6" color="text.secondary">
            <FormattedMessage id="UploadPics" />
          </UINewTypography>
          <UINewTypography variant="SubtitleSmallRegular">
            <FormattedMessage id="UploadPicDesc" />
          </UINewTypography>
        </UploadItem>

        <GalleryMainContainer>
          <UploadGalleryPhotos
            name="file"
            setValue={setValue}
            accept="image/*,video/mp4,video/MP4,video/WebM,video/quicktime,video/avi"
            values={values}
            handleUploadPhotos={handleUploadPhotos}
          />
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {[...existingPhotos, ...uploadedImagesURL]?.map((photo, index) => {
              return (
                <PhotoItem
                  key={index}
                  image={photo}
                  isEdit={false}
                  isFeaturePhoto={false}
                  height={height}
                  width={width}
                  setValue={setValue}
                  removeImage={removeImage}
                  handleChangeFile5Cords={handleChangeFile5Cords}
                />
              );
            })}
          </Box>
        </GalleryMainContainer>
      </Box>
    </UploadMultipleContainer>
  );
};

export default ModelMultiplePhoto;
