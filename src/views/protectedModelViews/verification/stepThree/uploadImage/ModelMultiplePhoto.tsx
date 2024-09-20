import Box from '@mui/material/Box';
import { FormikErrors, FormikTouched } from 'formik';
import { memo, useCallback, useEffect, useState } from 'react';
import UINewTypography from 'components/UIComponents/UINewTypography';
import theme from 'themes/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { VideoAcceptType } from 'constants/workerVerification';
import PhotoItem from './PhotoItem';
import UploadGalleryPhotos from '../dragAndDropMultipleImage/UploadGalleryPhotos';
import { VerificationFormStep5TypeV2, WorkerPhotos } from '.';
import {
  GalleryMainContainer,
  ModelMultiplePhotoItem,
  ModelMultiplePhotoSubBox,
  UIPhotosHeader,
  UploadItem,
  UploadMultipleBox,
  UploadMultiplePhotos,
  UploadPhotostext
} from './UploadMultiplePhoto.styled';
import { FormattedMessage } from 'react-intl';
import { TokenIdType } from '../..';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';
import { sortExistingPhotos } from 'utils/photoUtils';
import { ModelMultipleBoxContainer } from './RepositionPhoto.styled';
import ImageDeleteWarning from './ImageDeleteWarning';

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
  isUpdated?: boolean;
  token: TokenIdType;
  handleModelApiChange: () => void;
  loading: boolean;
  handelChangedIsUpdated?: () => void;
  handleImageWarningClose: () => void;
  imageWarningOpen: boolean;
  handlePhotoSubmit: (values: VerificationFormStep5TypeV2) => Promise<void>;
  setTouched: (
    touched: FormikTouched<VerificationFormStep5TypeV2>,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<VerificationFormStep5TypeV2>>;
};
export type UploadPhotos = {
  id?: number;
  name: string;
  photoURL: string;
  cords?: string;
  isFavorite?: boolean;
  is_favourite?: string;
  file_id?: string;
};

