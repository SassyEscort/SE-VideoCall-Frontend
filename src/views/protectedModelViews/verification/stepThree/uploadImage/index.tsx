import { Formik } from 'formik';
import Box from '@mui/material/Box';
import { RiArrowLeftLine, RiArrowRightLine } from 'components/common/customRemixIcons';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import ModelMultiplePhoto from './ModelMultiplePhoto';
import { UploadBox, UploadMultipleBox } from './UploadMultiplePhoto.styled';
import { FileBody } from '../../verificationTypes';
import { VerificationStepService } from 'services/modelAuth/verificationStep.service';
import { toast } from 'react-toastify';
import { TokenIdType } from '../..';
import { PHOTO_TYPE } from 'constants/workerVerification';
import { ErrorMessage, MAX_FILE_SIZE } from 'constants/common.constants';
import { FormattedMessage } from 'react-intl';
import { useState } from 'react';
import * as Yup from 'yup';

export type WorkerPhotos = {
  id: number;
  link: string;
  type: string;
  cords: string;
  favourite: number;
  is_document: number;
  document_type: string;
  document_number: null;
  photo?: string;
  photoURL?: string;
};

export type ImageUploadPayload = {
  id?: number;
  link: string;
  type: string;
  cords: string;
  is_favourite: number | string;
  is_document: number;
  document_type: string;
  document_number: null | number;
  photosURL?: string;
};

export type PhotoUpload = {
  link: string;
  type: string;
  cords: string;
  is_favourite: number;
  is_document: number;
  document_type: string;
  document_number: null;
  photo: string;
};

export type VerificationFormStep5TypeV2 = {
  file5: File[] | null;
  cords5?: string[] | null;
  file5Existing: WorkerPhotos[];
  isFavorite?: string;
  is_favourite?: string;
};

export type VerificationStepUploadType = {
  workerPhotos: WorkerPhotos[];
  handleNext: () => void;
  handlePrevVerificationStep?: () => void;
  token: TokenIdType;
  handleModelApiChange: () => void;
  isEdit: boolean;
};

export interface ImagePayload {
  is_document: boolean;
  document_upload_step: boolean;
  photos: ImageUploadPayload[];
}

export type ThumbnailPayload = {
  model_photo_id: number;
};

