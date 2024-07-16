import { Formik } from 'formik';
import Box from '@mui/material/Box';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';
import UINewTypography from 'components/UIComponents/UINewTypography';
import * as Yup from 'yup';
import WorkerPhotosWithoutFilterNew from './WorkerPhotosWithoutFilterNew';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import { LastMainBox, StepButtonNext } from './LastStepPromise.styled';
import { FormattedMessage } from 'react-intl';
import { VerificationStepService } from 'services/modelAuth/verificationStep.service';
import { toast } from 'react-toastify';
import { ErrorMessage, MAX_FILE_SIZE, SUPPORTED_FORMATS } from 'constants/common.constants';
import VerificationStep2Instruction from './VerificationStep2Instruction';
import { DocumentDataPhoto, ModelDetailsResponse } from '../verificationTypes';
import { TokenIdType } from '..';
import { useMemo, useState } from 'react';
import { ImagePayload } from '../stepThree/uploadImage';
import { VerificationStepSecond } from 'services/modelAuth/types';
import { DocumentList } from 'constants/workerVerification';
import { scrollToError } from 'utils/scrollUtils';

export type VerificationPhotoWithoutFilter = {
  photoWithoutFilter: File | string;
};

export type VerificationStepPromiseType = {
  activeStep: number;
  modelDetails: ModelDetailsResponse | undefined;
  handlePrev: () => void;
  handleNext: () => void;
  token: TokenIdType;
  handleDocuPrev: () => void;
  handleModelApiChange: () => void;
  docValues: VerificationStepSecond;
  isReviewEdit: boolean;
  handleEdit: (step: number) => void;
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
  handleEdit
}: VerificationStepPromiseType) => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    photoWithoutFilter: Yup.mixed()
      .required('Pleaseuploadyourdocument')
      .test('fileSize', 'File size is too large', (value) => {
        if (typeof value === 'string') return true;
        return value && (value as File).size <= MAX_FILE_SIZE;
      })
      .test('fileFormat', 'Unsupported Format', (value) => {
        if (typeof value === 'string') return true;
        return value && SUPPORTED_FORMATS.includes((value as File).type);
      })
  });

  const modelDocuments = useMemo(() => {
    if (modelDetails?.documents?.length) return modelDetails.documents[0];
    else return {} as DocumentDataPhoto;
  }, [modelDetails]);

  const initialValues: VerificationPhotoWithoutFilter = {
    photoWithoutFilter: modelDocuments?.link || ''
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        try {
          setLoading(true);
          const mutationImageUpload = await VerificationStepService.imageKitUplaodApi(values.photoWithoutFilter as File);
          const selectedDocument = DocumentList.find((item) => item.key === docValues.idType)?.value;
          const payload: ImagePayload = {
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
                file_type: mutationImageUpload.file_type === 'non-image' ? 'Non_Image' : 'Image'
              }
            ],
            document_upload_step: true
          };
          const response = await VerificationStepService.uploadModelPhotos(payload, token);
          if (response?.data) {
            handleModelApiChange();
            if (isReviewEdit) {
              handleEdit(4);
            } else {
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
            />

            <Box
              sx={{
                marginTop: isSmDown ? 9 : 12,
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <VerificationStep2Instruction />
            </Box>

            <LastMainBox>
              <StepButtonNext>
                <UIThemeButton variant="outlined" onClick={handleDocuPrev}>
                  <ArrowBackIcon />
                  <UINewTypography variant="body">
                    <FormattedMessage id="Back" />
                  </UINewTypography>
                </UIThemeButton>
                <StyleButtonV2 id="document-id-button" type="submit" variant="contained" loading={loading}>
                  <UINewTypography variant="body">
                    {isReviewEdit ? <FormattedMessage id="SaveAndReview" /> : <FormattedMessage id="Next" />}
                  </UINewTypography>
                  <ArrowForwardOutlinedIcon />
                </StyleButtonV2>
              </StepButtonNext>
            </LastMainBox>
          </Box>
        </>
      )}
    </Formik>
  );
};

export default VerificationStepPromise;
