import React from 'react';
import UINewTypography from '../UINewTypography';
import { FormattedMessage } from 'react-intl';

function PaginationInWords({
  page,
  limit,
  total_rows,
  offset,
  isEscort,
  isCall,
  isBills,
  ratingAndReview
}: {
  page: number;
  limit: number;
  total_rows: number;
  offset: number;
  isEscort?: boolean;
  isCall?: boolean;
  isBills?: boolean;
  ratingAndReview?: boolean;
}) {
  return (
    <UINewTypography variant="SubtitleSmallRegular">
      <FormattedMessage id="Showing" /> {offset + 1} <FormattedMessage id="To" />{' '}
      {page > 0 ? (page * limit > total_rows ? total_rows : page * limit) : limit > total_rows ? total_rows : limit}{' '}
      <FormattedMessage id="Of" /> {total_rows}{' '}
      {isBills ? (
        'bills'
      ) : isCall ? (
        <FormattedMessage id="calls" />
      ) : isEscort ? (
        <FormattedMessage id="models" />
      ) : ratingAndReview ? (
        <FormattedMessage id="Reviews" />
      ) : (
        <FormattedMessage id="withdrawls" />
      )}
    </UINewTypography>
  );
}

export default PaginationInWords;
