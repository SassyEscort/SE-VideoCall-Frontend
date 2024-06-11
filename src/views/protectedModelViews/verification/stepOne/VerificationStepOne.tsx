import { FormattedMessage } from 'react-intl';
import UINewTypography from 'components/UIComponents/UINewTypography';
import {
  DateOfBirthMainContainer,
  StepTwoBox,
  StepTwoContainer,
  StepTwoInputOuterBox,
  StepTwoInputOuterMainBox,
  StepTwoMainConatiner,
  VerificationHeaderText,
  VerificationUITypography
} from './VerficationStepOne.styled';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import UINewRadioButtonsGroup from 'components/UIComponents/UIRadioButtonGroup';
import { EMAIL_SOURCE, GENDER } from 'constants/workerVerification';
import FormHelperText from '@mui/material/FormHelperText';
import { RiArrowDownSLine, RiCalendar2Line } from 'components/common/customRemixIcons';
import Box from '@mui/material/Box';
import { FormikErrors, FormikTouched } from 'formik';
import { MultipleOptionString, VerificationStep1Type } from '../verificationTypes';
import { useEffect, useState } from 'react';
import { CommonServices } from 'services/commonApi/commonApi.services';
import moment from 'moment';
import { FormControl, MenuItem, TextField } from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { UIStyledDatePicker } from 'components/UIComponents/UIStyledDatePicker';
import { UIStyledSelectItemContainer } from 'components/UIComponents/UINewSelectItem';
import UIStyledAutocomplete from 'components/UIComponents/UIStyledAutocomplete';
import { TokenIdType } from '..';
import { ModelAuthService } from 'services/modelAuth/modelAuth.service';
import { toast } from 'react-toastify';
import CheckInboxVerify from 'views/modelViews/checkInBox';
import { GuestStyleComponent } from 'views/guestViews/guestLayout/GuestLayout.styled';
import { ModelVerificationService } from 'services/modelVerification/modelVerification.services';

