'use client';
import Box from '@mui/material/Box';
import { Formik } from 'formik';
import VerificationBasicDetails from './VerificationStepOne';
import { ModelDetailsResponse, VerificationStep1Type } from '../verificationTypes';
import { ModelVerificationService } from 'services/modelVerification/modelVerification.services';
import { RiArrowLeftLine, RiArrowRightLine } from 'components/common/customRemixIcons';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';
import * as Yup from 'yup';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { StepOneContainer } from './VerficationStepOne.styled';
import { TokenIdType } from '..';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { ErrorMessage } from 'constants/common.constants';
import { VerificationStepService } from 'services/modelAuth/verificationStep.service';
import { scrollToError } from 'utils/scrollUtils';

const VerificationStepOne = ({
  handleNext,
  modelDetails,
  token,
  isEdit,
  handleModelApiChange
}: {
  handleNext: () => void;
  modelDetails: ModelDetailsResponse;
  token: TokenIdType;
  isEdit: boolean;
  handleModelApiChange: () => void;
}) => {
  const initialValuesPerStep: VerificationStep1Type = {
    id: token.id,
    gender: modelDetails?.gender || '',
    name: modelDetails?.name || '',
    country_id: modelDetails?.country?.id || '',
    bio: modelDetails?.bio || '',
    email: modelDetails?.email || '',
    dob: modelDetails?.dob || '',
    nationality_id: modelDetails?.nationality?.id || '',
    model_languages: modelDetails?.languages?.map((language) => ({ id: language.language_id, name: language.language_name })) || []
  };

  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    gender: Yup.string().required('Gender is required'),
    name: Yup.string().required('Name is required').min(2, 'Name is too short').max(20, 'Name is too long'),
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    dob: Yup.date()
      .test('dob', 'AgeGreaterThan18', function (date) {
        return moment().diff(moment(date), 'years') >= 18;
      })
      .required('DobIsRequired'),

    nationality_id: Yup.string().required('Nationality is required'),
    model_languages: Yup.array().required('Language is required').min(1, 'Atleast one language is required'),
    country_id: Yup.string()
      .required('Country is required')
      .test('is-not-zero', 'Country is required', (value) => value !== '0'),

    bio: Yup.string()
      .required('Bio is required')
      .min(50, 'Bio should be atleast 50 characters')
      .max(1000, 'Bio should be atmost 1000 characters')
  });

  const verifyEmail = async () => {
    const url = new URL(window.location.href);
    const email = url.searchParams.get('email');
    const verificationCode = url.searchParams.get('code');

    const payload = {
      email: String(email),
      verification_code: String(verificationCode)
    };
    await VerificationStepService.modelVerifyEmail(payload, token.token);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValuesPerStep}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          setLoading(true);
          const response = await ModelVerificationService.verificationStepOne(values, token.token);
          const url = new URL(window.location.href);
          if (url.searchParams.get('email')) {
            verifyEmail();
          }
          if (response.data) {
            toast.success(response.message);
            handleNext();
            handleModelApiChange();
          } else {
            toast.error(response.message);
          }
        } catch (error) {
          toast.error(ErrorMessage);
        } finally {
          setLoading(false);
          setSubmitting(false);
        }
      }}
    >
      {({ values, errors, touched, handleChange, setFieldValue, handleSubmit, handleBlur }) => (
        <StepOneContainer
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            scrollToError('.Mui-error');
            handleSubmit();
          }}
        >
          <VerificationBasicDetails
            isEdit={isEdit}
            token={token}
            values={values}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              maxWidth: '824px'
            }}
          >
            <UIThemeButton variant="outlined" disabled={true}>
              <RiArrowLeftLine />
              <UINewTypography variant="body">
                <FormattedMessage id="Back" />
              </UINewTypography>
            </UIThemeButton>
            <StyleButtonV2 id="basic-details-button" type="submit" variant="contained" loading={loading}>
              <UINewTypography variant="body">
                <FormattedMessage id="Next" />
              </UINewTypography>
              <RiArrowRightLine />
            </StyleButtonV2>
          </Box>
        </StepOneContainer>
      )}
    </Formik>
  );
};

export default VerificationStepOne;
