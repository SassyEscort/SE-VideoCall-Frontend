'use client';
import { Box, FormHelperText, MenuItem, useMediaQuery } from '@mui/material';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { useEffect, useMemo, useState } from 'react';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';

import * as yup from 'yup';
import { DocumentList } from 'constants/workerVerification';
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
  VerificationButtonText,
  VerificationStep2MainContainer,
  VerificationStep2MainContainerSecond,
  VerificationStep2MainContainerThree,
  VerificationTwoHeaderText
} from './VerificationStep2.styled';
import { useFormik } from 'formik';
import { VerificationStepService } from 'services/modelAuth/verificationStep.service';
import { UIStyledSelectItemContainer } from 'components/UIComponents/UINewSelectItem';
import { FormattedMessage } from 'react-intl';
import { VerificationPayload } from 'services/modelAuth/types';
import { TokenIdType } from '..';
import { toast } from 'react-toastify';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';
import { ErrorMessage } from 'constants/common.constants';
import { DocumentDataPhoto, ModelDetailsResponse } from '../verificationTypes';

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
  handleChaneDocuModal,
  modelDetails,
  stepData,
  handleModelApiChange
}: {
  token: TokenIdType;
  handleNext: () => void;
  handlePrev: () => void;
  handleChaneDocuModal: (val: boolean) => void;
  modelDetails: ModelDetailsResponse;
  stepData: number;
  handleModelApiChange: () => void;
}) => {
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const modelDocuments = useMemo(() => {
    if (modelDetails?.documents?.length) return modelDetails.documents[0];
    else return {} as DocumentDataPhoto;
  }, [modelDetails]);

  const [loading, setLoading] = useState(false);

  const initialValues = {
    idType: modelDocuments.id || '',
    idNumber: modelDocuments.document_number || ''
  };

  const { errors, values, touched, handleBlur, handleChange, handleSubmit, setValues } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const selectedDocument = DocumentList.find((item) => item.key === values.idType)?.value;
      const inputPayload: VerificationPayload = {
        id: '1',
        is_document: true,
        photos: [
          {
            link: modelDocuments.link !== null ? modelDocuments.link : null,
            type: 'image',
            id: 'string',
            cords: 'string',
            is_favourite: 0,
            is_document: 1,
            document_type: selectedDocument ?? '',
            document_number: values.idNumber
          }
        ],
        document_upload_step: true
      };
      handleSubmitForm(inputPayload);
    }
  });

  const handleSubmitForm = async (inputPayload: VerificationPayload) => {
    try {
      setLoading(true);
      const response = await VerificationStepService.verificationtepSecond(inputPayload, token);
      if (response?.data) {
        handleChaneDocuModal(true);
        handleModelApiChange();
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      toast.error(ErrorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (modelDetails && modelDetails.documents && modelDetails.documents.length > 0) {
      setValues({
        idType: DocumentList.find((item) => item.value === modelDetails.documents[0].document_type)?.key || '',
        idNumber: modelDetails.documents[0].document_number
      });
    } else {
      setValues({
        idType: '',
        idNumber: ''
      });
    }
  }, [modelDetails, setValues]);

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
                <VerificationTwoHeaderText variant="bodySemiBold" color="text.primary">
                  <FormattedMessage id="IdType" />
                </VerificationTwoHeaderText>
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
                    },
                    '& .MuiSelect-select': { padding: '0px' },
                    height: '50px'
                  }}
                >
                  {DocumentList.map((type, index: number) => (
                    <MenuItem
                      value={type.key}
                      key={index}
                      sx={{
                        '& .MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
                          backgroundColor: 'red !important'
                        }
                      }}
                    >
                      <UINewTypographyTextMenuItem
                        variant="bodySemiBold"
                        color={'text.primary'}
                        sx={{ paddingTop: 1.5, paddingBottom: 1.5 }}
                      >
                        {type.key}
                      </UINewTypographyTextMenuItem>
                    </MenuItem>
                  ))}
                </UIStyledSelectItemContainer>
                {touched.idType && errors.idType && <FormHelperText error>{errors.idType}</FormHelperText>}
              </Box>
            </InputTypeBoxOne>

            <InputTypeBoxSecond>
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                <VerificationTwoHeaderText variant="bodySemiBold" color="text.primary">
                  <FormattedMessage id="IdNumber" />
                </VerificationTwoHeaderText>
                <UINewTypography>*</UINewTypography>
              </Box>
              <Box sx={{ maxWidth: '390px' }}>
                <UIStyledInputText
                  type="number"
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
            <UIThemeButton variant="outlined" onClick={handlePrev}>
              <ArrowBackOutlinedIcon />

              <VerificationButtonText variant="buttonLargeBold" color="text.secondary">
                <FormattedMessage id="Back" />
              </VerificationButtonText>
            </UIThemeButton>
          </BackButtonBox>
          <UploaddocumentsButtonBox>
            <StyleButtonV2 variant="contained" type="submit" loading={loading}>
              <VerificationButtonText variant="buttonLargeBold" color="primary.200">
                {isSm ? <FormattedMessage id="Next" /> : <FormattedMessage id="UploadDocuments" />}
              </VerificationButtonText>
              <ArrowForwardOutlinedIcon />
            </StyleButtonV2>
          </UploaddocumentsButtonBox>
        </ButtonBox>
      </ParentBox>
    </form>
  );
};

export default VerificationStep2;