const UploadImage = ({
  workerPhotos,
  handleNext,
  handlePrevVerificationStep,
  token,
  handleModelApiChange,
  isEdit
}: VerificationStepUploadType) => {
  const [loading, setLoading] = useState(false);

  const initialValuesPerStep: VerificationFormStep5TypeV2 = {
    file5: null as null | File[],
    cords5: null as null | string[],
    file5Existing: workerPhotos || ([] as WorkerPhotos[]),
    isFavorite: workerPhotos?.filter((x) => x.favourite === 1)[0]?.type
      ? 'file' + workerPhotos?.filter((x) => x.favourite === 1)[0]?.type?.split('_')[1]
      : 'file5[0]',
    is_favourite: 'file5[0]'
  };

  const validationSchema = Yup.object({
    file5Existing: Yup.array().default([]),
    file5: Yup.array()
      .default([])
      .when('file5Existing', (file5Existing: WorkerPhotos[][], schema) => {
        const fileSizeCheck = function (this: Yup.TestContext<Yup.AnyObject>, value: any[]) {
          const filteredFile5 = (value || []).filter((x) => x !== null);
          const invalidSizeFiles = filteredFile5.filter((file) => file && file.size >= MAX_FILE_SIZE);
          if (invalidSizeFiles.length > 0) {
            return this.createError({ message: 'Photo/video should be less than 5MB', path: 'file5' });
          }
          return true;
        };

        if (file5Existing[0] && file5Existing[0].length >= 2) {
          return schema.test('file-size-check', fileSizeCheck).notRequired();
        }
        return schema.test('file5-combined-length', function (this: Yup.TestContext<Yup.AnyObject>, value: File[]) {
          const { file5Existing } = this.parent;
          if (value && value.filter((x) => x !== null).length > 0) {
            const firstFileIndex = value.findIndex((x) => x !== null);
            const videoIndex = value.findIndex((file) => file && file.type === 'video/mp4');

            if ((videoIndex > -1 && (firstFileIndex === -1 || videoIndex < firstFileIndex)) || videoIndex === 0) {
              return this.createError({ message: 'Video cannot be uploaded for a thumbnail photo.', path: 'file5' });
            }
          }

          const filteredFile5 = (value || []).filter((x) => x !== null);
          const combinedLength = file5Existing.length + filteredFile5.length;

          const invalidSizeFiles = filteredFile5.filter((file) => file && file.size >= MAX_FILE_SIZE);
          if (invalidSizeFiles.length > 0) {
            return this.createError({ message: 'Photo/video should be less than 5MB', path: 'file5' });
          }
          if (combinedLength < 2 || combinedLength > 30) {
            return this.createError({ message: 'Please upload between 2 to 30 photos', path: 'file5' });
          }

          return true;
        });
      })
  });

  const handleSubmit = async (values: VerificationFormStep5TypeV2) => {
    setLoading(true);
    const allFiles: FileBody[] = [
      {
        type: 'file_5',
        file: values.file5 && values.file5.length > 0 ? values.file5 : [],
        cords: values.cords5 && values.cords5.length > 0 ? values.cords5 : []
      }
    ];

    const allFilesToUpload = allFiles?.filter((data) => {
      if (data) {
        if (Array.isArray(data.file)) {
          if (data.type === 'file_5') {
            const filteredFiles = (data.file as File[])?.filter((entry) => entry !== null && entry !== undefined);
            if (filteredFiles.length > 0) {
              data.file.splice(0, data.file.length, ...filteredFiles);
              return true;
            }
            return false;
          } else {
            const filteredFiles = data.file.filter((file) => file !== null);
            if (filteredFiles.length > 0) {
              data.file.splice(0, data.file.length, ...filteredFiles);
              return true;
            }
            return false;
          }
        } else {
          return data.file !== null;
        }
      }
      return false;
    });
    try {
      if (values.file5 || workerPhotos.length > 0) {
        const mutationImageUpload = await VerificationStepService.multipleImageKitUplaodApi(allFilesToUpload);
        const uploadFile5: ImageUploadPayload[] = [
          ...values.file5Existing
            .filter((x) => x !== null)
            .map((photo) => ({
              id: photo.id || 0,
              link: photo.photoURL ? photo.photoURL : photo.link,
              type: 'file_5',
              cords: photo.cords,
              is_document: 0,
              document_type: PHOTO_TYPE.MODEL_PHOTO,
              document_number: null,
              is_favourite: String(values.is_favourite)
            })),
          ...mutationImageUpload.uploadPhotos?.filter((x) => !x.is_document)
        ];

        const uploadPhotos: ImageUploadPayload[] = [];
        if (uploadFile5)
          uploadFile5.forEach((x, i) => {
            if (x.photosURL !== null)
              uploadPhotos.push({
                link: x.link ? String(x.link) : String(x.photosURL),
                type: 'file_5',
                cords: x.cords,
                is_favourite: Number(values.is_favourite?.split('[')[1].split(']')[0]) === i ? 1 : 0,
                is_document: 0,
                document_type: PHOTO_TYPE.MODEL_PHOTO,
                document_number: null
              });
          });

        const newReq = mutationImageUpload;
        newReq.uploadPhotos = uploadPhotos;

        const payload: ImagePayload = {
          is_document: false,
          document_upload_step: false,
          photos: uploadPhotos.filter((x) => x.link !== undefined)
        };

        const response = await VerificationStepService.uploadModelPhotos(payload, token);

        if (response.code === 200) {
          toast.success('Success');
          handleNext();
          handleModelApiChange();
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}
      enableReinitialize
      initialValues={initialValuesPerStep}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ values, errors, touched, setFieldValue, handleSubmit }) => (
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <Box>
            <ModelMultiplePhoto
              loading={loading}
              isEdit={isEdit}
              handleModelApiChange={handleModelApiChange}
              token={token}
              values={values}
              setValue={setFieldValue}
              errors={errors}
              touched={touched}
              workerPhotos={workerPhotos}
            />
            <UploadBox>
              {!isEdit && (
                <UploadMultipleBox>
                  <UIThemeButton onClick={handlePrevVerificationStep} variant="outlined">
                    <RiArrowLeftLine />
                    <UINewTypography variant="body">
                      <FormattedMessage id="Back" />
                    </UINewTypography>
                  </UIThemeButton>
                  <StyleButtonV2 id="photos-button" type="submit" variant="contained" loading={loading}>
                    <UINewTypography variant="body">
                      <FormattedMessage id="Next" />
                    </UINewTypography>
                    <RiArrowRightLine />
                  </StyleButtonV2>
                </UploadMultipleBox>
              )}
            </UploadBox>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default UploadImage;
