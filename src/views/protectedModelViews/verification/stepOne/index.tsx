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
import { getUserDataClient } from 'utils/getSessionData';
import { useEffect, useState } from 'react';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import * as Yup from 'yup';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { StepOneContainer } from './VerficationStepOne.styled';

const VerificationStepOne = ({ handleNext }: { handleNext: () => void }) => {
  const [token, setToken] = useState(0);
  const [modelDetails, setModelDetails] = useState<ModelDetailsResponse>();

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken(data.id);
    };

    userToken();
    const modelDetails = async () => {
      const modelData = await ModelDetailsService.getModelDetails(57);
      setModelDetails(modelData.data);
    };
    modelDetails();
  }, []);

  const initialValuesPerStep: VerificationStep1Type = {
    id: token,
    gender: modelDetails?.gender || '',
    name: modelDetails?.name || '',
    country_id: modelDetails?.country_id || '',
    bio: modelDetails?.bio || '',
    email: modelDetails?.email || '',
    dob: modelDetails?.dob || '',
    nationality_id: modelDetails?.nationality_id || '',
    model_languages: modelDetails?.languages?.map((language) => ({ id: language.language_id, name: language.language_name })) || []
  };

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
      .min(300, 'Bio should be atleast 300 characters')
      .max(1000, 'Bio should be atmost 300 characters')
  });

  return (
    <Formik
      enableReinitialize
      initialValues={initialValuesPerStep}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        await ModelVerificationService.verificationStepOne(values);
        handleNext();
      }}
    >
      {({ values, errors, touched, handleChange, setFieldValue, handleSubmit, handleBlur }) => (
        <StepOneContainer
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <VerificationBasicDetails
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
            <StyleButtonV2 type="submit" variant="contained" id="user-info-submit-button">
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
