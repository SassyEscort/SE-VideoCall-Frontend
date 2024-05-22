'use client';

import { useMemo, useCallback, useEffect, memo, useState, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IKUpload } from 'imagekitio-react';
import { FormikErrors, FormikTouched } from 'formik';
import { DragAndDropMultipleImageCloseButton } from './DragAndDropMultipleImage.styled';
import UINewTypography from '../UINewTypography';

export type UploadFileControlType = {
  errors: string | undefined;
  value: File;
  setValue: (field: string, value: File | null, shouldValidate?: boolean | undefined) => Promise<void | FormikErrors<any | any>>;
  withoutFilterImageTouched?: FormikTouched<any>;
  touched?: FormikTouched<{
    file1: File | null;
  }>;
  setFieldTouched: (field: string, val: boolean) => void;
  name: string;
  accept?: string;
  workerPhotos: any[];
  title?: string;
};

const DragAndDropV2 = ({
  setValue,
  setFieldTouched,
  value,
  name,
  accept,
  errors,
  touched,
  workerPhotos,
  withoutFilterImageTouched,
  title
}: UploadFileControlType) => {
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [uploadedImageURL, setUploadedImageURL] = useState('');
  const dropAreaId = useMemo(() => name + '_dropable', [name]);
  // const dynamicImageHeight = uploadedImageURL ? '308px' : '308px';
  // const dynamicImageHeightResponsive = uploadedImageURL ? '390px' : '390px';

  const preventDefaults = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    workerPhotos?.map((image) => {
      if (image.type === 'file_1' && name === 'file1') {
        setUploadedImageURL(image.photo);
      }
      if (image.type === 'file_2' && name === 'file2') {
        setUploadedImageURL(image.photo);
      }
      if (image.type === 'file_3' && name === 'file3') {
        setUploadedImageURL(image.photo);
      }
      if (image.type === 'file_4' && name === 'file4') {
        setUploadedImageURL(image.photo);
      }
      if (image.type === 'Regular' && name === 'photoWithoutFilter') {
        setUploadedImageURL(image.photo);
      }
    });
  }, [name, workerPhotos]);

  const highlight = useCallback(() => {
    const dropArea = document.getElementById(dropAreaId);
    if (dropArea) dropArea.classList.add('highlight');
  }, [dropAreaId]);

  const unhighlight = useCallback(() => {
    const dropArea = document.getElementById(dropAreaId);
    if (dropArea) dropArea.classList.remove('highlight');
  }, [dropAreaId]);

  const validateFile = useCallback(
    (type: string) => {
      if (!accept) return true;
      if (type === accept) return true;
      if (accept.includes('*')) {
        if (accept.split('/')[0] === type.split('/')[0]) return true;
      }
      return false;
    },
    [accept]
  );

  const handleDrop = useCallback(
    (e: DragEvent) => {
      setFieldTouched(name, true);
      const dt = e.dataTransfer;
      if (dt && dt.files && dt.files.length) {
        const file = dt.files[0];
        if (!validateFile(file.type)) {
          setValue(name, null);
          return;
        }
        const imageURL = URL.createObjectURL(file);
        setUploadedImageURL(imageURL);
        setValue(name, file);
      }
    },
    [name, setFieldTouched, setValue, validateFile]
  );

  const handleSelect = async (file: File) => {
    setFieldTouched(name, true);
    const imageURL = URL.createObjectURL(file);
    setUploadedImageURL(imageURL);
    setValue(name, file);
  };

  const handleRemoveImage = () => {
    setUploadedImageURL('');
    setFieldTouched(name, true);
    setValue(name, null);
  };

  useEffect(() => {
    const dropArea = document.getElementById(dropAreaId);
    if (dropArea) {
      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
        dropArea.addEventListener(eventName, preventDefaults, false);
      });
      ['dragenter', 'dragover'].forEach((eventName) => {
        dropArea.addEventListener(eventName, highlight, false);
      });
      ['dragleave', 'drop'].forEach((eventName) => {
        dropArea.addEventListener(eventName, unhighlight, false);
      });
      dropArea.addEventListener('drop', handleDrop, false);
    }
  }, [dropAreaId, handleDrop, highlight, unhighlight]);

  return (
    <Box>
      {uploadedImageURL && (
        <Box sx={{ position: 'relative' }}>
          <DragAndDropMultipleImageCloseButton size="small" onClick={handleRemoveImage}>
            <Box component="img" src="/images/home/close-icon.svg" />
          </DragAndDropMultipleImageCloseButton>
        </Box>
      )}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '308px',
          width: '390px',
          borderRadius: '8px',
          overflow: 'hidden',

          ...(uploadedImageURL
            ? {
                backgroundImage: `url(${uploadedImageURL})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }
            : {
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  border: '4px dashed',
                  top: '-1px',
                  bottom: '-1px',
                  left: '-1px',
                  right: '-1px',
                  borderRadius: '12px',
                  borderColor: errors && (touched || withoutFilterImageTouched?.photoWithoutFilter) ? 'error.main' : '#86838A'
                },
                cursor: 'pointer'
              })
        }}
        id={name + '_dropable'}
      >
        <IKUpload
          id={name}
          name={name}
          publicKey={process.env.NEXT_PUBLIC_IMAGE_KIT_KEY}
          urlEndpoint={process.env.NEXT_PUBLIC_IMAGE_KIT_URL}
          fileName={value && value.name ? value.name : 'my-upload'}
          useUniqueFileName={false}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.files && e.target.files.length) {
              handleSelect(e.target.files[0]);
            }
          }}
          accept={accept}
          style={{ display: 'none' }}
        />

        <Box
          htmlFor={name}
          component="label"
          sx={{
            width: '100%',
            display: 'flex',
            height: '100%',
            padding: '24px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            gap: '12px',
            cursor: 'pointer'
          }}
        >
          {uploadedImageURL ? (
            <Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                borderRadius="16px 0px"
                height="100%"
                width="100%"
                gap="8px"
              />
            </Box>
          ) : (
            <>
              <Box component="img" src="/images/home/upload.png" sx={{ height: '64px', width: '64px' }} />

              <Box
                sx={{
                  width: '100%',
                  maxWidth: '390px',
                  height: '38px',
                  textAlign: 'center'
                }}
              >
                <UINewTypography variant="buttonLargeBold" sx={{ color: '#FF68C0' }}>
                  Drag &amp; Drop{' '}
                  <Box component="span" sx={{ color: '#B7B5B9' }}>
                    To
                  </Box>
                </UINewTypography>
                <UINewTypography variant="buttonLargeBold">{title} Upload</UINewTypography>
              </Box>
            </>
          )}
        </Box>
      </Box>
      {errors && (touched || withoutFilterImageTouched?.photoWithoutFilter) && (
        <Typography variant="bodySmall" color={'error.main'}>
          {errors}
        </Typography>
      )}
    </Box>
  );
};

export default memo(DragAndDropV2);
