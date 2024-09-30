'use client';
import { Box, CircularProgress, Divider, useMediaQuery } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React, { useCallback, useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  MainContainer,
  BoxMessage,
  SecondMainContainer,
  FirstUsdBox,
  SecondUsdBox,
  DollerBox,
  ButtonBox,
  RecentWithdrawlsMainContainer,
  SecondRecentWithdrawlsMainContainer,
  Withdrawls,
  ToSiliconValleyBankMainConatiner,
  FirstToSiliconValleyBankMainConatiner,
  FirstToSiliconValleyBank,
  ImageBox,
  Showtracking,
  ShowtrackingBox,
  Pendingconatiner,
  TextDetail,
  PaginationMainBox,
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
  LoaderBox,
  FirstBoxConatiner,
  SecBoxConatiner
} from './PayoutRequest.styled';
import PayoutWidthDraw from '../payoutWithDraw';
import { BankDetailsListRes, ModelPastPayoutDetailRes } from 'services/payout/types';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import theme from 'themes/theme';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { toast } from 'react-toastify';
import { PayoutService } from 'services/payout/payout.service';
import { ErrorMessage } from 'constants/common.constants';
import { UITheme2Pagination } from 'components/UIComponents/PaginationV2/Pagination.styled';
import { NewStatusBox } from '../payoutsAndInvoicesTable/billingTable/statusDetails';
import PaginationInWords from 'components/UIComponents/PaginationINWords';
import UIVerticalStepper from './VerticalStepper';
import moment from 'moment';
import {
  UINewTypographyAmount,
  UINewTypographyDollar,
  UINewTypographyWithDrawButtonText,
  UINewTypographyWithDrawButtonText2,
  UINewTypographyWithDrawRecentWithdrawls
} from 'views/protectedViews/logout/Logout.styled';
import { NotFoundBox } from '../payoutsAndInvoicesTable/billingTable/BillingTable.styled';
import { useCallFeatureContext } from '../../../../context/CallFeatureContext';
import { WithdrawalAmountDetailsRes } from 'services/withdrawalAmount/type';
import { ModelWithdrawalAmountService } from 'services/withdrawalAmount/withdrawalAmount.services';
import { getErrorMessage } from 'utils/errorUtils';

export type PayoutPaginationType = {
  page: number;
  offset: number;
  pageSize: number;
};

