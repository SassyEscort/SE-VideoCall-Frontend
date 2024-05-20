'use client';
import { Box } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import React from 'react';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import {
  InputTypeBoxOne,
  InputTypeBoxSecond,
  VerificationStep2MainContainer,
  VerificationStep2MainContainerSecond,
  VerificationStep2MainContainerThree
} from './VerificationStep2';
import * as yup from 'yup';
import { Formik } from 'formik';

export type VerificationStepSecond = {
  idType: string;
  idNumber: string;
};
const VerificationStep2 = () => {
  const validationVerificationSchema = yup.object({
    idType: yup.string().required('Idtype is required'),
    idNumber: yup.string().required('Idnumber is required')
  });
  return (
    <Formik
      initialValues={{
        idType: '',
        idNumber: ''
      }}
      validationSchema={validationVerificationSchema}
      onSubmit={(values) => {}}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
        return (
          <VerificationStep2MainContainer>
            <VerificationStep2MainContainerSecond>
              <Box>
                <UINewTypography variant="h2" color={'text.secondary'}>
                  Please provide your documents
                </UINewTypography>
              </Box>
              <UINewTypography variant="bodyRegular" color={'text.primary'}>
                We use this data to verify if you are eligible to generate income on the platform.
              </UINewTypography>
            </VerificationStep2MainContainerSecond>

            <VerificationStep2MainContainerThree>
              <InputTypeBoxOne>
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                  <UINewTypography variant="bodySemiBold" color="text.primary">
                    ID type
                  </UINewTypography>
                  <UINewTypography>*</UINewTypography>
                </Box>
                <Box sx={{ maxWidth: '390px' }}>
                  <UIStyledInputText
                    fullWidth
                    id="idType"
                    name="idType"
                    value={values.idType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.idType && Boolean(errors.idType)}
                    helperText={touched.idType && errors.idType}
                    InputProps={{
                      endAdornment: (
                        <Box>
                          <KeyboardArrowDownSharpIcon />
                        </Box>
                      )
                    }}
                  />
                </Box>
              </InputTypeBoxOne>

              <InputTypeBoxSecond>
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                  <UINewTypography variant="bodySemiBold" color="text.primary">
                    ID number
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
                  ></UIStyledInputText>
                </Box>
              </InputTypeBoxSecond>
            </VerificationStep2MainContainerThree>
          </VerificationStep2MainContainer>
        );
      }}
    </Formik>
  );
};

export default VerificationStep2;
