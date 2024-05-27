import { Formik } from 'formik';
import Box from '@mui/material/Box';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';
import UINewTypography from 'components/UIComponents/UINewTypography';
import * as Yup from 'yup';
import WorkerPhotosWithoutFilterNew from './WorkerPhotosWithoutFilterNew';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import { StepButtonNext } from './LastStepPromise.styled';
import { FormattedMessage } from 'react-intl';
import { VerificationStepService } from 'services/modelAuth/verificationStep.service';
import { toast } from 'react-toastify';
import { ErrorMessage, MAX_FILE_SIZE, SUPPORTED_FORMATS } from 'constants/common.constants';
import VerificationStep2Instruction from './VerificationStep2Instruction';
import { ModelDetailsResponse } from '../verificationTypes';
import { TokenIdType } from '..';
import { PHOTO_TYPE } from 'constants/workerVerification';
import { ImagePayload } from '../stepThree/uploadImage';
import { useState } from 'react';

export type VerificationStepPromiseType = {
  activeStep: number;
  modelDetails: ModelDetailsResponse | undefined;
  handlePrev: () => void;
  handleNext: () => void;
  token: TokenIdType;
  handleDocuPrev: () => void;
};

const VerificationStepPromise = ({
  activeStep,
  handlePrev,
  handleNext,
  token,
  modelDetails,
  handleDocuPrev
}: VerificationStepPromiseType) => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    photoWithoutFilter: Yup.mixed()
      .required('Please upload your document')
      .test('fileSize', 'File size is too large', (value) => {
        return value && (value as File).size <= MAX_FILE_SIZE;
      })
      .test('fileFormat', 'Unsupported Format', (value) => {
        return value && SUPPORTED_FORMATS.includes((value as File).type);
      })
  });

  const initialValues = {
    photoWithoutFilter:
      modelDetails?.documents?.filter((x) => x?.document_type === PHOTO_TYPE.MODEL_PHOTO)[0]?.link || (null as File | null)
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
          const payload: ImagePayload = {
            is_document: false,
            photos: [
              {
                link: typeof mutationImageUpload === 'string' ? '' : String(mutationImageUpload.photosURL),
                type: 'image',
                cords: '',
                is_favourite: 0,
                is_document: 1,
                document_type: PHOTO_TYPE.MODEL_PHOTO,
                document_number: null
              }
            ],
            document_upload_step: true
          };
          const response = await VerificationStepService.uploadModelPhotos(payload, token);
          if (response?.data) {
            handleNext();
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
          <Box component="form" onSubmit={handleSubmit} id="profile-from">
            <WorkerPhotosWithoutFilterNew
              name="photoWithoutFilter"
              value={values.photoWithoutFilter as File}
              setValue={setFieldValue}
              setFieldTouched={setFieldTouched}
              touched={touched}
              errors={errors.photoWithoutFilter}
              accept="image/*"
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

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 9,
                mb: 12.75
              }}
            >
              <StepButtonNext>
                <UIThemeButton variant="outlined" onClick={handleDocuPrev}>
                  <ArrowBackIcon />
                  <UINewTypography variant="body">
                    {isSmDown ? <FormattedMessage id="Back" /> : <FormattedMessage id="PreviousStep" />}
                  </UINewTypography>
                </UIThemeButton>
                <StyleButtonV2 id="verification-button" type="submit" variant="contained" loading={loading}>
                  <UINewTypography variant="body">
                    {isSmDown ? <FormattedMessage id="Next" /> : <FormattedMessage id="NextStep" />}
                  </UINewTypography>
                  <ArrowRightAltIcon />
                </StyleButtonV2>
              </StepButtonNext>
            </Box>
          </Box>
        </>
      )}
    </Formik>
  );
};

export default VerificationStepPromise;
