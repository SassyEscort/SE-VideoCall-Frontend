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
import { ErrorMessage } from 'constants/common.constants';
import { Payload } from './type';
import VerificationStep2Instruction from './VerificationStep2Instruction';
import { ModelDetailsResponse } from '../verificationTypes';
import { TokenIdType } from '..';

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

  const validationSchema = Yup.object().shape({
    photoWithoutFilter: Yup.mixed().required('Please upload your documents')
  });

  const initialValues = {
    photoWithoutFilter: null as File | null
  };
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        try {
          const mutationImageUpload = await VerificationStepService.imageKitUplaodApi(values.photoWithoutFilter as File);
          const payload: Payload = {
            id: token as unknown as string,
            is_document: false,
            photos: [
              {
                url: typeof mutationImageUpload === 'string' ? '' : mutationImageUpload.url,
                type: 'image',
                id: typeof mutationImageUpload === 'string' ? '' : mutationImageUpload?.fileId,
                cords: '',
                is_favourite: 1,
                is_document: 0,
                document_type: 'Model_Photo',
                document_number: null
              }
            ]
          };
          const response = await VerificationStepService.uploadModelPhotos(payload, token);
          if (response.data.success) {
            handleNext();
          } else {
            toast.error(response.data.message);
          }
        } catch (error) {
          toast.error(ErrorMessage);
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
                <StyleButtonV2 id="verification-button" type="submit" variant="contained" loading={false}>
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
