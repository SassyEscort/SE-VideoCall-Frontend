import { Formik } from 'formik';
import Box from '@mui/material/Box';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';
import UINewTypography from 'components/UIComponents/UINewTypography';
import * as Yup from 'yup';
import WorkerPhotosWithoutFilterNew from './WorkerPhotosWithoutFilterNew';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { LastBoxContainer, LastMainBox, StepButtonNext } from './LastStepPromise.styled';
import { FormattedMessage } from 'react-intl';
import { VerificationStepService } from 'services/modelAuth/verificationStep.service';
import { toast } from 'react-toastify';
import { ErrorMessage, MAX_FILE_SIZE, SUPPORTED_FORMATS } from 'constants/common.constants';
import VerificationStep2Instruction from './VerificationStep2Instruction';
import { DocumentDataPhoto, ModelDetailsResponse } from '../verificationTypes';
import { TokenIdType } from '..';
import { useMemo, useState } from 'react';
import { ImagePayload, ImageUploadPayload } from '../stepThree/uploadImage';
import { VerificationStepSecond } from 'services/modelAuth/types';
import { DOCUMENT_UPLOAD_TYPE, DocumentList } from 'constants/workerVerification';
import { scrollToError } from 'utils/scrollUtils';
import { BackButtonBox, VerificationButtonText } from '../verificationStep2/VerificationStep2.styled';

export type VerificationPhotoWithoutFilter = {
  photoWithoutFilter: File | string;
  photoWithoutFilterFront: File | string;
  photoWithoutFilterBack: File | string;
};

export type VerificationStepPromiseType = {
  activeStep: number;
  modelDetails: ModelDetailsResponse | undefined;
  handlePrev?: () => void;
  handleNext?: () => void;
  token: TokenIdType;
  handleDocuPrev?: () => void;
  handleModelApiChange: () => void;
  docValues: VerificationStepSecond;
  isReviewEdit: boolean;
  handleEdit?: (step: number) => void;
  isDashboard: boolean;
};

export type DocumentUploadPayload = {
  id: number;
  link: string;
  type: string;
  cords: string;
  is_favourite: number;
  is_document: number;
  document_type: string;
  document_number: string;
  photosURL?: string;
};
export interface DocumentImagePayload {
  is_document: boolean;
  document_upload_step: boolean;
  photos: DocumentUploadPayload[];
}

