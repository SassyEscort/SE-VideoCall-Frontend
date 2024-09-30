import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import UINewTypography from 'components/UIComponents/UINewTypography';
import {
  DateOfBirthMainContainer,
  EditVerificationBtnBox,
  StepTwoBox,
  StepTwoContainer,
  StepTwoInputOuterBox,
  StepTwoInputOuterMainBox,
  StepTwoMainConatiner,
  VerificationHeaderText,
  VerificationUITypography
} from './VerficationStepOne.styled';
import { UIStyledInputText, UIStyledInputTextCountry } from 'components/UIComponents/UIStyledInputText';
import UINewRadioButtonsGroup from 'components/UIComponents/UIRadioButtonGroup';
import { EMAIL_SOURCE, GENDER } from 'constants/workerVerification';
import FormHelperText from '@mui/material/FormHelperText';
import { RiArrowDownSLine, RiCalendar2Line } from 'components/common/customRemixIcons';
import Box from '@mui/material/Box';
import { FormikErrors, FormikTouched } from 'formik';
import { VerificationStep1Type } from '../verificationTypes';
import { useCallback, useEffect, useState } from 'react';
import { CommonServices } from 'services/commonApi/commonApi.services';
import moment from 'moment';
import { FormControl, createFilterOptions } from '@mui/material';
import { UIStyledDatePicker } from 'components/UIComponents/UIStyledDatePicker';
import UIStyledAutocomplete from 'components/UIComponents/UIStyledAutocomplete';
import { TokenIdType } from '..';
import { ModelAuthService } from 'services/modelAuth/modelAuth.service';
import { toast } from 'react-toastify';
import CheckInboxVerify from 'views/modelViews/checkInBox';
import { GuestStyleComponent } from 'views/guestViews/guestLayout/GuestLayout.styled';
import { ModelVerificationService } from 'services/modelVerification/modelVerification.services';
import { ErrorMessage } from 'constants/common.constants';
import { getErrorMessage } from 'utils/errorUtils';

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
  isModelVerified: boolean;
  isModelEmailVerified: number;
};

export type MultipleOptionString = {
  id: string;
  name: string;
  isAddOption?: boolean;
};
const isMultipleOptionString = (val: any): val is MultipleOptionString => {
  return typeof val === 'object' && val !== null && 'id' in val && 'name' in val;
};
export type FilterInput = {
  name: string;
  inputValue: string;
  id: number;
};

