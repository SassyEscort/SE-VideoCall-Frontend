'use client';

import { useMemo, useCallback, useEffect, memo, useState, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IKUpload } from 'imagekitio-react';
import { FormikErrors, FormikTouched } from 'formik';
import { DragAndDropMultipleImageCloseButton } from './DragAndDropMultipleImage.styled';
import UINewTypography from '../UINewTypography';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';

export type UploadFileControlType = {
  errors: string | undefined;
  value: File | string;
  setValue: (field: string, value: File | null, shouldValidate?: boolean | undefined) => Promise<void | FormikErrors<any | any>>;
  withoutFilterImageTouched?: FormikTouched<any>;
  touched?: FormikTouched<{
    file1: File | null;
  }>;
  setFieldTouched: (field: string, val: boolean) => void;
  name: string;
  accept?: string;
  modelDetails: ModelDetailsResponse | undefined;
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
  modelDetails,
  withoutFilterImageTouched,
  title
}: UploadFileControlType) => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isXSScreen = useMediaQuery(theme.breakpoints.down(330));
  const docLink = modelDetails?.documents
    ?.filter((x) => x.link !== 'null' || x.link !== null)
    ?.map((x) => x.link)
    ?.join('');

  const [uploadedFileURL, setUploadedFileURL] = useState(docLink !== 'null' ? docLink : '');
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [isPDF, setIsPDF] = useState(false);
  const dropAreaId = useMemo(() => name + '_dropable', [name]);

  const preventDefaults = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
  };

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
        const fileURL = URL.createObjectURL(file);
        setIsPDF(file.type === 'application/pdf');
        setUploadedFileURL(fileURL);
        setUploadedFileName(file.name);
        setValue(name, file);
      }
    },
    [name, setFieldTouched, setValue, validateFile]
  );

  const handleSelect = async (file: File) => {
    setFieldTouched(name, true);
    const fileURL = URL.createObjectURL(file);
    setIsPDF(file.type === 'application/pdf');
    setUploadedFileURL(fileURL);
    setUploadedFileName(file.name);
    setValue(name, file);
  };

  const handleRemoveFile = () => {
    setUploadedFileURL('');
    setUploadedFileName('');
    setIsPDF(false);
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
      {uploadedFileURL && (
        <Box sx={{ position: 'relative' }}>
          <DragAndDropMultipleImageCloseButton size="small" onClick={handleRemoveFile}>
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
          width: isXSScreen ? '290px' : isSmDown ? '363px' : '390px',
          borderRadius: '8px',
          overflow: 'hidden',

          ...(uploadedFileURL
            ? {
                backgroundImage: !isPDF ? `url(${uploadedFileURL})` : 'none',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: isPDF ? '#232027' : 'none'
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
          {uploadedFileURL ? (
            isPDF ? (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  gap: '8px'
                }}
              >
                <Box component="img" src="/images/icons/pdf-icon.svg" sx={{ height: '64px', width: '64px' }} />
                <UINewTypography variant="bodySmall">{uploadedFileName}</UINewTypography>
              </Box>
            ) : (
              <></>
            )
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
