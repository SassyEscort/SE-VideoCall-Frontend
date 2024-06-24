import React from 'react';
import UINewTypography from '../UINewTypography';
import { FormattedMessage } from 'react-intl';

function PaginationInWords({
  page,
  limit,
  total_rows,
  offset,
  isEscort,
  isCall
}: {
  page: number;
  limit: number;
  total_rows: number;
  offset: number;
  isEscort?: boolean;
  isCall?: boolean;
}) {
  return (
    <UINewTypography variant="SubtitleSmallRegular">
      <FormattedMessage id="Showing" /> {offset + 1} <FormattedMessage id="To" />{' '}
      {page > 0 ? (page * limit > total_rows ? total_rows : page * limit) : limit > total_rows ? total_rows : limit}{' '}
      <FormattedMessage id="Of" /> {total_rows}{' '}
      {isCall ? <FormattedMessage id="calls" /> : isEscort ? <FormattedMessage id="escorts" /> : <FormattedMessage id="withdrawls" />}
    </UINewTypography>
  );
}

export default PaginationInWords;