const VerificationStepPromise = ({
  activeStep,
  handlePrev,
  handleNext,
  token,
  modelDetails,
  handleDocuPrev,
  handleModelApiChange,
  docValues,
  isReviewEdit,
  handleEdit,
  isDashboard
}: VerificationStepPromiseType) => {
  const [loading, setLoading] = useState(false);

  const validationSchema = (docValues: VerificationStepSecond) => {
    const baseValidation = Yup.mixed()
      .required('Please upload your document')
      .test('fileSize', 'File size is too large', (value) => {
        if (typeof value === 'string') return true;
        return value && (value as File).size <= MAX_FILE_SIZE;
      })
      .test('fileFormat', 'Unsupported Format', (value) => {
        if (typeof value === 'string') return true;
        return value && SUPPORTED_FORMATS.includes((value as File).type);
      });

    return Yup.object().shape({
      ...(docValues?.idType === DOCUMENT_UPLOAD_TYPE.PASSPORT
        ? {
            photoWithoutFilter: baseValidation
          }
        : {
            photoWithoutFilterFront: baseValidation,
            photoWithoutFilterBack: baseValidation
          })
    });
  };
  const schema = validationSchema(docValues);

  const modelDocuments = useMemo(() => {
    if (modelDetails?.documents?.length) return modelDetails.documents[0];
    else return {} as DocumentDataPhoto;
  }, [modelDetails]);

  const modelDoc = useMemo(() => {
    if (modelDetails?.documents?.length) return modelDetails.documents[1];
    else return {} as DocumentDataPhoto;
  }, [modelDetails]);

  const initialValues: VerificationPhotoWithoutFilter = {
    photoWithoutFilter: modelDocuments?.link && modelDocuments.document_type === DOCUMENT_UPLOAD_TYPE.PASSPORT ? modelDocuments.link : '',
    photoWithoutFilterFront: modelDocuments?.link && modelDocuments.document_front_side ? modelDocuments.link : '',
    photoWithoutFilterBack: modelDoc?.link && !modelDoc.document_front_side ? modelDoc.link : ''
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={async (values) => {
        try {
          let payload: ImagePayload;
          setLoading(true);
          if (values.photoWithoutFilter) {
            const mutationImageUpload = await VerificationStepService.imageKitUplaodApi(values.photoWithoutFilter as File);
            const selectedDocument = DocumentList.find((item) => item.key === docValues.idType)?.value;
            payload = {
              is_document: true,
              photos: [
                {
                  id: modelDetails?.documents[0].id ? Number(modelDetails?.documents[0].id) : 0,
                  link: typeof mutationImageUpload !== 'string' ? String(mutationImageUpload.photosURL) : '',
                  type: mutationImageUpload.file_type,
                  cords: '',
                  is_favourite: 0,
                  is_document: 1,
                  document_type: String(selectedDocument) ?? modelDetails?.documents[0].document_type,
                  document_number: docValues.idNumber ? docValues.idNumber : modelDetails?.documents[0].document_number ?? '',
                  file_id: mutationImageUpload.file_id,
                  file_type: mutationImageUpload.file_type === 'non-image' ? 'Non_Image' : 'Image',
                  document_front_side: 0
                }
              ],
              document_upload_step: true
            };
          } else {
            const allFiles = [values.photoWithoutFilterFront, values.photoWithoutFilterBack];
            const fileBody = [
              {
                type: 'file5',
                file: allFiles as File[]
              }
            ];

            const mutationMultipleImageUpload = await VerificationStepService.multipleImageKitUplaodApi(fileBody);
            const selectedDocument = DocumentList.find((item) => item.key === docValues.idType)?.value;

            const uploadPhotos: ImageUploadPayload[] = [];
            mutationMultipleImageUpload.uploadPhotos.forEach((x, i) => {
              if (x.link !== null)
                uploadPhotos.push({
                  id: modelDetails?.documents[0].id ? Number(modelDetails?.documents[0].id) : 0,
                  link: x.link,
                  type: x.type,
                  cords: '',
                  is_favourite: 0,
                  is_document: 1,
                  document_type: String(selectedDocument) ?? modelDetails?.documents[0].document_type,
                  document_number: docValues.idNumber ? docValues.idNumber : modelDetails?.documents[0].document_number ?? '',
                  file_id: x.file_id,
                  file_type: x.file_type === 'non-image' ? 'Non_Image' : 'Image',
                  document_front_side: i === 0 ? 1 : 0
                });
            });

            payload = {
              is_document: true,
              photos: uploadPhotos,
              document_upload_step: true
            };
          }

          const response = await VerificationStepService.uploadModelPhotos(payload, token);
          if (response?.data) {
            handleModelApiChange();
            if (isReviewEdit && handleEdit) {
              handleEdit(4);
            } else if (handleNext) {
              handleNext();
            }
          } else {
            toast.error(response?.message);
          }
        } catch (error) {
          toast.error(ErrorMessage);
        } finally {
          setLoading(false);
        }
      }}
    >
      {({ values, errors, setFieldTouched, setFieldValue, handleSubmit, touched }) => (
        <>
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
              scrollToError('.Mui-error');
            }}
            id="profile-from"
          >
            <Box
              sx={{
                textAlign: 'center',
                marginTop: 4,
                gap: 4,
                color: 'text.secondary'
              }}
            >
              <Box display="flex" gap={1.5} flexDirection="column">
                {!isDashboard && (
                  <UINewTypography variant="h2">
                    <FormattedMessage id="PleaseUploadYourDocuments" />
                  </UINewTypography>
                )}
                <UINewTypography color="secondary.200">
                  <FormattedMessage id="UploadID" />
                </UINewTypography>
              </Box>
            </Box>
            {docValues.idType !== DOCUMENT_UPLOAD_TYPE.PASSPORT ? (
              <Box display="flex" gap={6} justifyContent="center" flexDirection={isDashboard ? 'column' : 'row'}>
                <WorkerPhotosWithoutFilterNew
                  name="photoWithoutFilterFront"
                  value={values.photoWithoutFilterFront as File}
                  setValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                  touched={touched}
                  errors={errors.photoWithoutFilterFront}
                  accept="image/jpeg,image/png,image/jpg,image/bmp,application/pdf"
                  handleNext={handleSubmit}
                  activeStep={activeStep}
                  modelDetails={modelDetails}
                  title="ID front"
                />
                <WorkerPhotosWithoutFilterNew
                  name="photoWithoutFilterBack"
                  value={values.photoWithoutFilterBack as File}
                  setValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                  touched={touched}
                  errors={errors.photoWithoutFilterBack}
                  accept="image/jpeg,image/png,image/jpg,image/bmp,application/pdf"
                  handleNext={handleSubmit}
                  activeStep={activeStep}
                  modelDetails={modelDetails}
                  title="ID back"
                />
              </Box>
            ) : (
              <WorkerPhotosWithoutFilterNew
                name="photoWithoutFilter"
                value={values.photoWithoutFilter as File}
                setValue={setFieldValue}
                setFieldTouched={setFieldTouched}
                touched={touched}
                errors={errors.photoWithoutFilter}
                accept="image/jpeg,image/png,image/jpg,image/bmp,application/pdf"
                handleNext={handleSubmit}
                activeStep={activeStep}
                modelDetails={modelDetails}
                title="ID"
              />
            )}

            <LastMainBox>
              <StepButtonNext>
                <BackButtonBox>
                  {!isDashboard && (
                    <UIThemeButton variant="outlined" onClick={handleDocuPrev}>
                      <ArrowBackIcon />
                      <VerificationButtonText variant="buttonLargeBold" color="text.secondary">
                        <FormattedMessage id="Back" />
                      </VerificationButtonText>
                    </UIThemeButton>
                  )}
                </BackButtonBox>

                <StyleButtonV2 id="document-id-button" type="submit" variant="contained" loading={loading}>
                  <UINewTypography variant="body">
                    {isReviewEdit && !isDashboard ? (
                      <FormattedMessage id="SaveAndReview" />
                    ) : isDashboard ? (
                      <FormattedMessage id="Save" />
                    ) : (
                      <FormattedMessage id="Next" />
                    )}
                  </UINewTypography>
                  {!isDashboard && <ArrowForwardOutlinedIcon />}
                </StyleButtonV2>
              </StepButtonNext>
            </LastMainBox>

            <LastBoxContainer>
              <VerificationStep2Instruction />
            </LastBoxContainer>
          </Box>
        </>
      )}
    </Formik>
  );
};

export default VerificationStepPromise;