const ModelMultiplePhoto = ({
  values,
  setValue,
  errors,
  touched,
  workerPhotos,
  token,
  handleModelApiChange,
  isEdit,
  isUpdated,
  loading,
  handelChangedIsUpdated,
  handleImageWarningClose,
  imageWarningOpen,
  handlePhotoSubmit,
  setTouched
}: UploadMultiplePhotos) => {
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const height = isSmUp ? 193 : 210;
  const width = isSmUp ? 145 : 149;

  const [existingPhotos, setExistingPhotos] = useState<UploadPhotos[]>([]);
  const [uploadedImagesURL, setUploadedImagesURL] = useState<UploadPhotos[]>([]);
  const [thumbnailImageId, setThumbnailImageId] = useState<number | undefined>(undefined);

  const removeImage = async (name: string, photoName: string, isFav: boolean | undefined, file_id?: string) => {
    setTouched({
      file5: true
    });
    let index = existingPhotos?.findIndex((photo) => photo.photoURL === name);
    if (index !== -1) {
      existingPhotos?.splice(index, 1);
      let updatedPhotos = [...existingPhotos];
      if (isFav && updatedPhotos.length) {
        const videoTypeCondition = VideoAcceptType?.includes(
          updatedPhotos[index]?.photoURL?.substring(updatedPhotos[index]?.photoURL?.lastIndexOf('.') + 1)
        );

        if ((updatedPhotos.length >= index && videoTypeCondition) || photoName.startsWith('file5Existing')) {
          while (updatedPhotos[index]) {
            const nextItemCondition = VideoAcceptType?.includes(
              updatedPhotos[index]?.photoURL?.substring(updatedPhotos[index]?.photoURL?.lastIndexOf('.') + 1)
            );

            if (!nextItemCondition) {
              updatedPhotos[index].isFavorite = true;
              break;
            } else if (nextItemCondition && existingPhotos.length === 1) {
              updatedPhotos[index].isFavorite = true;
              break;
            }
            index++;
          }
          if (updatedPhotos.length > index) {
            updatedPhotos[index].isFavorite = true;
          }
          setExistingPhotos(updatedPhotos);
        } else if (existingPhotos.length && !isFav) {
          updatedPhotos[index].isFavorite = true;
          setExistingPhotos(updatedPhotos);
        }
        setValue('file5Existing', existingPhotos);
      } else {
        const filteredFile5 = values.file5?.filter((x) => x !== null);
        if (!filteredFile5) {
          setThumbnailImageId(undefined);
        }
        setValue('file5', filteredFile5);
        setValue('file5Existing', existingPhotos);
      }
    }
    index = uploadedImagesURL?.findIndex((photo) => photo.photoURL === name);
    const updatedImages = [...uploadedImagesURL];
    if (index !== -1) {
      updatedImages.splice(index, 1);
      if (!updatedImages.length) {
        setValue('file5', []);
      }
    }

    if (isFav && updatedImages.length) {
      setThumbnailImageId(undefined);
      updatedImages[0].isFavorite = true;
      updatedImages[0].name = 'file5[0]';
      setValue('is_favourite', 'file5[0]');
    }
    setUploadedImagesURL(updatedImages);
  };

  const handleChangeFile5Cords = (name: string, cords: string) => {
    let index = existingPhotos?.findIndex((photo) => photo.name === name);
    if (index !== -1) existingPhotos[index].cords = cords;

    index = uploadedImagesURL?.findIndex((photo) => photo.name === name);
    if (index !== -1) uploadedImagesURL[index].cords = cords;
  };

  const handleClickThumbnailImageId = (id: number | undefined, name: string, photoIndex: number) => {
    const favFile = `file5[${photoIndex}]`;
    setThumbnailImageId(id);
    if (!id) {
      setValue('is_favourite', favFile);
      workerPhotos.forEach((x) => {
        if (x.favourite) {
          x.favourite = 0;
        }
      });
      setThumbnailImageId(id);
      name = name && 'file_' + name.split('file')[1];
      workerPhotos
        ?.filter((photo) => photo.type !== name)
        ?.map((photo) => {
          if (photo.favourite === 1) {
            photo.favourite = 0;
          }
        });

      handleExistingPhotos(workerPhotos?.filter((photo) => photo.type !== name));
    } else {
      workerPhotos?.map((photo) => {
        if (photo.id === id) photo.favourite = 1;
        else photo.favourite = 0;
      });
      handleExistingPhotos(workerPhotos);
    }
  };

  const handleBlobThumbnail = (id: number | undefined, image: UploadPhotos, photoIndex: number) => {
    const updatedPhotos = uploadedImagesURL.map((item) => {
      if (item.name === image.name) {
        return { ...item, isFavorite: true };
      } else {
        return { ...item, isFavorite: false };
      }
    });
    setUploadedImagesURL(updatedPhotos);
    const favFile = `file5[${photoIndex}]`;
    setThumbnailImageId(id);
    image.isFavorite = true;
    image.name = favFile;
    image.id = undefined;
    setValue('is_favourite', favFile);
    setValue('favFileIndex', photoIndex);
  };

  const handleUploadPhotos = useCallback(
    (values: VerificationFormStep5TypeV2) => {
      const imageUrls: UploadPhotos[] = [];
      const favFile = Number(values.is_favourite?.split('[')[1].split(']')[0]);
      const filteredFiles = values.file5?.filter((x) => x !== null);
      if (filteredFiles) {
        filteredFiles.forEach((data, index) => {
          if (data) {
            if (VideoAcceptType.find((x) => data.name?.includes('.' + x))) {
              imageUrls.push({
                photoURL: 'video-' + URL.createObjectURL(data),
                name: `file5[${index}]`
              });
            } else if (thumbnailImageId === undefined) {
              // const favFileIndex = index + existingPhotos.length;
              imageUrls.push({
                photoURL: URL.createObjectURL(data),
                name: `file5[${index}]`,
                cords: (values.cords5 && values.cords5[index]) || '',
                isFavorite: favFile === index ? true : false,
                is_favourite: values.is_favourite ? values.is_favourite : 'file5[0]'
              });
            } else {
              imageUrls.push({
                photoURL: URL.createObjectURL(data),
                name: `file5[${index}]`,
                cords: (values.cords5 && values.cords5[index]) || '',
                isFavorite: values.isFavorite && index === 0 && thumbnailImageId === undefined ? true : false,
                is_favourite: values.is_favourite ? values.is_favourite : 'file5[0]'
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

  const handleExistingPhotos = useCallback((photos: WorkerPhotos[]) => {
    photos?.sort(sortExistingPhotos);
    const existedPhoto = photos
      ?.filter((photo) => !photo.is_document)
      ?.map((photo, index) => {
        if (photo.id)
          return {
            id: photo.id,
            name: `file5Existing[${index}]`,
            photoURL: photo.link,
            cords: photo.cords,
            isFavorite: photo.favourite === 1,
            file_id: photo.file_id
          };
        else {
          return {
            id: photo.id,
            name: `file${index}`,
            photoURL: photo.link,
            cords: photo.cords,
            isFavorite: photo.favourite === 1
          };
        }
      });
    setExistingPhotos(existedPhoto);
    setValue('file5Existing', existedPhoto);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleExistingPhotos(workerPhotos);
  }, [handleExistingPhotos, workerPhotos]);

  useEffect(() => {
    setThumbnailImageId(workerPhotos.filter((x) => x.favourite === 1)[0]?.id);
  }, [workerPhotos]);

  const handleCancel = () => {
    setValue('cords5', null);
    setUploadedImagesURL([]);
    handleExistingPhotos(workerPhotos);
  };

  const hasChanges = () => {
    const cordsChanged = workerPhotos.some((photo, index) => {
      return photo.cords !== values.file5Existing[index]?.cords;
    });
    return cordsChanged || values?.file5 || (thumbnailImageId === undefined && (values.file5?.length || values.file5Existing?.length))
      ? true
      : false;
  };

  useEffect(() => {
    if (isUpdated) {
      setUploadedImagesURL([]);
      handelChangedIsUpdated ? handelChangedIsUpdated() : '';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdated]);

  return (
    <>
      <UploadMultiplePhotos>
        {!isEdit ? (
          <Box paddingBottom={4} pt={4}>
            <UIPhotosHeader variant="h3" sx={{ color: 'text.secondary' }}>
              <FormattedMessage id="UploadPhotos" />
            </UIPhotosHeader>
            <UINewTypography marginTop={1.5} display="flex" justifyContent="center" lineHeight="160%">
              <FormattedMessage id="UploadHighQualilty" />
            </UINewTypography>
          </Box>
        ) : (
          !isSmDown && (
            <Box paddingBottom={4} pt={4}>
              <UINewTypography variant="h2" sx={{ color: 'text.secondary' }}>
                <FormattedMessage id="ModifyPhotos" />
              </UINewTypography>
            </Box>
          )
        )}
        <ModelMultiplePhotoItem>
          <UploadItem>
            <UploadPhotostext color="text.secondary">
              <FormattedMessage id="UploadPics" />
            </UploadPhotostext>
          </UploadItem>
          <GalleryMainContainer>
            <UploadGalleryPhotos
              errors={errors}
              touched={touched}
              name="file"
              setValue={setValue}
              accept="image/jpeg,image/png,image/jpg,image/avif,image/webp, image/bmp,image/svg,video/mp4,video/MP4,video/quicktime,video/avi"
              values={values}
              handleUploadPhotos={handleUploadPhotos}
            />
            <ModelMultiplePhotoSubBox>
              {(values.file5Existing.length > 0 || values.file5) && (
                <UINewTypography variant="h6">
                  <FormattedMessage id="Gallery" />
                </UINewTypography>
              )}
              <ModelMultipleBoxContainer>
                {[...existingPhotos, ...uploadedImagesURL]?.map((photo, index) => {
                  return (
                    <PhotoItem
                      handleModelApiChange={handleModelApiChange}
                      values={values}
                      key={index}
                      token={token}
                      image={photo}
                      isEdit={false}
                      isFeaturePhoto={photo.isFavorite ?? false}
                      thumbnailImageId={thumbnailImageId}
                      height={height}
                      width={width}
                      setValue={setValue}
                      removeImage={removeImage}
                      handleChangeFile5Cords={handleChangeFile5Cords}
                      handleClickThumbnailImageId={handleClickThumbnailImageId}
                      handleBlobThumbnail={handleBlobThumbnail}
                      index={index}
                      existingPhotos={existingPhotos}
                    />
                  );
                })}
              </ModelMultipleBoxContainer>
            </ModelMultiplePhotoSubBox>
          </GalleryMainContainer>
        </ModelMultiplePhotoItem>
      </UploadMultiplePhotos>
      {isEdit && (
        <UploadMultipleBox pt={13}>
          <UIThemeButton
            onClick={handleCancel}
            disabled={!hasChanges()}
            variant={!hasChanges() ? 'contained' : 'outlined'}
            sx={{ px: '20px', py: '9px' }}
          >
            <UINewTypography variant="body">
              <FormattedMessage id="CancelChanges" />
            </UINewTypography>
          </UIThemeButton>
          <StyleButtonV2
            id="photos-button"
            type="submit"
            variant="contained"
            loading={loading}
            disabled={!hasChanges()}
            sx={{ px: '10px', py: '9px' }}
          >
            <UINewTypography variant="body">
              <FormattedMessage id="Save" />
            </UINewTypography>
          </StyleButtonV2>
        </UploadMultipleBox>
      )}
      <ImageDeleteWarning
        open={imageWarningOpen}
        onClose={handleImageWarningClose}
        handleSubmit={handlePhotoSubmit}
        values={values}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default memo(ModelMultiplePhoto);
