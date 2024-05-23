'use client';
import { Box, Divider, FormHelperText, MenuItem, Paper, useMediaQuery } from '@mui/material';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import React from 'react';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';

import * as yup from 'yup';
import { VerificationStepSecond } from 'constants/workerVerification';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import UINewTypography from 'components/UIComponents/UINewTypography';
import theme from 'themes/theme';
import {
  BackButtonBox,
  ButtonBox,
  InputTypeBoxOne,
  InputTypeBoxSecond,
  ParentBox,
  UINewTypographyTextMenuItem,
  UploaddocumentsButtonBox,
  VerificationStep2MainContainer,
  VerificationStep2MainContainerSecond,
  VerificationStep2MainContainerThree
} from './VerificationStep2.styled';
import { useFormik } from 'formik';
import { VerificationStepService } from 'services/modelAuth/verificationStep.service';
import { UIStyledSelectItemContainer } from 'components/UIComponents/UINewSelectItem';
import { FormattedMessage } from 'react-intl';
import { VerificationPayload } from 'services/modelAuth/types';
import { TokenIdType } from '..';
import { toast } from 'react-toastify';

export type VerificationStepSecond = {
  idType: string;
  idNumber: string;
};

const validationSchema = yup.object({
  idType: yup.string().required('Idtype title is required'),
  idNumber: yup.string().required('Idnumber  is required')
});

const VerificationStep2 = ({
  token,
  handleNext,
  handlePrev,
  handleChaneDocuModal
}: {
  token: TokenIdType;
  handleNext: () => void;
  handlePrev: () => void;
  handleChaneDocuModal: (val: boolean) => void;
}) => {
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const initialValues = {
    idType: '',
    idNumber: ''
  };

  const { errors, values, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const inputPayload: VerificationPayload = {
        id: '1',
        is_document: true,
        photos: [
          {
            url: 'url',
            type: 'image',
            id: 'string',
            cords: 'string',
            is_favourite: 0,
            is_document: 1,
            document_type: values.idType,
            document_number: values.idNumber
          }
        ]
      };
      handleSubmitForm(inputPayload);
    }
  });

  const handleSubmitForm = async (inputPayload: VerificationPayload) => {
    const response = await VerificationStepService.verificationtepSecond(inputPayload, token);
    if (response.data.success) {
      handleChaneDocuModal(true);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ParentBox>
        <VerificationStep2MainContainer>
          <VerificationStep2MainContainerSecond>
            <Box>
              <UINewTypography variant="h2" color={'text.secondary'}>
                <FormattedMessage id="PleaseProvide" />
              </UINewTypography>
            </Box>
            <UINewTypography variant="bodyRegular" color={'text.primary'}>
              <FormattedMessage id="WeUseThisData" />
            </UINewTypography>
          </VerificationStep2MainContainerSecond>

          <VerificationStep2MainContainerThree>
            <InputTypeBoxOne>
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                <UINewTypography variant="bodySemiBold" color="text.primary">
                  <FormattedMessage id="IdType" />
                </UINewTypography>
                <UINewTypography>*</UINewTypography>
              </Box>
              <Box sx={{ maxWidth: '390px', borderRadius: '15px' }}>
                <UIStyledSelectItemContainer
                  fullWidth
                  id="idType"
                  name="idType"
                  value={values.idType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.idType && Boolean(errors.idType)}
                  IconComponent={KeyboardArrowDownSharpIcon}
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: touched.idType && errors.idType ? 'error.main' : 'secondary.light'
                    }
                  }}
                >
                  <Box sx={{ backgroundColor: '#1E0815', borderRadius: '8px' }}>
                    {VerificationStepSecond.map((type, index: number) => (
                      <React.Fragment key={index}>
                        <Paper sx={{ backgroundColor: 'inherit' }}>
                          <MenuItem divider={true} value={type.name}>
                            <UINewTypographyTextMenuItem
                              variant="bodySemiBold"
                              color={'text.primary'}
                              sx={{ paddingTop: '14px', paddingBottom: '10px' }}
                            >
                              {type.name}
                            </UINewTypographyTextMenuItem>
                          </MenuItem>
                        </Paper>
                        {index < VerificationStepSecond.length - 1 && (
                          <Divider sx={{ borderColor: 'primary.700', width: '358px', margin: '0 auto' }} />
                        )}
                      </React.Fragment>
                    ))}
                  </Box>
                </UIStyledSelectItemContainer>
                {touched.idType && errors.idType && <FormHelperText error>{errors.idType}</FormHelperText>}
              </Box>
            </InputTypeBoxOne>

            <InputTypeBoxSecond>
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                <UINewTypography variant="bodySemiBold" color="text.primary">
                  <FormattedMessage id="IdNumber" />
                </UINewTypography>
                <UINewTypography>*</UINewTypography>
              </Box>
              <Box sx={{ maxWidth: '390px' }}>
                <UIStyledInputText
                  fullWidth
                  id="idNumber"
                  name="idNumber"
                  value={values.idNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.idNumber && Boolean(errors.idNumber)}
                  helperText={touched.idNumber && errors.idNumber}
                />
              </Box>
            </InputTypeBoxSecond>
          </VerificationStep2MainContainerThree>
        </VerificationStep2MainContainer>
        <ButtonBox>
          <BackButtonBox>
            <UIThemeButton variant="outlined">
              <ArrowBackOutlinedIcon />

              <UINewTypography variant="buttonLargeBold" color="text.secondary">
                <FormattedMessage id="Back" />
              </UINewTypography>
            </UIThemeButton>
          </BackButtonBox>
          <UploaddocumentsButtonBox>
            <UIThemeButton variant="contained" type="submit">
              <ArrowForwardOutlinedIcon />

              <UINewTypography variant="buttonLargeBold" color="primary.200">
                {isSm ? <FormattedMessage id="Next" /> : <FormattedMessage id="UploadDocuments" />}
              </UINewTypography>
            </UIThemeButton>
          </UploaddocumentsButtonBox>
        </ButtonBox>
      </ParentBox>
    </form>
  );
};

export default VerificationStep2;
