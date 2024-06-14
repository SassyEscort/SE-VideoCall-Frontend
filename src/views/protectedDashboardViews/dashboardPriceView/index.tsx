'use client';
import UINewTypography from 'components/UIComponents/UINewTypography';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import {
  ButtonConatiner,
  InputBox,
  MainBoxRightSide,
  MainConatiner,
  Minute,
  PriceMinute,
  RightFirstText,
  RightSecondText,
  RightSideBox,
  RightSideFirstBox,
  SecondConatiner,
  VideoCall
} from './DashboardPriceView.styled';
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
import { CommonServices } from 'services/commonApi/commonApi.services';
import { RiArrowLeftLine, RiArrowRightLine } from 'components/common/customRemixIcons';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
export type PricePerMinute = {
  price_per_minute: number;
};
export type VerificationStepSecond = {
  price: string;
};

const DashboardPriceView = ({
  token,
  modelDetails,
  handleModelApiChange,
  handleNext,
  isEdit
}: {
  token: TokenIdType;
  modelDetails: ModelDetailsResponse;
  handleModelApiChange: () => void;
  handleNext?: () => void;
  isEdit: boolean;
}) => {
  const initialValues = {
    price:
      modelDetails?.video_call_prices?.length && Number(modelDetails?.video_call_prices[0]?.price_per_minute) !== -1
        ? modelDetails?.video_call_prices[0]?.price_per_minute
        : ''
  };
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const [commistionValue, setCommistionValue] = useState(0);
  const [commsionPercentage, setCommisionPercentage] = useState<number>(0);
  const [isChanged, setIsChanged] = useState(false);

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

  const { errors, values, touched, handleBlur, handleSubmit, setFieldValue } = useFormik({
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
    setDisable(values.price !== '');
  }, [values.price]);

  const priceCommissions = async () => {
    try {
      if (token.token) {
        const priceCommissionsValue = await CommonServices.priceCommissions(token.token);
        setCommisionPercentage(priceCommissionsValue.data.percentage);
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

  useEffect(() => {
    priceCommissions();
  }, []);

  const handleSubmitForm = async (inputPayload: PricePerMinute) => {
    try {
      setLoading(true);
      if (token.token) {
        const response = await DashboardService.dashboardPrice(inputPayload, token.token);
        if (response?.code === 200) {
          toast.success('Success');
          if (handleNext) {
            handleNext();
          }
        } else {
          toast.error(ErrorMessage);
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    } finally {
      setLoading(false);
      handleModelApiChange();
    }
  };

  const handlePriceChange = (val: string) => {
    setIsChanged(true);
    setFieldValue('price', Number(val));
    const inputCommissionValue = Number(val) - (Number(val) * commsionPercentage) / 100;
    setCommistionValue(Number(inputCommissionValue.toFixed(2)));
  };

  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <MainConatiner sx={{ alignItems: isEdit ? 'flex-start' : 'center' }}>
        <UINewTypography variant="h2" color="text.secondary">
          <FormattedMessage id={isSm ? 'MyProfile' : 'SetOrModifyYourPrices'} />
        </UINewTypography>
        <SecondConatiner>
          <VideoCall sx={{ alignItems: isEdit ? 'flex-start' : 'center', maxWidth: isEdit ? '680px' : '680px' }}>
            <UINewTypography variant="body" color="text.secondary">
              <FormattedMessage id="VideoCallPrices" />
            </UINewTypography>

            <PriceMinute>
              <Minute>
                <UINewTypography variant="bodySemiBold" color="text.primary">
                  <FormattedMessage id="PriceMinute" />
                </UINewTypography>
                <UINewTypography variant="bodySemiBold" color="text.primary">
                  *
                </UINewTypography>
              </Minute>
              <InputBox>
                <MainBoxRightSide>
                  <RightSideBox>
                    <UIStyledInputText
                      type="number"
                      fullWidth
                      id="price"
                      name="price"
                      value={values.price}
                      onChange={(e) => handlePriceChange(e.target.value)}
                      onBlur={handleBlur}
                      error={touched.price && Boolean(errors.price)}
                      helperText={touched.price && errors.price}
                      variant="outlined"
                      margin="normal"
                    />
                  </RightSideBox>

                  <UINewTypography variant="SubtitleSmallMedium" color="secondary.700">
                    <FormattedMessage id="MinimumPrice" />${minPrice}
                  </UINewTypography>
                </MainBoxRightSide>

                {isChanged && (
                  <RightSideFirstBox>
                    <RightFirstText color="secondary.700">
                      <FormattedMessage id="YoullBeReceiving" />
                    </RightFirstText>
                    <RightSecondText color="text.secondary">${commistionValue}</RightSecondText>
                  </RightSideFirstBox>
                )}
              </InputBox>
            </PriceMinute>
          </VideoCall>
          <ButtonConatiner>
            {!isEdit && (
              <UIThemeButton>
                <>
                  <RiArrowLeftLine />
                  <UINewTypography variant="body">
                    <FormattedMessage id="Back" />
                  </UINewTypography>
                </>
              </UIThemeButton>
            )}
            <StyleButtonV2
              variant={disable ? 'contained' : 'outlined'}
              type="submit"
              sx={{ border: '#07030E !important' }}
              loading={loading}
            >
              {isEdit ? (
                <UINewTypography variant="buttonSmallBold" color={disable ? '#000' : '#58535E'}>
                  <FormattedMessage id="Save" />
                </UINewTypography>
              ) : (
                <>
                  <UINewTypography variant="body">
                    <FormattedMessage id="Next" />
                  </UINewTypography>
                  <RiArrowRightLine />
                </>
              )}
            </StyleButtonV2>
          </ButtonConatiner>
        </SecondConatiner>
      </MainConatiner>
    </form>
  );
};

export default DashboardPriceView;
