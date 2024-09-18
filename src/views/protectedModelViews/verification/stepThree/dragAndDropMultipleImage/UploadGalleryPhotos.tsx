'use client';
import { useMemo, useCallback, useEffect, memo, useState } from 'react';
import { IKUpload } from 'imagekitio-react';
import { FormikErrors, FormikTouched } from 'formik';
import { DragAndDropImageMainContainer, DragAndDropImageNoImageBox } from './DragAndDropMultipleImage.styled';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import { VideoAcceptType } from 'constants/workerVerification';
import { RiUpload2Line } from 'components/common/customRemixIcons';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { VerificationFormStep5TypeV2 } from '../uploadImage';
import { FormattedMessage, useIntl } from 'react-intl';

export type UploadFileControlType = {
  setValue: (
    field: string,
    value: string[] | File | File[] | null,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<VerificationFormStep5TypeV2>>;
  name: string;
  accept?: string;
  values?: VerificationFormStep5TypeV2;
  handleUploadPhotos: (values: VerificationFormStep5TypeV2) => void;
  errors: FormikErrors<VerificationFormStep5TypeV2>;
  touched: FormikTouched<VerificationFormStep5TypeV2>;
};

const UploadGalleryPhotos = ({ setValue, name, accept, values, handleUploadPhotos, errors, touched }: UploadFileControlType) => {
  const intl = useIntl();
  const fileNullError = errors.file5?.startsWith('file5');
  const [uploadedFiles, setUploadedFiles] = useState<VerificationFormStep5TypeV2>();

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
      if (accept.includes('*') || VideoAcceptType.find((x) => accept.includes(x))) {
        if (accept.split('/')[0] === type.split('/')[0]) return true;
        if (VideoAcceptType.find((x) => x === type.split('/')[1])) return true;
      }
      return false;
    },
    [accept]
  );

  const handleSelect = useCallback(
    (arrFiles: File[]) => {
      const data = { ...values! };
      arrFiles.forEach((file) => {
        if (!data.file5) {
          data.file5 = [];
        }
        if ([...data.file5, ...data.file5Existing].filter((x) => x !== undefined || x !== null).length <= 30) {
          data.file5.push(file);
        }
      });

      setUploadedFiles(data);
    },
    [values]
  );

  const handleDrop = useCallback(
    (e: DragEvent) => {
      unhighlight();
      const dt = e.dataTransfer;
      if (dt && dt.files && dt.files.length) {
        const files = Array.from(e.dataTransfer.files);
        const invalidFilesIndexes: number[] = [];
        let finalFiles: File[] = [];
        files.forEach((file, index) => {
          if (!validateFile(file.type)) {
            invalidFilesIndexes.push(index);
          } else {
            finalFiles.push(file);
          }
        });

        if (invalidFilesIndexes.length) {
          finalFiles = files.filter((file, index) => !invalidFilesIndexes.includes(index));
          toast.warning(intl.formatMessage({ id: 'ValidFileType' }));
        }
        handleSelect(finalFiles);
      }
    },
    [handleSelect, intl, unhighlight, validateFile]
  );

  useEffect(() => {
    if (values) setUploadedFiles({ ...values });
  }, [values]);

  useEffect(() => {
    if (uploadedFiles?.file5?.length) setValue('file5', uploadedFiles.file5 as File[]);
    if (uploadedFiles) handleUploadPhotos(uploadedFiles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadedFiles, setValue]);

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
    <Box pt="24px">
      <DragAndDropImageMainContainer id={name + '_dropable'}>
        <IKUpload
          multiple
          type="file"
          id={name}
          name={name}
          publicKey={process.env.NEXT_PUBLIC_IMAGE_KIT_KEY}
          urlEndpoint={process.env.NEXT_PUBLIC_IMAGE_KIT_URL}
          useUniqueFileName={false}
          onChange={(e) => {
            if (e.target.files && e.target.files.length) {
              const arrFiles = Array.from(e.target.files);
              handleSelect(arrFiles);
            }
          }}
          accept={accept}
          style={{
            opacity: 0,
            position: 'absolute',
            zIndex: 1,
            height: '100%',
            width: '100%',
            cursor: 'pointer'
          }}
        />
        <DragAndDropImageNoImageBox>
          <>
            <RiUpload2Line style={{ height: 64, width: 64 }} />
            <UINewTypography variant="buttonLargeBold" color="primary.400">
              <FormattedMessage id="Drag" /> &amp; <FormattedMessage id="Drop" />{' '}
              <UINewTypography variant="buttonLargeBold" color="text.primary">
                <FormattedMessage id="ToUpload" />
              </UINewTypography>
            </UINewTypography>
          </>
        </DragAndDropImageNoImageBox>
      </DragAndDropImageMainContainer>
      {errors && touched.file5 && errors.file5 && (
        <UINewTypography variant="bodySmall" color={'error.main'} className="Mui-error">
          {fileNullError ? <FormattedMessage id="PleaseUpload" /> : errors.file5}
        </UINewTypography>
      )}
    </Box>
  );
};

export default memo(UploadGalleryPhotos);
