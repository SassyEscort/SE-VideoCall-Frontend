'use client';
import Box from '@mui/material/Box';
import React, { useCallback, useEffect, useState } from 'react';
import {
  BillingHistoryBoxContainer,
  TextAndBoxContainer,
  BillingHistoryTextContainer,
  BillingHistoryMainContainer,
  BillingUIContainer,
  DateTimeBilling,
  DollarBillingValue,
  TextBoxContainer,
  BillingPaginationBox
} from './BillingHistory.styled';
import MainLayoutNav from '../protectedLayout';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import { UITheme2Pagination } from 'components/UIComponents/PaginationV2/Pagination.styled';
import { CallHistoryPaginationContainer, DividerContainer, FirstBoxContainer, FirstTextContainer } from '../CallHistory/CallHistory.styled';
import { BillingHistoryDetails, ModelBillingHistoryPageDetailsRes, ViewDetailsRes } from 'services/guestBilling/types';
import { toast } from 'react-toastify';
import { ModelBillingHistoryService } from 'services/guestBilling/guestBillingHistory.services';
import { ErrorMessage } from 'constants/common.constants';
import moment from 'moment';
import PaginationInWords from 'components/UIComponents/PaginationINWords';
import { LoaderBox, TextMainContainer } from '../Credites/Credits.styled';
import BillingDetails from '../bilingDetails';
import CircularProgress from '@mui/material/CircularProgress';
import { areObjectsEqual } from 'utils/genericFunction';
import { Chip } from '@mui/material';
import { gaEventTrigger } from 'utils/analytics';

export type billingHistoryParams = {
  category: string;
  details: string;
  limit: number;
  offset: number;
};
export type BillPaginationType = {
  page: number;
  offset: number;
  limit: number;
};

const BillingHistory = ({
  billingData,
  billingFilter,
  token
}: {
  billingData: ModelBillingHistoryPageDetailsRes;
  billingFilter: BillPaginationType;
  token: string;
}) => {
  const [guestBillingHistory, setGuestBillingHistory] = useState<BillingHistoryDetails[]>(billingData?.data?.ledger_details);
  const [total_rows, setTotalRows] = useState(billingData?.data?.aggregate?.total_rows || 0);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectDetails, setSelectDetails] = useState<ViewDetailsRes>();
  const [initialLoad, setInitialLoad] = useState(false);

  const [filters, setFilters] = useState<BillPaginationType>({
    page: 1,
    limit: 20,
    offset: 0
  });

  useEffect(() => {
    const fetchEarningHistoryDetails = async () => {
      try {
        const params = {
          category: '',
          details: '',
          limit: filters.limit,
          offset: filters.offset
        };
        if (token) {
          setIsLoading(true);
          const data = await ModelBillingHistoryService.getBillingHistoryDetails(params, token);
          if (data) {
            setGuestBillingHistory(data?.data?.ledger_details);
            setTotalRows(data?.data?.aggregate?.total_rows);
            setIsLoading(false);
          }
        }
      } catch (error) {
        toast.error(ErrorMessage);
      }
    };
    if (!areObjectsEqual(billingFilter, filters) && initialLoad) {
      fetchEarningHistoryDetails();
      gaEventTrigger('page-load-complete', {
        action: 'page-load-complete',
        category: 'Button',
        label: 'Page load complete'
      });
    } else {
      setInitialLoad(true);
    }
  }, [filters.limit, filters.offset, billingFilter, token]);

  const scrollToTable = () => {
    const tableElement = document.getElementById('tableSection');
    if (tableElement) {
      tableElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChangeFilter = useCallback((value: BillPaginationType) => {
    setFilters(value);
  }, []);

  const handleChangePage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      const offset = (value - 1) * filters.limit;
      handleChangeFilter({ ...filters, page: value, offset: offset });
      scrollToTable();
    },
    [filters, handleChangeFilter]
  );

  const handDetailsOpen = () => {
    setOpen(true);
  };

  const handDetailsClose = () => {
    setOpen(false);
  };
  return (
    <MainLayoutNav variant={'worker'} enlargedFooter={true}>
      <BillingHistoryBoxContainer>
        <TextAndBoxContainer>
          <BillingHistoryTextContainer id={'tableSection'}>
            <UINewTypography variant="h2" color="text.secondary" sx={{ whiteSpace: { xs: 'normal', sm: 'nowrap' } }}>
              <FormattedMessage id="BillingHistory" />
            </UINewTypography>
          </BillingHistoryTextContainer>

          {isLoading ? (
            <LoaderBox>
              <CircularProgress />
            </LoaderBox>
          ) : (
            <BillingHistoryMainContainer>
              {guestBillingHistory && guestBillingHistory?.length > 0 ? (
                guestBillingHistory?.map((list, index) => (
                  <TextMainContainer key={index}>
                    <FirstTextContainer>
                      <BillingUIContainer sx={{ gap: 1.5 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <UINewTypography variant="buttonLargeMenu" color={list.category === 'Credit' ? 'success.100' : 'error.main'}>
                            {list?.category === 'Credit' ? '+' : '-'} {list?.free_credits ? list?.free_credits : list?.credits}{' '}
                            {list?.category}
                          </UINewTypography>
                          {list?.details.startsWith('Admin') &&
                            (list?.details === 'Admin_Debit' ? (
                              <Chip label="Admin Debit" variant="outlined" color="error" />
                            ) : (
                              <Chip label="Admin Credit" variant="outlined" color="success" />
                            ))}
                        </Box>

                        <DateTimeBilling variant="SubtitleSmallMedium" color="text.primary">
                          {moment(list?.created_at).format('LT')}, {moment(list?.created_at).format('DD MMMM YYYY')}
                        </DateTimeBilling>
                      </BillingUIContainer>

                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <DollarBillingValue variant="h6" color="text.secondary">
                          {list?.category === 'Debit' && !list?.details.startsWith('Admin') ? (
                            <TextBoxContainer
                              onClick={() => {
                                handDetailsOpen();
                                setSelectDetails(list as ViewDetailsRes);
                              }}
                            >
                              <FormattedMessage id="ViewDetails" />
                            </TextBoxContainer>
                          ) : (
                            `$${list?.amount} `
                          )}
                        </DollarBillingValue>
                      </Box>
                    </FirstTextContainer>
                    <DividerContainer orientation="horizontal" flexItem />
                  </TextMainContainer>
                ))
              ) : (
                <FirstBoxContainer>
                  <UINewTypography variant="h6">
                    <FormattedMessage id="DataNotFound" />
                  </UINewTypography>
                </FirstBoxContainer>
              )}
            </BillingHistoryMainContainer>
          )}
        </TextAndBoxContainer>
        {total_rows > 0 && (
          <CallHistoryPaginationContainer>
            {total_rows > 0 && (
              <BillingPaginationBox>
                <UITheme2Pagination
                  page={filters.page}
                  count={total_rows ? Math.ceil(total_rows / filters.limit) : 1}
                  onChange={handleChangePage}
                />
                <PaginationInWords
                  page={filters.page}
                  limit={filters.limit}
                  total_rows={total_rows}
                  offset={filters.offset}
                  isBills={true}
                />
              </BillingPaginationBox>
            )}
          </CallHistoryPaginationContainer>
        )}
      </BillingHistoryBoxContainer>
      <BillingDetails open={open} handleClose={handDetailsClose} selectDetails={selectDetails ?? ({} as ViewDetailsRes)} token={token} />
    </MainLayoutNav>
  );
};

export default BillingHistory;
