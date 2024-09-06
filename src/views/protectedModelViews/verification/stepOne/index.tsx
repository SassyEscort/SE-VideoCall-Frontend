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
import { FormattedMessage, useIntl } from 'react-intl';
import { FooterBtnConatiner, StepOneContainer } from './VerficationStepOne.styled';
import { TokenIdType } from '..';
import { toast } from 'react-toastify';
import { useCallback, useEffect, useState } from 'react';
import { ErrorMessage } from 'constants/common.constants';
import { VerificationStepService } from 'services/modelAuth/verificationStep.service';
import { scrollToError } from 'utils/scrollUtils';
import { useRouter } from 'next/navigation';
import { EMAIL_REGEX } from 'constants/regexConstants';
import { MODEL_ACTIVE_STEP } from 'constants/workerVerification';
import { getErrorMessage } from 'utils/errorUtils';

const VerificationStepOne = ({
  handleNext,
  modelDetails,
  token,
  isEdit,
  handleModelApiChange,
  isReviewEdit,
  handleEdit
}: {
  handleNext: () => void;
  modelDetails: ModelDetailsResponse;
  token: TokenIdType;
  isEdit: boolean;
  handleModelApiChange: () => void;
  isReviewEdit: boolean;
  handleEdit?: (step: number) => void;
}) => {
  const intl = useIntl();
  const router = useRouter();
  const [buttonClicked, setButtonClicked] = useState(false);

  const url = new URL(window.location.href);
  const email = url.searchParams.get('email');
  const nationalityId = modelDetails?.nationality?.id != '-1' ? modelDetails?.nationality?.id : '';
  const countryId = modelDetails?.country?.id != '-1' ? modelDetails?.country?.id : '';
  const isModelVerified = modelDetails?.verification_step === MODEL_ACTIVE_STEP.VERIFIED;

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
        ?.map((language) => ({ id: language?.language_id, name: language?.language_name })) || []
  };

  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    gender: Yup.string().required('Genderisrequired'),
    name: Yup.string().required('Nameisrequired').min(2, 'Nameistooshort').max(20, 'Nameistoolong'),
    email: Yup.string().matches(EMAIL_REGEX, 'Enteravalidemail').required('Emailisrequired'),
    dob: Yup.string()
      .test('dob', 'Agemustbegreaterthan18', function (date) {
        return moment().diff(moment(date), 'years') >= 18;
      })
      .required('DobIsRequired'),
    nationality_id: Yup.string().required('Nationalityisrequired'),
    model_languages: Yup.array().required('Languageisrequired').min(1, 'Atleast one language is required'),
    country_id: Yup.string()
      .required('Countryisrequired')
      .test('is-not-zero', 'Countryisrequired', (value) => value !== '0'),
    bio: Yup.string()
      .required('Bioisrequired')
      .min(50, 'Bioshouldbeatleast50characters')
      .max(1000, 'Bioshouldbeatmost1000characters')
      .test('no-links', 'BioShouldNotContainLinks', (value) => {
        const linkPattern = /\b(https?:\/\/|www\.)\S+|(\.co|\.in|\.com|\.net|\.us|\.ai|\.org|\.nl)\b/i;
        return !linkPattern.test(value || '');
      })
      .test('no-four-consecutive-digits', 'BioShouldNotContainNumbers', (value) => {
        const consecutiveDigitsPattern = /\d{4,}/;
        return !consecutiveDigitsPattern.test(value || '');
      })
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
          const errorMessage = getErrorMessage(res?.custom_code);
          toast.error(intl.formatMessage({ id: errorMessage }));
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
            handleModelApiChange();
            if (isReviewEdit && handleEdit) {
              handleEdit(4);
            } else {
              handleNext();
            }
          } else {
            const errorMessage = getErrorMessage(response?.custom_code);
            toast.error(intl.formatMessage({ id: errorMessage }));
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
        const changedValues = Object.keys(values).some(
          (key) => values[key as keyof VerificationStep1Type] !== initialValuesPerStep[key as keyof VerificationStep1Type]
        );
        return (
          <StepOneContainer
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              setButtonClicked(true);
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
              isModelVerified={isModelVerified}
              isModelEmailVerified={modelDetails.email_verified as number}
            />
            <FooterBtnConatiner>
              <UIThemeButton
                onClick={isEdit && handleReset}
                variant={changedValues && isEdit ? 'outlined' : 'contained'}
                disabled={changedValues && isEdit ? false : true}
                sx={{ px: '20px', py: '9px' }}
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
                style={{ backgroundColor: buttonClicked ? (Object.keys(errors).length > 0 ? undefined : 'primary.700') : undefined }}
                sx={{ px: '10px', py: '9px', width: '100%', maxWidth: '133px' }}
              >
                {isEdit ? (
                  <UINewTypography variant="body">
                    <FormattedMessage id="Save" />
                  </UINewTypography>
                ) : isReviewEdit ? (
                  <>
                    <UINewTypography variant="body">
                      <FormattedMessage id="SaveAndReview" />
                    </UINewTypography>
                    <RiArrowRightLine />
                  </>
                ) : (
                  <>
                    <UINewTypography variant="body">
                      <FormattedMessage id="Next" />
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
