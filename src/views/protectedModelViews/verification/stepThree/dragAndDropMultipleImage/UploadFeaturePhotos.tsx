import { useMemo, useCallback, useEffect, memo, useState } from 'react';
import { IKUpload } from 'imagekitio-react';
import { FormikErrors, FormikTouched } from 'formik';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import { RiUpload2Line } from 'components/common/customRemixIcons';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { DragAndDropImageMainContainer, DragAndDropImageNoImageBox } from './DragAndDropMultipleImage.styled';
import { VerificationFormStep5TypeV2 } from '../uploadImage';

export type UploadFileControlType = {
  setValue: (
    field: string,
    value: string[] | File | File[] | null,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<VerificationFormStep5TypeV2>>;
  name: string;
  accept?: string;
  errors: FormikErrors<VerificationFormStep5TypeV2>;
  touched?: FormikTouched<VerificationFormStep5TypeV2>;
  values?: VerificationFormStep5TypeV2;
  handleUploadPhotos: (values: VerificationFormStep5TypeV2) => void;
};

const UploadFeaturePhotos = ({ setValue, name, accept, errors, touched, values, handleUploadPhotos }: UploadFileControlType) => {
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
      if (accept.includes('*')) {
        if (accept.split('/')[0] === type.split('/')[0]) return true;
      }
      return false;
    },
    [accept]
  );

  const handleSelect = useCallback(
    (arrFiles: File[]) => {
      const data = { ...values! };

      arrFiles.forEach((file) => {
        if (!data?.file1) data.file1 = file;
        else if (!data.file2) data.file2 = file;
        else if (!data.file3) data.file3 = file;
        else if (!data.file4) data.file4 = file;
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
          toast.warning('ValidFileType');
        }

        handleSelect(finalFiles);
      }
    },
    [handleSelect, unhighlight, validateFile]
  );

  useEffect(() => {
    if (values) setUploadedFiles({ ...values });
  }, [values]);

  useEffect(() => {
    if (uploadedFiles?.file1) setValue('file1', uploadedFiles.file1 as File);
    if (uploadedFiles?.file2) setValue('file2', uploadedFiles.file2 as File);
    if (uploadedFiles?.file3) setValue('file3', uploadedFiles.file3 as File);
    if (uploadedFiles?.file4) setValue('file4', uploadedFiles.file4 as File);
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
    <Box>
      <DragAndDropImageMainContainer
        id={name + '_dropable'}
        className={errors.file1 || errors.file2 || errors.file3 || errors.file4 ? 'error' : ''}
      >
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
              Drag &amp; Drop
              <UINewTypography variant="buttonLargeBold" color="text.primary">
                ToUploadFeaturePhotos
              </UINewTypography>
            </UINewTypography>
          </>
        </DragAndDropImageNoImageBox>
      </DragAndDropImageMainContainer>
      {errors && touched && (errors.file1 || errors.file2 || errors.file3 || errors.file4) && (
        <UINewTypography variant="bodySmall" color={'error.main'}>
          FourPhotoRequired
        </UINewTypography>
      )}
    </Box>
  );
};

export default memo(UploadFeaturePhotos);
