'use client';

import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import InvoiceDate from './searchFilters/invoiceDate';
import Status from './searchFilters/status';
import {
  FilterDropdownBox,
  FilterMainBox,
  MainBox,
  ResetMainBox,
  SecondBox,
  StackBox,
  TableBox,
  TypographyBox,
  UINewTypographyBox
} from './payoutsAndInvoicesTable.styled';
import BillingTable from './billingTable/BillingTable';
import PaginationSearch from './searchFilters/paginationSearch/PaginationSearch';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { Divider } from '@mui/material';
import { useState } from 'react';

const PayoutsAndInvoices = () => {
  const [searchString, setSearchString] = useState('');
  const handleChangeSearch = (val: string) => {
    setSearchString(val);
  };
  return (
    <>
      <HomeMainContainer>
        <MainBox>
          <SecondBox>
            <UINewTypographyBox>
              <FormattedMessage id="YourPastPayouts" />
            </UINewTypographyBox>
          </SecondBox>
          <FilterDropdownBox>
            <StackBox direction="row" color="text.secondary">
              <PaginationSearch placeholder={'Search'} handleChangeSearch={handleChangeSearch} />
            </StackBox>
            <FilterMainBox>
              <InvoiceDate />
              <Status />
            </FilterMainBox>
            <ResetMainBox>
              <Divider orientation="vertical" flexItem sx={{ borderColor: 'text.disabled', height: '40px', alignItems: 'center' }} />
              <UINewTypography variant="bodyLight" color="text.disabled">
                <FormattedMessage id="Reset" />
              </UINewTypography>
            </ResetMainBox>
          </FilterDropdownBox>
          <TypographyBox>
            <UINewTypography variant="SubtitleSmallMedium">
              <FormattedMessage id="TotalOfInvoices" />
            </UINewTypography>
          </TypographyBox>
          <TableBox>
            <BillingTable searchString={searchString} />
          </TableBox>
        </MainBox>
      </HomeMainContainer>
    </>
  );
};

export default PayoutsAndInvoices;
