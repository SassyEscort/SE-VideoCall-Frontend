'use client';
import { Box, Divider, FormHelperText, MenuItem, Paper } from '@mui/material';
import { UIStyledSelectItemContainer } from 'components/UIComponents/UINewSelectItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { priceValueMenuItme } from 'constants/workerVerification';
import * as yup from 'yup';
import React, { Fragment } from 'react';
import { UINewTypographyTextMenuItem } from '../../protectedModelViews/verification/verificationStep2/VerificationStep2.styled';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import { useFormik } from 'formik';
import {
  ButtonConatiner,
  MainConatiner,
  Minute,
  PriceMinute,
  SecondConatiner,
  SelectMenucontainer,
  VideoCall
} from './DashboardPriceView.styled';
import theme from 'themes/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FormattedMessage } from 'react-intl';

export type VerificationStepSecond = {
  price: string;
};
const initialValues = {
  price: ''
};

const validationSchema = yup.object({
  price: yup.string().required('Price title is required')
});

const DashboardPriceView = () => {
  const { errors, values, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {}
  });
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <form onSubmit={handleSubmit}>
      <MainConatiner>
        <UINewTypography variant="h2" color={'text.secondary'}>
          {isSm ? '' : 'Set or Modify your prices'}
        </UINewTypography>
        <SecondConatiner>
          <VideoCall>
            <UINewTypography variant="body" color={'text.secondary'}>
              <FormattedMessage id="VideoCallPrices" />
            </UINewTypography>

            <PriceMinute>
              <Minute>
                <UINewTypography variant="bodySemiBold" color={'text.primary'}>
                  <FormattedMessage id="PriceMinute" />
                </UINewTypography>
                <UINewTypography variant="bodySemiBold" color={'text.primary'}>
                  *
                </UINewTypography>
              </Minute>
              <SelectMenucontainer>
                <UIStyledSelectItemContainer
                  fullWidth
                  id="price"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.price && Boolean(errors.price)}
                  IconComponent={KeyboardArrowDownSharpIcon}
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: touched.price && errors.price ? 'error.main' : 'secondary.light'
                    }
                  }}
                >
                  <Box sx={{ backgroundColor: 'secondary.dark', borderRadius: 1 }}>
                    {priceValueMenuItme.map((type, index: number) => (
                      <Fragment key={index}>
                        <Paper sx={{ backgroundColor: 'inherit' }}>
                          <MenuItem divider={true} value={type.price}>
                            <UINewTypographyTextMenuItem
                              variant="bodySemiBold"
                              color={'text.primary'}
                              sx={{ paddingTop: '14px', paddingBottom: '10px' }}
                            >
                              {type.price}
                            </UINewTypographyTextMenuItem>
                          </MenuItem>
                        </Paper>
                        {index < priceValueMenuItme.length - 1 && (
                          <Divider sx={{ borderColor: 'primary.700', width: '358px', margin: '0 auto' }} />
                        )}
                      </Fragment>
                    ))}
                  </Box>
                </UIStyledSelectItemContainer>
                {touched.price && errors.price && <FormHelperText error>{errors.price}</FormHelperText>}
              </SelectMenucontainer>
            </PriceMinute>
          </VideoCall>
          <ButtonConatiner>
            <UIThemeButton variant="outlined" disabled sx={{ border: '#07030E !important' }}>
              <UINewTypography variant="buttonSmallBold" color={'#58535E'}>
                <FormattedMessage id="CancelChanges" />
              </UINewTypography>
            </UIThemeButton>
            <UIThemeButton variant="outlined" disabled sx={{ border: '#07030E !important' }}>
              <UINewTypography variant="buttonSmallBold" color={'#58535E'}>
                <FormattedMessage id="Save" />
              </UINewTypography>
            </UIThemeButton>
          </ButtonConatiner>
        </SecondConatiner>
      </MainConatiner>
    </form>
  );
};

export default DashboardPriceView;