const PayoutContainer = ({
  bankDetailsList,
  token,
  fetchBankDetails,
  modelDetails,
  isLoading
}: {
  bankDetailsList: BankDetailsListRes;
  token: TokenIdType;
  fetchBankDetails: () => void;
  modelDetails: ModelDetailsResponse;
  isLoading: boolean;
}) => {
  const intl = useIntl();

  const [isLoadingContainer, setIsLoadingContainer] = useState(false);
  const { isCallEnded } = useCallFeatureContext();
  const [open, setIsOpen] = useState(false);
  const [payoutStep, setPayoutStep] = useState(0);
  const [modelPayoutList, setModelPayoutList] = useState<ModelPastPayoutDetailRes>();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const [amountSave, setAmountSave] = useState(0);
  const [total_rows, setTotalRows] = useState(0);
  const [filters, setFilters] = useState<PayoutPaginationType>({
    page: 1,
    pageSize: 20,
    offset: 0
  });
  const [withdrawlAmount, setWithdrawlAmount] = useState<WithdrawalAmountDetailsRes>();
  const APPROVED_STEPS = ['Withdrawals requested', 'Transferred'];
  const REJECTED_STEPS = ['Withdrawals requested', 'Admin Rejected'];

  const openDailog = () => {
    if (!isSmUp) {
      setPayoutStep(1);
    }
    setIsOpen(true);
  };

  const closeDailog = () => {
    setIsOpen(false);
  };

  const handlePayoutStep = () => {
    setPayoutStep((prev) => prev + 1);
  };

  const handlePayoutStepSubmit = (step: number) => {
    setPayoutStep(step);
  };

  useEffect(() => {
    const fetchModelPayout = async () => {
      try {
        const ModelPayoutListObject = {
          limit: filters.pageSize,
          offset: filters.offset
        };
        if (token.token) {
          setIsLoadingContainer(true);

          const data = await PayoutService.modelPastPayoutListContainer(ModelPayoutListObject, token.token);
          if (data) {
            setModelPayoutList(data);
            setTotalRows(data.data.aggregate.total_rows);
            setIsLoadingContainer(false);
          }
        }
      } catch (error) {
        toast.error(ErrorMessage);
      }
    };

    fetchModelPayout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.token, token.id, filters]);

  useEffect(() => {
    const fetchWithdrawalAmountDetails = async () => {
      try {
        if (token.token) {
          const data = await ModelWithdrawalAmountService.getWithdrawalAmountDetails(token.token);
          setWithdrawlAmount(data);
        }
      } catch (error) {
        toast.error(ErrorMessage);
      }
    };

    fetchWithdrawalAmountDetails();
  }, [token.token]);

  const getAmount = async () => {
    try {
      if (token.token) {
        const data = await ModelDetailsService.getModelWithDraw(token.token);
        if (data?.code === 200) {
          if (data.data.amount === null) {
            setAmountSave(0);
          } else {
            setAmountSave(data.data.amount);
          }
        } else {
          const errorMessage = getErrorMessage(data?.custom_code);
          toast.error(intl.formatMessage({ id: errorMessage }));
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

  const handleChangeFilter = useCallback((value: PayoutPaginationType) => {
    setFilters(value);
  }, []);

  const handleChangePage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      const offset = (value - 1) * filters.pageSize;
      handleChangeFilter({ ...filters, page: value, offset: offset });
      scrollToTable();
    },
    [filters, handleChangeFilter]
  );

  const scrollToTable = () => {
    const tableElement = document.getElementById('tableSection');
    if (tableElement) {
      tableElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    getAmount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.token, isCallEnded]);

  const getGreetingMessage = () => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const date = new Date();
    const localHour = parseInt(date.toLocaleString('en-US', { hour: '2-digit', hour12: false, timeZone }), 10);

    if (localHour < 12) {
      return <FormattedMessage id="GoodMorning" />;
    } else if (localHour < 18) {
      return <FormattedMessage id="GoodAfternoon" />;
    } else {
      return <FormattedMessage id="GoodEvening" />;
    }
  };

  const handleButtonClick = () => {
    if (modelDetails.email_verified === 0) {
      toast.warning('Please verify your email first.');
    } else if (modelDetails.email_verified === 1) {
      openDailog();
    }
  };

  return (
    <MainContainer>
      {(payoutStep === 0 || isSmUp) && (
        <>
          <BoxMessage>
            <TextDetail variant="h2" color="text.secondary">
              {getGreetingMessage()}, {modelDetails.name}
            </TextDetail>
          </BoxMessage>
          <SecondMainContainer id="tableSection">
            <FirstUsdBox>
              <SecondUsdBox>
                <DollerBox>
                  <UINewTypographyDollar>$</UINewTypographyDollar>
                  <UINewTypographyAmount>{amountSave}</UINewTypographyAmount>
                </DollerBox>
              </SecondUsdBox>

              <FirstBoxConatiner>
                {amountSave && withdrawlAmount?.data?.amount ? (
                  amountSave >= withdrawlAmount.data.amount ? (
                    <ButtonBox variant="contained" onClick={handleButtonClick}>
                      <UINewTypographyWithDrawButtonText>
                        <FormattedMessage id="Withdraw" />
                      </UINewTypographyWithDrawButtonText>
                    </ButtonBox>
                  ) : (
                    <ButtonBox disabled variant="outlined" onClick={handleButtonClick}>
                      <UINewTypographyWithDrawButtonText2>
                        <FormattedMessage id="Withdraw" />
                      </UINewTypographyWithDrawButtonText2>
                    </ButtonBox>
                  )
                ) : (
                  <ButtonBox disabled variant="outlined" onClick={handleButtonClick}>
                    <UINewTypographyWithDrawButtonText2>
                      <FormattedMessage id="Withdraw" />
                    </UINewTypographyWithDrawButtonText2>
                  </ButtonBox>
                )}
                <SecBoxConatiner>
                  <Box component="img" alt="payout_icon" src="/images/icons/payout-icon.png" width={16} height={16} />
                  <UINewTypography>
                    <FormattedMessage id="MinimumWithdrawalAmountIs" /> ${withdrawlAmount?.data.amount}
                  </UINewTypography>
                </SecBoxConatiner>
              </FirstBoxConatiner>
            </FirstUsdBox>
            {isLoadingContainer ? (
              <LoaderBox>
                <CircularProgress />
              </LoaderBox>
            ) : (
              <RecentWithdrawlsMainContainer>
                <SecondRecentWithdrawlsMainContainer>
                  <Withdrawls>
                    <UINewTypographyWithDrawRecentWithdrawls>
                      <FormattedMessage id="RecentWithdrawls" />
                    </UINewTypographyWithDrawRecentWithdrawls>
                  </Withdrawls>
                  {total_rows > 0 ? (
                    modelPayoutList?.data?.payout_details.map((item) => (
                      <ToSiliconValleyBankMainConatiner key={item.id}>
                        <FirstToSiliconValleyBankMainConatiner>
                          <FirstToSiliconValleyBank>
                            <ImageBox>
                              <Box component={'img'} src="/images/payout/home.png" alt="home_icon" />
                            </ImageBox>
                            <Showtracking>
                              <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                                {item.bank_name}
                              </UINewTypography>
                              <ShowtrackingBox>
                                <StyledAccordion>
                                  <StyledAccordionSummary aria-controls="panel1-content" id="panel1-header" expandIcon={<ExpandMoreIcon />}>
                                    <UINewTypography variant="captionLarge">
                                      <FormattedMessage id="ShowTracking" />
                                    </UINewTypography>
                                  </StyledAccordionSummary>
                                  <StyledAccordionDetails>
                                    <UIVerticalStepper
                                      steps={item.state === 'Rejected' ? REJECTED_STEPS : APPROVED_STEPS}
                                      activeStep={item.state === 'Approved' || item.state === 'Rejected' ? 2 : 1}
                                      withDate={item.payout_logs ? moment(item?.payout_logs[0]?.created_at).format('DD/MM/YYYY') : ' '}
                                      tarnsferDate={
                                        item.payout_logs
                                          ? item.payout_logs.length > 1
                                            ? moment(item?.payout_logs[1]?.created_at).format('DD/MM/YYYY')
                                            : ' '
                                          : ''
                                      }
                                    />
                                  </StyledAccordionDetails>
                                </StyledAccordion>
                              </ShowtrackingBox>
                            </Showtracking>
                          </FirstToSiliconValleyBank>
                          <Pendingconatiner>
                            <UINewTypography variant="body" color="text.secondary">
                              - ${item.amount}
                            </UINewTypography>
                            <NewStatusBox status={item.state} sx={{ maxHeight: '25px !important' }}>
                              <UINewTypography
                                variant="captionLarge"
                                color={
                                  item.state === 'Pending'
                                    ? '#FFE500'
                                    : item.state === 'Approved'
                                      ? '#79E028'
                                      : item.state === 'Rejected'
                                        ? '#FF5959'
                                        : '#FFF'
                                }
                              >
                                {item.state === 'Pending' ? (
                                  <FormattedMessage id="Pending" />
                                ) : item.state === 'Approved' ? (
                                  <FormattedMessage id="Completed" />
                                ) : item.state === 'Rejected' ? (
                                  <FormattedMessage id="Cancelled" />
                                ) : (
                                  '-'
                                )}
                              </UINewTypography>
                            </NewStatusBox>
                          </Pendingconatiner>
                        </FirstToSiliconValleyBankMainConatiner>

                        <Divider sx={{ border: '1px solid #232027 ' }} />
                      </ToSiliconValleyBankMainConatiner>
                    ))
                  ) : (
                    <NotFoundBox>
                      <UINewTypography variant="buttonLargeMenu">
                        <FormattedMessage id="DataNotFound" />
                      </UINewTypography>
                    </NotFoundBox>
                  )}
                </SecondRecentWithdrawlsMainContainer>
              </RecentWithdrawlsMainContainer>
            )}

            {total_rows > 0 && (
              <PaginationMainBox>
                <UITheme2Pagination
                  page={filters.page}
                  count={modelPayoutList ? Math.ceil(total_rows / filters.pageSize) : 1}
                  onChange={handleChangePage}
                />
                <PaginationInWords
                  page={filters.page}
                  limit={filters.pageSize}
                  total_rows={total_rows}
                  offset={filters.offset}
                  isEscort={false}
                />
              </PaginationMainBox>
            )}
          </SecondMainContainer>
        </>
      )}

      {(payoutStep === 1 || payoutStep === 2 || isSmUp) && (
        <PayoutWidthDraw
          open={open}
          closeDailog={closeDailog}
          bankDetailsList={bankDetailsList}
          token={token}
          fetchBankDetails={fetchBankDetails}
          handlePayoutStep={handlePayoutStep}
          payoutStep={payoutStep}
          amountSave={amountSave}
          handlePayoutStepSubmit={handlePayoutStepSubmit}
          isLoading={isLoading}
        />
      )}
    </MainContainer>
  );
};

export default PayoutContainer;
