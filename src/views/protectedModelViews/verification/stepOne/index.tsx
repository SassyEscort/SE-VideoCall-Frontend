'use client';
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
import { FooterBtnConatiner, StepOneContainer } from './VerficationStepOne.styled';
import { TokenIdType } from '..';
import { toast } from 'react-toastify';
import { useCallback, useEffect, useState } from 'react';
import { ErrorMessage } from 'constants/common.constants';
import { VerificationStepService } from 'services/modelAuth/verificationStep.service';
import { scrollToError } from 'utils/scrollUtils';
import { useRouter } from 'next/navigation';
import { EMAIL_REGEX } from 'constants/regexConstants';

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
  const router = useRouter();

  const url = new URL(window.location.href);
  const email = url.searchParams.get('email');
  const nationalityId = modelDetails?.nationality?.id != '-1' ? modelDetails?.nationality?.id : '';
  const countryId = modelDetails?.country?.id != '-1' ? modelDetails?.country?.id : '';

  const initialValuesPerStep: VerificationStep1Type = {
    id: token.id,
    gender: modelDetails?.gender || '',
    name: modelDetails?.name || '',
    country_id: countryId,
    bio: modelDetails?.bio || '',
    email: modelDetails?.email || '',
    dob: modelDetails?.dob || '',
    nationality_id: nationalityId,
    model_languages:
      modelDetails?.languages
        ?.filter((x) => x?.language_id)
        .map((language) => ({ id: language?.language_id, name: language?.language_name })) || []
  };

  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    gender: Yup.string().required('Gender is required'),
    name: Yup.string().required('Name is required').min(2, 'Name is too short').max(20, 'Name is too long'),
    email: Yup.string().matches(EMAIL_REGEX, 'Enter a valid email').required('Email is required'),
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

  const verifyEmail = useCallback(async () => {
    const verificationCode = url.searchParams.get('code');

    const payload = {
      email: String(email),
      verification_code: String(verificationCode)
    };
    try {
      if (token && payload) {
        const res = await VerificationStepService.modelVerifyEmail(payload, token.token);
        if (res.data) {
          if (url.pathname === '/model/profile') {
            router.push('/model/profile');
          } else {
            router.push('/model/dashboard');
          }
          toast.success('Success');
        } else {
          toast.error(res.message);
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, token.token, url.pathname]);

  useEffect(() => {
    if (email && token.token) {
      verifyEmail();
      handleModelApiChange();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, token]);

  return (
    <Formik
      enableReinitialize
      initialValues={initialValuesPerStep}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          setLoading(true);
          const response = await ModelVerificationService.verificationStepOne(values, token.token);
          if (response.data) {
            toast.success('Success');
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
      {({ values, errors, touched, handleChange, setFieldValue, handleSubmit, handleBlur, handleReset }) => {
        const changedValues = Object.keys(values).reduce((acc, key) => {
          if (values[key as keyof VerificationStep1Type] !== initialValuesPerStep[key as keyof VerificationStep1Type]) {
            return true;
          } else {
            return false;
          }
        }, {});

        return (
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
            <FooterBtnConatiner>
              <UIThemeButton
                onClick={isEdit && handleReset}
                variant={changedValues && isEdit ? 'outlined' : 'contained'}
                disabled={changedValues && isEdit ? false : true}
              >
                {isEdit ? (
                  <UINewTypography variant="body">
                    <FormattedMessage id="CancelChanges" />
                  </UINewTypography>
                ) : (
                  <>
                    <RiArrowLeftLine />
                    <UINewTypography variant="body">
                      <FormattedMessage id="Back" />
                    </UINewTypography>
                  </>
                )}
              </UIThemeButton>
              <StyleButtonV2
                id="basic-details-button"
                type="submit"
                variant="contained"
                loading={loading}
                disabled={changedValues && isEdit ? false : !isEdit ? false : true}
              >
                {isEdit ? (
                  <UINewTypography variant="body">
                    <FormattedMessage id="Save" />
                  </UINewTypography>
                ) : (
                  <>
                    <UINewTypography variant="body">
                      <FormattedMessage id="NextStep" />
                    </UINewTypography>
                    <RiArrowRightLine />
                  </>
                )}
              </StyleButtonV2>
            </FooterBtnConatiner>
          </StepOneContainer>
        );
      }}
    </Formik>
  );
};

export default VerificationStepOne;
