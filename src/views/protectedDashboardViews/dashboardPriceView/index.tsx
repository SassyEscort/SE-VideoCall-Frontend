'use client';
import UINewTypography from 'components/UIComponents/UINewTypography';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { ButtonConatiner, MainConatiner, Minute, PriceMinute, SecondConatiner, VideoCall } from './DashboardPriceView.styled';
import theme from 'themes/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FormattedMessage } from 'react-intl';
import { DashboardService } from 'services/modelAuth/dashboard.price.service';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';

export type PricePerMinute = {
  price_per_minute: number;
};
export type VerificationStepSecond = {
  price: string;
};

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
    price: (modelDetails?.video_call_prices?.length && modelDetails?.video_call_prices[0]?.price_per_minute) || ''
  };
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);

  const fetchPriceDetails = async () => {
    try {
      const res = await DashboardService.dashboardGetPriceDetails();
      setMinPrice(res?.data?.min_price);
      setMaxPrice(res?.data?.max_price);
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

  useEffect(() => {
    fetchPriceDetails();
  }, []);

  const validationSchema = yup.object({
    price: yup
      .number()
      .required('Price title is required')
      .min(minPrice, `Price must be at least ${minPrice}`)
      .max(maxPrice, `Price must be at most ${maxPrice}`)
  });

  const { errors, values, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const inputPayload: PricePerMinute = {
        price_per_minute: Number(values.price)
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
              <UIStyledInputText
                fullWidth
                id="price"
                name="price"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.price && Boolean(errors.price)}
                helperText={touched.price && errors.price}
                variant="outlined"
                margin="normal"
              />
            </PriceMinute>
          </VideoCall>
          <ButtonConatiner>
            <StyleButtonV2
              variant={disable ? 'contained' : 'outlined'}
              type="submit"
              sx={{ border: '#07030E !important' }}
              disabled={!disable}
              loading={loading}
            >
              <UINewTypography variant="buttonSmallBold" color={disable ? '#000' : '#58535E'}>
                <FormattedMessage id="Save" />
              </UINewTypography>
            </StyleButtonV2>
          </ButtonConatiner>
        </SecondConatiner>
      </MainConatiner>
    </form>
  );
};

export default DashboardPriceView;
