'use client';
import { FormHelperText, MenuItem } from '@mui/material';
import { UIStyledSelectItemContainer } from 'components/UIComponents/UINewSelectItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import * as yup from 'yup';
import React, { useEffect, useState } from 'react';
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
import { DashboardService } from 'services/modelAuth/dashboard.price.service';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { PriceValue } from 'services/modelAuth/types';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';

export type PricePerMinute = {
  price_per_minute_id: string;
};
export type VerificationStepSecond = {
  price: string;
};

const validationSchema = yup.object({
  price: yup.string().required('Price title is required')
});

const DashboardPriceView = ({
  token,
  modelDetails,
  handleModelApiChange
}: {
  token: TokenIdType;
  modelDetails: ModelDetailsResponse;
  handleModelApiChange: () => void;
}) => {
  const initialValues = {
    price: (modelDetails?.video_call_prices?.length && modelDetails?.video_call_prices[0]?.price_per_minute_id) || ''
  };
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const [priceValue, setPriceValue] = useState<PriceValue[]>([]);

  const { errors, values, touched, handleBlur, handleChange, handleSubmit, handleReset } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const inputPayload: PricePerMinute = {
        price_per_minute_id: values.price
      };
      handleSubmitForm(inputPayload);
    }
  });

  useEffect(() => {
    if (!values.price) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [values.price]);

  useEffect(() => {
    handleModelApiChange();
    const priceData = async () => {
      const data = await DashboardService.dashboardGetPriceDetails();
      setPriceValue(data.data);
    };
    priceData();
  }, []);

  const handleSubmitForm = async (inputPayload: PricePerMinute) => {
    try {
      setLoading(true);
      const response = await DashboardService.dashboardPrice(inputPayload, token.token);
      if (response?.data) {
        toast.success(response?.message);
      } else {
        toast.error(response?.message?.message);
      }
    } catch (error) {
      toast.error(ErrorMessage);
    } finally {
      setLoading(false);
    }
  };

  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <form onSubmit={handleSubmit}>
      <MainConatiner>
        <UINewTypography variant="h2" color={'text.secondary'}>
          <FormattedMessage id={isSm ? 'MyProfile' : 'SetOrModifyYourPrices'} />
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
                  {priceValue?.map((type, index: number) => (
                    <MenuItem
                      value={type?.id}
                      key={type?.id}
                      sx={{
                        '& .MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
                          backgroundColor: 'red !important'
                        }
                      }}
                    >
                      <UINewTypographyTextMenuItem
                        variant="bodySemiBold"
                        color={'text.primary'}
                        sx={{ paddingTop: '14px', paddingBottom: '10px' }}
                      >
                        {type.price_per_minute}
                      </UINewTypographyTextMenuItem>
                    </MenuItem>
                  ))}
                </UIStyledSelectItemContainer>
                {touched.price && errors.price && <FormHelperText error>{errors.price}</FormHelperText>}
              </SelectMenucontainer>
            </PriceMinute>
          </VideoCall>
          <ButtonConatiner>
            <UIThemeButton variant={disable ? 'outlined' : 'contained'} disabled={!disable} loading={loading}>
              <UINewTypography variant="buttonSmallBold" onClick={handleReset}>
                <FormattedMessage id="CancelChanges" />
              </UINewTypography>
            </UIThemeButton>
            <UIThemeButton
              variant={disable ? 'contained' : 'outlined'}
              type="submit"
              sx={{ border: '#07030E !important' }}
              disabled={!disable}
              loading={loading}
            >
              <UINewTypography variant="buttonSmallBold" color={disable ? '#000' : '#58535E'}>
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