export type VerificationBasicDetailsType = {
  values: VerificationStep1Type;
  errors: FormikErrors<VerificationStep1Type>;
  touched: FormikTouched<VerificationStep1Type>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange: (e: any) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  setFieldValue: (
    field: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<VerificationStep1Type>>;
  token: TokenIdType;
  isEdit: boolean;
};

export type MultipleOptionName = {
  id: number;
  name: string;
};

const VerificationBasicDetails = ({
  values,
  errors,
  touched,
  handleChange,
  setFieldValue,
  handleBlur,
  token,
  isEdit
}: VerificationBasicDetailsType) => {
  console.log(values.model_languages, 'model');

  const maxCharCount = 1000;

  const [countries, setCountries] = useState<MultipleOptionString[]>([]);
  const [nationality, setNationality] = useState<MultipleOptionString[]>([]);
  const [languages, setLanguages] = useState<MultipleOptionString[]>([]);
  const [charCount, setCharCount] = useState(values.bio.length || 0);
  const [isEditable, setIsEditable] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [openForgetPassLink, setOpenForgetPassLink] = useState(true);
  const [selectedLanguages, setSelectedLanguages] = useState(values.model_languages || []);

  const handleEditClick = () => {
    setIsEditable(true);
  };

  useEffect(() => {
    const countryData = async () => {
      const data = await CommonServices.getCountry(token.token);
      setCountries(data.data);
    };
    countryData();

    const nationalityData = async () => {
      const data = await CommonServices.getNationality(token.token);
      setNationality(data.data);
    };
    nationalityData();

    const languagesData = async () => {
      const data = await CommonServices.getLanguages(token.token);
      setLanguages(data.data);
    };
    languagesData();
  }, [token.token]);

  const handleGender = (val: string) => {
    setFieldValue('gender', val);
  };

  const handleCity = (val: string | null) => {
    setFieldValue('country_id', val);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    handleChange(event);
    setCharCount(inputText.length);
  };

  const handleLanguageChange = (event, newValue) => {
    setSelectedLanguages(newValue);
    // setFieldValue('model_languages', newValue);
  };

  const handleResetPasswordLinkClose = () => {
    setOpenForgetPassLink(false);
    setActiveStep(0);
  };

  const [customLanguages, setCustomLanguages] = useState([]);
  console.log(customLanguages, 'customLanguages');

  const handleCustomLanguageChange = async (event, value) => {
    console.log(value[0], 'valuevalue');

    const data = await ModelVerificationService.modelCountry({ country: value[0] }, token);
    console.log(data, 'datadata');

    const isCustomLanguage = value.some((val) => !languages.find((lang) => lang.name === val.name));

    if (isCustomLanguage) {
      const newCustomLanguages = value
        .filter((val) => !languages.find((lang) => lang.name === val.name))
        .map((val, index) => ({ id: customLanguages.length + index, name: val }));
      console.log(newCustomLanguages, 'newCustomLanguages');

      setCustomLanguages([...customLanguages, ...newCustomLanguages]);
      setFieldValue('model_languages', [...customLanguages, ...newCustomLanguages]);
    }

    handleLanguageChange(event, value);
  };

  const sendLinkVerify = async () => {
    touched.email = true;
    const url = new URL(window.location.href);
    let source;
    source = url.pathname === '/model/dashboard' ? EMAIL_SOURCE.ONBOARDED : EMAIL_SOURCE.DETAILS;
    try {
      if (!errors.email) {
        const data = await ModelAuthService.modelForgetPasswordLinkStep(values.email, token.token, source);
        if (data.code === 200) {
          setOpenForgetPassLink(true);
          toast.success(data.message);
          setActiveStep(1);
        } else {
          toast.error(data.error);
        }
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <StepTwoContainer>
      {!isEdit && (
        <UINewTypography variant="h2" color="text.secondary" textAlign="center">
          <FormattedMessage id="LetsStartWithYourBasic" />
        </UINewTypography>
      )}
      <StepTwoBox sx={{ gap: 0 }}>
        <VerificationUITypography variant="h6" color="text.secondary">
          <FormattedMessage id="IAmA" />
        </VerificationUITypography>
        <UINewRadioButtonsGroup options={GENDER} defaultValue={values.gender} onChange={handleGender} />
        {touched.gender && errors.gender && <FormHelperText error>{errors.gender}</FormHelperText>}
      </StepTwoBox>
      <StepTwoBox sx={{ gap: 2.5 }}>
        <StepTwoMainConatiner>
          <StepTwoInputOuterMainBox>
            <VerificationHeaderText variant="bodySemiBold">
              <FormattedMessage id="Name" /> *
            </VerificationHeaderText>
            <UIStyledInputText
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
          </StepTwoInputOuterMainBox>
          <StepTwoInputOuterMainBox>
            <VerificationHeaderText variant="bodySemiBold">
              <FormattedMessage id="Country" /> *
            </VerificationHeaderText>
            <UIStyledAutocomplete
              id="country"
              options={countries || []}
              getOptionLabel={(option) => option.name || ''}
              value={countries?.find((c) => c.id == values.country_id) || null}
              disablePortal
              onChange={(_, newValue) => {
                handleCity(newValue ? newValue.id : null);
              }}
              renderInput={(params) => (
                <UIStyledInputText
                  {...params}
                  error={touched.country_id && Boolean(errors.country_id)}
                  helperText={touched.country_id && errors.country_id}
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                    endAdornment: (
                      <RiArrowDownSLine
                        style={{
                          color: '#86838A',
                          height: '24px',
                          width: '24px'
                        }}
                      />
                    ),
                    style: {
                      paddingRight: '13px'
                    }
                  }}
                />
              )}
            />
          </StepTwoInputOuterMainBox>
        </StepTwoMainConatiner>
        <StepTwoInputOuterBox sx={{ maxWidth: '792px' }}>
          <VerificationHeaderText variant="bodySemiBold">
            <FormattedMessage id="YourBio" /> *
          </VerificationHeaderText>
          <UIStyledInputText
            name="bio"
            rows={6.4}
            fullWidth
            multiline
            value={values.bio}
            onChange={handleDescriptionChange}
            onBlur={handleBlur}
            error={touched.bio && Boolean(errors.bio)}
            helperText={touched.bio && errors.bio}
            sx={{
              '& .MuiInputBase-input': { color: 'secondary.700', margin: '12px 16px' },
              maxWidth: '792px',
              '& .MuiOutlinedInput-root': {
                padding: '0px !important'
              }
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Box>
              <UINewTypography variant="SubtitleSmallRegular" color="secondary.700">
                <FormattedMessage id="BioData" />
              </UINewTypography>
            </Box>
            <Box>
              <UINewTypography variant="SubtitleSmallRegular" color={charCount > maxCharCount ? 'error.main' : 'secondary.700'}>
                {`${charCount}/${maxCharCount}`}
              </UINewTypography>
            </Box>
          </Box>
        </StepTwoInputOuterBox>
      </StepTwoBox>
      <StepTwoBox>
        <Box display="flex" gap={1.5}>
          <StepTwoInputOuterMainBox sx={{ maxWidth: '100%' }}>
            <VerificationHeaderText variant="bodySemiBold">
              <FormattedMessage id="Email" /> *
            </VerificationHeaderText>
            <UIStyledInputText
              disabled={!isEditable}
              fullWidth
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              InputProps={{
                endAdornment: (
                  <Box sx={{ display: 'flex', gap: 2, cursor: 'pointer' }}>
                    <UINewTypography color={'text.secondary'} variant="buttonSmallBold" onClick={handleEditClick}>
                      <FormattedMessage id="Edit" />
                    </UINewTypography>
                    <>
                      <UINewTypography
                        color="primary.600"
                        variant="buttonSmallBold"
                        onClick={() => {
                          sendLinkVerify();
                          setActiveStep(1);
                        }}
                      >
                        <FormattedMessage id="Verify" />
                      </UINewTypography>

                      {activeStep === 1 && (
                        <GuestStyleComponent
                          scroll="body"
                          open={openForgetPassLink}
                          onClose={handleResetPasswordLinkClose}
                          maxWidth="md"
                          fullWidth
                        >
                          <CheckInboxVerify onOpen={openForgetPassLink} onClose={handleResetPasswordLinkClose} email={values.email} />
                        </GuestStyleComponent>
                      )}
                    </>
                  </Box>
                )
              }}
            />
          </StepTwoInputOuterMainBox>
        </Box>
      </StepTwoBox>
      <StepTwoBox>
        <StepTwoMainConatiner>
          <DateOfBirthMainContainer>
            <VerificationHeaderText variant="bodySemiBold">
              <FormattedMessage id="DOB" />*
            </VerificationHeaderText>
            <UIStyledDatePicker
              format="YYYY-MM-DD"
              value={values.dob ? moment(values.dob, 'YYYY-MM-DD') : null}
              onChange={(date) => {
                setFieldValue('dob', date ? moment(date).format('YYYY-MM-DD') : null);
              }}
              maxDate={moment().subtract(18, 'years')}
              slots={{ openPickerIcon: RiCalendar2Line }}
              slotProps={{
                textField: {
                  variant: 'outlined',
                  error: touched.dob && Boolean(errors.dob),
                  helperText:
                    touched.dob && (!values.dob || !moment(values.dob, 'YYYY-MM-DD', true).isValid())
                      ? 'Date is required'
                      : touched.dob && moment().diff(values.dob, 'years') < 18
                        ? 'Age must be greater than 18'
                        : touched.dob && errors.dob
                },
                calendarHeader: {
                  sx: {
                    '& .MuiPickersArrowSwitcher-button': {
                      color: 'white.main'
                    },
                    '& .MuiPickersCalendarHeader-switchViewIcon': {
                      color: 'white.main'
                    }
                  }
                }
              }}
              sx={{
                '& .MuiIconButton-root': {
                  color: 'secondary.700'
                }
              }}
            />
            <UINewTypography variant="SubtitleSmallRegular" color="secondary.700" fontWeight={500}>
              <FormattedMessage id="DOBCantChange" />
            </UINewTypography>
          </DateOfBirthMainContainer>
          <StepTwoInputOuterMainBox>
            <VerificationHeaderText variant="bodySemiBold">
              <FormattedMessage id="Nationality" /> *
            </VerificationHeaderText>
            <FormControl fullWidth>
              <UIStyledSelectItemContainer
                sx={{ '&.MuiInputBase-root': { backgroundColor: 'secondary.500' }, height: '50px' }}
                name="nationality_id"
                onChange={handleChange}
                value={values.nationality_id}
                error={touched.nationality_id && Boolean(errors.nationality_id)}
                IconComponent={ExpandMore}
              >
                {nationality?.map((type, index: number) => (
                  <MenuItem key={index} value={type.id} sx={{ padding: '12px 16px' }}>
                    {type.name}
                  </MenuItem>
                ))}
              </UIStyledSelectItemContainer>
              {touched.nationality_id && errors.nationality_id && <FormHelperText error>{errors.nationality_id}</FormHelperText>}
            </FormControl>
          </StepTwoInputOuterMainBox>
        </StepTwoMainConatiner>
      </StepTwoBox>
      <StepTwoBox>
        <VerificationUITypography variant="h6" color="text.secondary">
          <FormattedMessage id="PreferredLanguage" />*
        </VerificationUITypography>
        <FormControl fullWidth>
          <UIStyledAutocomplete
            multiple
            id="languages"
            options={[...languages, ...customLanguages]}
            getOptionLabel={(option) => option.name || ''}
            value={selectedLanguages}
            disablePortal
            freeSolo
            onChange={handleCustomLanguageChange}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                  endAdornment: (
                    <RiArrowDownSLine
                      style={{
                        color: '#86838A',
                        height: '24px',
                        width: '24px'
                      }}
                    />
                  ),
                  style: {
                    paddingRight: '13px'
                  }
                }}
              />
            )}
          />
        </FormControl>
        {touched.model_languages && errors.model_languages && (
          <Box width="100%">
            <FormHelperText error>{errors.model_languages as string}</FormHelperText>
          </Box>
        )}
      </StepTwoBox>
    </StepTwoContainer>
  );
};

export default VerificationBasicDetails;
