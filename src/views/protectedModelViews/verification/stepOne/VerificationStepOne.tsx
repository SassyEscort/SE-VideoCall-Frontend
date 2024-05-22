import { FormattedMessage } from 'react-intl';
import UINewTypography from 'components/UIComponents/UINewTypography';
import {
  DateOfBirthMainContainer,
  StepTwoBox,
  StepTwoContainer,
  StepTwoInputOuterBox,
  StepTwoInputOuterMainBox
} from './VerficationStepOne.styled';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import UINewRadioButtonsGroup from 'components/UIComponents/UIRadioButtonGroup';
import { GENDER } from 'constants/workerVerification';
import FormHelperText from '@mui/material/FormHelperText';
import { RiArrowDownSLine, RiCalendar2Line } from 'components/common/customRemixIcons';
import Box from '@mui/material/Box';
import { FormikErrors, FormikTouched } from 'formik';
import { MultipleOptionString, VerificationStep1Type } from '../verificationTypes';
import { useEffect, useState } from 'react';
import { CommonServices } from 'services/commonApi/commonApi.services';
import moment from 'moment';
import { FormControl, MenuItem } from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import UINewCheckBox from './VerificationCheckBox';
import { UIStyledDatePicker } from 'components/UIComponents/UIStyledDatePicker';
import { UIStyledSelectItemContainer } from 'components/UIComponents/UINewSelectItem';
import UIStyledAutocomplete from 'components/UIComponents/UIStyledAutocomplete';

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
};

export type MultipleOptionName = {
  id: number;
  name: string;
};

const VerificationBasicDetails = ({ values, errors, touched, handleChange, setFieldValue, handleBlur }: VerificationBasicDetailsType) => {
  const [countries, setCountries] = useState<MultipleOptionString[]>([]);
  const [nationality, setNationality] = useState<MultipleOptionString[]>([]);
  const [languages, setLanguages] = useState<MultipleOptionString[]>([]);

  const [charCount, setCharCount] = useState(values.bio.length || 0);
  const maxCharCount = 1000;

  useEffect(() => {
    const countryData = async () => {
      const data = await CommonServices.getCountry();
      setCountries(data.data);
    };
    countryData();

    const nationalityData = async () => {
      const data = await CommonServices.getNationality();
      setNationality(data.data);
    };
    nationalityData();

    const languagesData = async () => {
      const data = await CommonServices.getLanguages();

      setLanguages(data.data);
    };
    languagesData();
  }, []);

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

  const handleLanguageChange = (checked: boolean, val: string) => {
    let updatedLanguagesData = [...values.model_languages];
    const checkedLangIndex = updatedLanguagesData.findIndex((lang) => lang.id == val);

    if (checked) {
      if (checkedLangIndex == -1) {
        updatedLanguagesData.push(...languages.filter((lang) => lang.id == val));
        setFieldValue('model_languages', updatedLanguagesData);
      }
    } else {
      if (checkedLangIndex != -1) {
        updatedLanguagesData.splice(checkedLangIndex, 1);
        setFieldValue('model_languages', updatedLanguagesData);
      }
    }
  };

  return (
    <StepTwoContainer>
      <StepTwoBox sx={{ gap: 0 }}>
        <UINewTypography variant="h6" color="text.secondary">
          <FormattedMessage id="IAmA" />
        </UINewTypography>
        <UINewRadioButtonsGroup options={GENDER} defaultValue={values.gender} onChange={handleGender} />
        {touched.gender && errors.gender && <FormHelperText error>{errors.gender}</FormHelperText>}
      </StepTwoBox>
      <StepTwoBox sx={{ gap: 2.5 }}>
        <Box display="flex" gap={1.5} sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
          <StepTwoInputOuterMainBox>
            <UINewTypography variant="bodySemiBold">
              <FormattedMessage id="Name" /> *
            </UINewTypography>
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
            <UINewTypography variant="bodySemiBold">
              <FormattedMessage id="Country" /> *
            </UINewTypography>
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
                    )
                  }}
                />
              )}
            />
          </StepTwoInputOuterMainBox>
        </Box>
        <StepTwoInputOuterBox sx={{ maxWidth: '792px' }}>
          <UINewTypography variant="bodySemiBold">
            <FormattedMessage id="YourBio" /> *
          </UINewTypography>
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
              '& .MuiInputBase-input': { color: 'secondary.700' },
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
            <UINewTypography variant="bodySemiBold">
              <FormattedMessage id="Email" /> *
            </UINewTypography>
            <UIStyledInputText
              fullWidth
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              InputProps={{
                endAdornment: (
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <UINewTypography color={'text.secondary'} variant="buttonSmallBold">
                      <FormattedMessage id="Edit" />
                    </UINewTypography>
                    <UINewTypography color="primary.600" variant="buttonSmallBold">
                      <FormattedMessage id="Verify" />
                    </UINewTypography>
                  </Box>
                )
              }}
            />
          </StepTwoInputOuterMainBox>
        </Box>
      </StepTwoBox>
      <StepTwoBox>
        <Box display="flex" gap={1.5} sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
          <DateOfBirthMainContainer>
            <UINewTypography variant="bodySemiBold">
              <FormattedMessage id="DOB" />*
            </UINewTypography>
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
            <UINewTypography variant="SubtitleSmallRegular" color="secondary.700">
              <FormattedMessage id="DOBCantChange" />
            </UINewTypography>
          </DateOfBirthMainContainer>
          <StepTwoInputOuterMainBox>
            <UINewTypography variant="bodySemiBold">
              <FormattedMessage id="Nationality" /> *
            </UINewTypography>
            <FormControl fullWidth>
              <UIStyledSelectItemContainer
                sx={{ '&.MuiInputBase-root': { backgroundColor: 'secondary.500' } }}
                name="nationality_id"
                onChange={handleChange}
                value={values.nationality_id}
                error={touched.nationality_id && Boolean(errors.nationality_id)}
                IconComponent={ExpandMore}
              >
                {nationality?.map((type, index: number) => (
                  <MenuItem key={index} value={type.id}>
                    {type.name}
                  </MenuItem>
                ))}
              </UIStyledSelectItemContainer>
              {touched.nationality_id && errors.nationality_id && <FormHelperText error>{errors.nationality_id}</FormHelperText>}
            </FormControl>
          </StepTwoInputOuterMainBox>
        </Box>
      </StepTwoBox>
      <StepTwoBox>
        <UINewTypography variant="h6" color="text.secondary">
          <FormattedMessage id="PreferredLanguage" />*
        </UINewTypography>
        <Box width="100%" display="flex" gap={1.5} flexWrap="wrap">
          {languages?.map((lang, index) => (
            <UINewCheckBox
              value={lang.id.toString()}
              onChange={handleLanguageChange}
              checked={Boolean(values.model_languages.find((x) => x.id == lang.id))}
              label={lang.name}
              key={index}
            />
          ))}
          {touched.model_languages && errors.model_languages && (
            <Box width="100%">
              <FormHelperText error>{errors.model_languages as string}</FormHelperText>
            </Box>
          )}
        </Box>
      </StepTwoBox>
    </StepTwoContainer>
  );
};

export default VerificationBasicDetails;
