import Box from '@mui/material/Box';
import { FormikErrors, FormikTouched } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import UINewTypography from 'components/UIComponents/UINewTypography';
import theme from 'themes/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { VideoAcceptType } from 'constants/workerVerification';
import UploadFeaturePhotos from '../dragAndDropMultipleImage/UploadFeaturePhotos';
import PhotoItem from './PhotoItem';
import UploadGalleryPhotos from '../dragAndDropMultipleImage/UploadGalleryPhotos';
import { VerificationFormStep5TypeV2, WorkerPhotos } from '.';
import { GalleryMainContainer, GalleryTitleContainer, UploadItem, UploadMultipleContainer } from './UploadMultiplePhoto.styled';
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
  console.log(existingPhotos, 'existingPhotos');

  const [uploadedImagesURL, setUploadedImagesURL] = useState<UploadPhotos[]>([]);
  const [thumbnailImageId, setThumbnailImageId] = useState<number | undefined>(undefined);

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

  const handleClickThumbnailImageId = (id: number | undefined, name: string) => {
    setThumbnailImageId(id);
    if (!id) {
      name = name && 'file_' + name.split('file')[1];
      workerPhotos
        .filter((photo) => photo.type !== name)
        .map((photo) => {
          if (photo.isFavorite === 1) {
            photo.isFavorite = 0;
          }
        });

      handleExistingPhotos(workerPhotos.filter((photo) => photo.type !== name));
    } else {
      workerPhotos.map((photo) => {
        if (photo.id === id) photo.isFavorite = 1;
        else photo.isFavorite = 0;
      });
      handleExistingPhotos(workerPhotos);
    }
  };

  const handleUploadPhotos = useCallback(
    (values: VerificationFormStep5TypeV2) => {
      const imageUrls: UploadPhotos[] = [];
      if (typeof values.file1 !== 'string' && values.file1)
        imageUrls.push({
          photoURL: URL.createObjectURL(values.file1),
          name: 'file1',
          cords: values.cords1,
          isFavorite: values.isFavorite === 'file1' ? true : false
        });
      if (typeof values.file2 !== 'string' && values.file2)
        imageUrls.push({
          photoURL: URL.createObjectURL(values.file2),
          name: 'file2',
          cords: values.cords2,
          isFavorite: values.isFavorite === 'file2' ? true : false
        });
      if (typeof values.file3 !== 'string' && values.file3)
        imageUrls.push({
          photoURL: URL.createObjectURL(values.file3),
          name: 'file3',
          cords: values.cords3,
          isFavorite: values.isFavorite === 'file3' ? true : false
        });
      if (typeof values.file4 !== 'string' && values.file4)
        imageUrls.push({
          photoURL: URL.createObjectURL(values.file4),
          name: 'file4',
          cords: values.cords4,
          isFavorite: values.isFavorite === 'file4' ? true : false
        });

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
    if (file1.isFavorite === 1 && file2.isFavorite === 0) {
      return -1;
    } else if (file1.isFavorite === 0 && file2.isFavorite === 1) {
      return 1;
    } else {
      return 0;
    }
  };

  const handleExistingPhotos = useCallback((photos: WorkerPhotos[]) => {
    photos?.sort(sortExistingPhotos);
    // setExistingPhotos(
    //   photos
    //     ?.filter((photo) => photo.type !== 'Regular')
    //     ?.map((photo, index) => {
    //       if (photo.type === 'file_5')
    //         return {
    //           id: photo.id,
    //           name: `file5Existing[${index - 4}]`,
    //           photoURL: photo.photo,
    //           cords: photo.cords
    //         };
    //       else {
    //         return {
    //           id: photo.id,
    //           name: `file${photo.type.split('_')[1]}`,
    //           photoURL: photo.photo,
    //           cords: photo.cords,
    //           isFavorite: photo.isFavorite === 1
    //         };
    //       }
    //     })
    // );
  }, []);

  useEffect(() => {
    handleExistingPhotos(workerPhotos);
  }, [handleExistingPhotos, workerPhotos]);

  useEffect(() => {
    setThumbnailImageId(workerPhotos?.filter((x) => x.isFavorite === 1)[0]?.id);
  }, [workerPhotos]);

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
          <UINewTypography variant="h6" color="text.secondary">
            <FormattedMessage id="FeaturePhotos" />
          </UINewTypography>
          <UploadFeaturePhotos
            name="file"
            setValue={setValue}
            accept="image/*"
            errors={errors}
            touched={touched}
            values={values}
            handleUploadPhotos={handleUploadPhotos}
          />
          {[...existingPhotos, ...uploadedImagesURL].length > 0 && (
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {[...existingPhotos, ...uploadedImagesURL]?.map((photo, index) => {
                if (photo.name === 'file1' || photo.name === 'file2' || photo.name === 'file3' || photo.name === 'file4') {
                  return (
                    <PhotoItem
                      key={index}
                      image={photo}
                      isEdit={false}
                      isFeaturePhoto
                      thumbnailImageId={thumbnailImageId}
                      height={height}
                      width={width}
                      setValue={setValue}
                      removeImage={removeImage}
                      handleChangeFile5Cords={handleChangeFile5Cords}
                      handleClickThumbnailImageId={handleClickThumbnailImageId}
                    />
                  );
                }
              })}
            </Box>
          )}
        </GalleryMainContainer>
        <GalleryMainContainer>
          <GalleryTitleContainer>
            <UINewTypography variant="h6" color="text.secondary">
              <FormattedMessage id="Gallery" />
            </UINewTypography>
          </GalleryTitleContainer>
          <UploadGalleryPhotos
            name="file"
            setValue={setValue}
            accept="image/*,video/mp4,video/MP4,video/WebM,video/quicktime,video/avi"
            values={values}
            handleUploadPhotos={handleUploadPhotos}
          />
          {[...existingPhotos, ...uploadedImagesURL]?.filter((photo) => photo?.name?.includes('file5')).length > 0 && (
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {[...existingPhotos, ...uploadedImagesURL]?.map((photo, index) => {
                if (photo.name.includes('file5'))
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
          )}
        </GalleryMainContainer>
      </Box>
    </UploadMultipleContainer>
  );
};

export default ModelMultiplePhoto;