const VerificationBasicDetails = ({
  values,
  errors,
  touched,
  handleChange,
  setFieldValue,
  handleBlur,
  isModelEmailVerified,
  token,
  isEdit,
  isModelVerified
}: VerificationBasicDetailsType) => {
  const intl = useIntl();

  const maxCharCount = 1000;
  const filter = createFilterOptions<MultipleOptionString>();

  const [countries, setCountries] = useState<MultipleOptionString[]>([]);
  const [nationality, setNationality] = useState<MultipleOptionString[]>([]);
  const [languages, setLanguages] = useState<MultipleOptionString[]>([]);
  const [charCount, setCharCount] = useState(values.bio.length || 0);
  const [isEditable, setIsEditable] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [openForgetPassLink, setOpenForgetPassLink] = useState(true);
  const [customLanguages, setCustomLanguages] = useState<MultipleOptionString[]>([]);

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleLanguageApiChange = useCallback(() => {
    const languagesData = async () => {
      const data = await CommonServices.getLanguages();
      setLanguages(data.data);
    };
    languagesData();
  }, []);

  const handleNationalityApiChange = useCallback(async () => {
    const nationalityData = async () => {
      const data = await CommonServices.getNationality(token.token);
      setNationality(data.data);
      return data.data;
    };
    return await nationalityData();
  }, [token.token]);

  const handleCountryApiChange = useCallback(() => {
    const countryData = async () => {
      const data = await CommonServices.getCountry(false);
      setCountries(data.data);
    };
    countryData();
  }, []);

  useEffect(() => {
    handleCountryApiChange();
    handleNationalityApiChange();
    handleLanguageApiChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.token]);

  const handleGender = (val: string) => {
    setFieldValue('gender', val);
  };

  const handleCountry = async (val: string | MultipleOptionString | (string | MultipleOptionString)[] | null) => {
    if (val === null) {
      setFieldValue('country_id', '');
    } else if (val !== null) {
      let selectedCountry: MultipleOptionString | undefined;
      if (Array.isArray(val)) {
        selectedCountry = val[0] as MultipleOptionString;
      } else {
        selectedCountry = val as MultipleOptionString;
      }
      const existingCountry = countries.find((country) => country.name === selectedCountry?.name);
      if (isMultipleOptionString(val) && existingCountry) setFieldValue('country_id', val.id);
      if (typeof val !== 'string' && !existingCountry) {
        if (Array.isArray(val)) {
          const firstVal = val[0];
          if (typeof firstVal !== 'string' && firstVal.name) {
            const res = await ModelVerificationService.modelCountry({ country: firstVal.name }, token.token);
            setFieldValue('country_id', res.data.id);

            if (res.code === 200) {
              handleCountryApiChange();
            }
          }
        } else if (val.name) {
          const res = await ModelVerificationService.modelCountry({ country: val.name }, token.token);
          setFieldValue('country_id', res?.data?.id);

          if (res.code === 200) {
            handleCountryApiChange();
          }
        }
      }
    }
  };

  const handleNationality = async (val: string | MultipleOptionString | (string | MultipleOptionString)[] | null) => {
    if (val === null) {
      setFieldValue('nationality_id', '');
    } else if (val !== null) {
      let selectedNationality: MultipleOptionString | undefined;
      if (Array.isArray(val)) {
        selectedNationality = val[0] as MultipleOptionString;
      } else {
        selectedNationality = val as MultipleOptionString;
      }

      const existingNationality = nationality.find((nationality) => nationality.name === selectedNationality?.name);
      if (isMultipleOptionString(val) && existingNationality) setFieldValue('nationality_id', val.id);

      if (typeof val !== 'string' && !existingNationality) {
        if (Array.isArray(val)) {
          const firstVal = val[0];
          if (typeof firstVal !== 'string' && firstVal.name) {
            const res = await ModelVerificationService.modelNationality({ nationality: firstVal.name }, token.token);
            setFieldValue('nationality_id', res.data.id);
            if (res.code === 200) {
              handleNationalityApiChange();
            }
          }
        } else if (val.name) {
          const res = await ModelVerificationService.modelNationality({ nationality: val.name }, token.token);
          setFieldValue('nationality_id', res.data.id);
          if (res.code === 200) {
            handleNationalityApiChange();
          }
        }
      }
    }
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    handleChange(event);
    setCharCount(inputText.length);
  };

  const handleResetPasswordLinkClose = () => {
    setOpenForgetPassLink(false);
    setActiveStep(0);
  };

  const handleCustomLanguageChange = async (value: string | MultipleOptionString | (string | MultipleOptionString)[] | null) => {
    if (value === null || (Array.isArray(value) && value.length === 0)) {
      setCustomLanguages([]);
      setFieldValue('model_languages', []);
      return;
    }

    if (value) {
      let valueArray = Array.isArray(value) ? value : [value];

      if (valueArray.length) {
        const lastLanguage = (valueArray[valueArray.length - 1] as MultipleOptionString).name;
        const newLang = languages.filter((lang) => lang.name === lastLanguage);

        if (!newLang.length) {
          const res = await ModelVerificationService.modelLanguage({ language: lastLanguage }, token.token);
          if (res.code === 200) {
            (valueArray[valueArray.length - 1] as MultipleOptionString).id = res.data.language_id;
            handleLanguageApiChange();
          }
        }

        const isCustomLanguage = valueArray.some((val) => !languages.find((lang) => lang.name === (val as MultipleOptionString).name));

        if (isCustomLanguage) {
          const newCustomLanguages = valueArray
            ?.filter((val) => !languages.find((lang) => lang.name === (val as MultipleOptionString).name))
            ?.map((val, index) => ({
              id: customLanguages.length + index,
              name: (val as MultipleOptionString).name
            }));
          if (Array.isArray(customLanguages) && Array.isArray(newCustomLanguages)) {
            const formattedNewCustomLanguages = newCustomLanguages?.map((item) => ({
              id: String(item.id),
              name: item.name
            }));

            setCustomLanguages([...customLanguages, ...formattedNewCustomLanguages]);
          }
        }
        if (typeof valueArray !== 'string' && Array.isArray(valueArray)) {
          if (Array.isArray(valueArray)) {
            const filteredArray = valueArray.filter((item): item is MultipleOptionString => typeof item !== 'string');
            setFieldValue('model_languages', filteredArray);
          }
        }
      }
    }
  };

  const sendLinkVerify = async () => {
    touched.email = true;
    const url = new URL(window.location.href);
    let source;
    source = url.pathname === '/model/dashboard' ? EMAIL_SOURCE.ONBOARDED : EMAIL_SOURCE.DETAILS;
    try {
      if (!errors.email && token.token) {
        const data = await ModelAuthService.modelForgetPasswordLinkStep(values.email, token.token, source);
        if (data.code === 200) {
          setOpenForgetPassLink(true);
          toast.success('Success');
          setActiveStep(1);
        } else {
          const errorMessage = getErrorMessage(data?.custom_code);
          toast.error(intl.formatMessage({ id: errorMessage }));
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
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
        {touched.gender && errors.gender && (
          <FormHelperText error>{errors.gender ? <FormattedMessage id="Genderisrequired" /> : ''}</FormHelperText>
        )}
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
              helperText={touched.name && errors.name ? <FormattedMessage id={errors.name} /> : ''}
            />
          </StepTwoInputOuterMainBox>
          <StepTwoInputOuterMainBox>
            <VerificationHeaderText variant="bodySemiBold">
              <FormattedMessage id="Country" /> *
            </VerificationHeaderText>
            <UIStyledAutocomplete
              id="country"
              options={countries || []}
              getOptionLabel={(option) => (typeof option === 'string' ? option : option.name)}
              value={countries?.find((c) => c.id == values.country_id) || ''}
              disablePortal
              onChange={(_, newValue) => {
                handleCountry(newValue);
              }}
              renderInput={(params) => (
                <UIStyledInputTextCountry
                  {...params}
                  error={touched.country_id && Boolean(errors.country_id)}
                  helperText={touched.country_id && errors.country_id ? <FormattedMessage id={errors.country_id} /> : ''}
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
            helperText={touched.bio && errors.bio ? <FormattedMessage id={errors.bio} /> : ''}
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
              helperText={touched.email && errors.email ? <FormattedMessage id={errors.email} /> : ''}
              InputProps={{
                endAdornment: (
                  <EditVerificationBtnBox>
                    <UINewTypography color={'text.secondary'} variant="buttonSmallBold" onClick={handleEditClick}>
                      <FormattedMessage id="Edit" />
                    </UINewTypography>
                    <>
                      <UINewTypography
                        color={isModelEmailVerified === 1 ? 'green' : 'primary.600'}
                        variant="buttonSmallBold"
                        onClick={() => {
                          if (isModelEmailVerified !== 1) {
                            sendLinkVerify();
                            setActiveStep(1);
                          }
                        }}
                      >
                        {isModelEmailVerified === 1 ? <FormattedMessage id="Verified" /> : <FormattedMessage id="Verify" />}
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
                  </EditVerificationBtnBox>
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
              <FormattedMessage id="DateOfBirth" />*
            </VerificationHeaderText>
            <UIStyledDatePicker
              format="YYYY-MM-DD"
              value={values.dob ? moment(values.dob, 'YYYY-MM-DD') : null}
              onChange={(date) => {
                setFieldValue('dob', date ? moment(date).format('YYYY-MM-DD') : null);
              }}
              disabled={isModelVerified}
              slots={{ openPickerIcon: RiCalendar2Line }}
              slotProps={{
                textField: {
                  variant: 'outlined',
                  error: touched.dob && Boolean(errors.dob),
                  helperText: touched.dob && errors.dob && <FormattedMessage id={errors?.dob} />
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
                },
                '&:hover': {
                  '.MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff68c0 !important'
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'primary.800'
                  }
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
              <UIStyledAutocomplete
                id="nationality"
                options={nationality}
                getOptionLabel={(option) => (typeof option === 'string' ? option : option.name)}
                value={nationality?.find((c) => c.id == values.nationality_id || c.name == values.nationality_id) ?? ''}
                disablePortal
                onChange={(_, newValue) => {
                  handleNationality(newValue);
                }}
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);
                  const customOptions = filtered?.map((option) => {
                    if (typeof option === 'string') {
                      return { id: '', name: option };
                    } else {
                      return option;
                    }
                  });

                  if (
                    params.inputValue !== '' &&
                    !filtered.some(
                      (option) => (typeof option === 'string' ? option : option.name).toLowerCase() === params.inputValue.toLowerCase()
                    )
                  ) {
                    customOptions.push({
                      id: '',
                      name: params.inputValue.charAt(0).toUpperCase() + params.inputValue.slice(1),
                      isAddOption: true
                    });
                  }

                  return customOptions;
                }}
                renderOption={(props, option) => <li {...props}>{option?.isAddOption ? `Add "${option?.name}"` : option?.name}</li>}
                renderInput={(params) => (
                  <UIStyledInputText
                    {...params}
                    error={touched.nationality_id && Boolean(errors.nationality_id)}
                    helperText={touched.nationality_id && errors.nationality_id ? <FormattedMessage id={errors.nationality_id} /> : ''}
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
          </StepTwoInputOuterMainBox>
        </StepTwoMainConatiner>
      </StepTwoBox>
      <StepTwoBox>
        <VerificationUITypography variant="h6" color="text.secondary">
          <FormattedMessage id="PreferredLanguage" />*
        </VerificationUITypography>
        <FormControl fullWidth>
          <UIStyledAutocomplete
            sx={{ '& .MuiInputBase-root': { padding: '4px' } }}
            multiple
            id="languages"
            options={languages}
            getOptionLabel={(option) => (typeof option === 'string' ? option : option.name)}
            value={values.model_languages}
            disablePortal
            freeSolo
            filterOptions={(options, params) => {
              const filtered = filter(options, params);

              const customOptions = filtered?.map((option) => {
                if (typeof option === 'string') {
                  return { id: '', name: option };
                } else {
                  return option;
                }
              });

              if (
                params.inputValue !== '' &&
                !filtered.some(
                  (option) => (typeof option === 'string' ? option : option.name).toLowerCase() === params.inputValue.toLowerCase()
                )
              ) {
                customOptions.push({
                  id: '',
                  name: params.inputValue.charAt(0).toUpperCase() + params.inputValue.slice(1),
                  isAddOption: true
                });
              }

              return customOptions;
            }}
            onChange={(_, newValue) => {
              handleCustomLanguageChange(newValue);
            }}
            renderOption={(props, option) => <li {...props}>{option?.isAddOption ? `Add "${option?.name}"` : option?.name}</li>}
            renderInput={(params) => (
              <UIStyledInputText
                {...params}
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
            <FormHelperText error>
              {errors.model_languages ? <FormattedMessage id={errors.model_languages as string} /> : ''}
            </FormHelperText>
          </Box>
        )}
      </StepTwoBox>
    </StepTwoContainer>
  );
};

export default VerificationBasicDetails;
