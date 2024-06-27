'use client';
import { Box, Divider, useMediaQuery } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React, { useCallback, useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FormattedMessage } from 'react-intl';
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
  StyledAccordionDetails
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
  UINewTypographyWithDrawRecentWithdrawls
} from 'views/protectedViews/logout/Logout.styled';

export type PayoutPaginationType = {
  page: number;
  offset: number;
  pageSize: number;
};

const PayoutContainer = ({
  bankDetailsList,
  token,
  fetchBankDetails,
  modelDetails
}: {
  bankDetailsList: BankDetailsListRes;
  token: TokenIdType;
  fetchBankDetails: () => void;
  modelDetails: ModelDetailsResponse;
}) => {
  const [open, setIsOpen] = useState(false);
  const [payoutStep, setPayoutStep] = useState(0);
  const [modelPayoutList, setModelPayoutList] = useState<ModelPastPayoutDetailRes>();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const [amountSave, setAmountSave] = useState(0);
  const [total_rows, setTotalRows] = useState(0);
  const [filters, setFilters] = useState<PayoutPaginationType>({
    page: 0,
    pageSize: 20,
    offset: 0
  });

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

  useEffect(() => {
    const fetchModelPayout = async () => {
      try {
        const ModelPayoutListObject = {
          limit: filters.pageSize,
          offset: filters.offset
        };
        if (token.token) {
          const data = await PayoutService.modelPastPayoutList(ModelPayoutListObject, token.token);
          if (data) {
            setModelPayoutList(data);
            setTotalRows(data.data.aggregate.total_rows);
          }
        }
      } catch (error) {
        toast.error(ErrorMessage);
      }
    };

    fetchModelPayout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.token, token.id, filters]);

  const getAmount = async () => {
    try {
      if (token.token) {
        const data = await ModelDetailsService.getModelWithDraw(token.token);
        if (data?.code === 200) {
          setAmountSave(data.data.amount);
        } else {
          toast.error(ErrorMessage);
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
    },
    [filters, handleChangeFilter]
  );

  useEffect(() => {
    getAmount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.token]);

  return (
    <MainContainer>
      {(payoutStep === 0 || isSmUp) && (
        <>
          <BoxMessage>
            <TextDetail variant="h2" color="text.secondary">
              <FormattedMessage id="GoodEvening" />, {modelDetails.name}
            </TextDetail>
          </BoxMessage>
          <SecondMainContainer>
            <FirstUsdBox>
              <SecondUsdBox>
                <DollerBox>
                  <UINewTypographyDollar>$</UINewTypographyDollar>
                  <UINewTypographyAmount>{amountSave}</UINewTypographyAmount>
                </DollerBox>
              </SecondUsdBox>

              <ButtonBox variant="contained" onClick={openDailog}>
                <UINewTypographyWithDrawButtonText>
                  <FormattedMessage id="Withdraw" />
                </UINewTypographyWithDrawButtonText>
              </ButtonBox>
            </FirstUsdBox>
            <RecentWithdrawlsMainContainer>
              <SecondRecentWithdrawlsMainContainer>
                <Withdrawls>
                  <UINewTypographyWithDrawRecentWithdrawls>
                    <FormattedMessage id="RecentWithdrawls" />
                  </UINewTypographyWithDrawRecentWithdrawls>
                </Withdrawls>

                {modelPayoutList?.data?.payout_details.map((item) => (
                  <ToSiliconValleyBankMainConatiner key={item.id}>
                    <FirstToSiliconValleyBankMainConatiner>
                      <FirstToSiliconValleyBank>
                        <ImageBox>
                          <Box component={'img'} src="/images/payout/home.png" />
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
                            {item.state === 'Pending'
                              ? 'Pending'
                              : item.state === 'Approved'
                                ? 'Completed'
                                : item.state === 'Rejected'
                                  ? 'Cancelled'
                                  : '-'}
                          </UINewTypography>
                        </NewStatusBox>
                      </Pendingconatiner>
                    </FirstToSiliconValleyBankMainConatiner>

                    <Divider sx={{ border: '1px solid #232027 ' }} />
                  </ToSiliconValleyBankMainConatiner>
                ))}
              </SecondRecentWithdrawlsMainContainer>
            </RecentWithdrawlsMainContainer>

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
          onClose={closeDailog}
          bankDetailsList={bankDetailsList}
          token={token}
          fetchBankDetails={fetchBankDetails}
          handlePayoutStep={handlePayoutStep}
          payoutStep={payoutStep}
          amountSave={amountSave}
        />
      )}
    </MainContainer>
  );
};

export default PayoutContainer;
