import {
  FilterAccordian,
  FilterAction,
  FilterContent,
  FilterHeader,
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledDrawer,
  TitleSerachBox
} from './MoreFilters.styled';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import { FormattedMessage } from 'react-intl';
import IconButton from '@mui/material/IconButton';
import UINewTypography from 'components/UIComponents/UINewTypography';
import Close from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { memo, useCallback, useEffect, useState } from 'react';
import PriceFilter from './priceFilter';
import AccordionDetails from '@mui/material/AccordionDetails';
import StatusFilter from './status';
import LanguageFilter from './languageFilter';
import { usePathname } from 'next/navigation';
import { getQueryParam } from 'utils/genericFunction';
import { HOME_PAGE_SIZE } from 'constants/common.constants';
import { cloneDeep } from 'lodash';
import { useRouter } from 'next/navigation';
import AgeFilter from './ageFilter';
import GenderFilter from './gender';
import { MultipleOptionString } from 'views/protectedModelViews/verification/stepOne/VerificationStepOne';

const MoreFilters = ({ open, languages, handleClose }: { open: boolean; languages: MultipleOptionString[]; handleClose: () => void }) => {
  const pathname = usePathname();
  const router = useRouter();

  const initialFilters = () => ({
    country: getQueryParam('country') ? (getQueryParam('country') as string) : '',
    fromAge: getQueryParam('fromAge') ? (getQueryParam('fromAge') as string) : '',
    toAge: getQueryParam('toAge') ? (getQueryParam('toAge') as string) : '',
    fromPrice: getQueryParam('fromPrice') ? (getQueryParam('fromPrice') as string) : '',
    toPrice: getQueryParam('toPrice') ? (getQueryParam('toPrice') as string) : '',
    language: getQueryParam('language') ? (getQueryParam('language') as string) : '',
    isOnline: getQueryParam('isOnline') ? (getQueryParam('isOnline') as string) : '',
    sortOrder: getQueryParam('sortOrder') ? (getQueryParam('sortOrder') as string) : '',
    sortField: getQueryParam('sortField') ? (getQueryParam('sortField') as string) : '',
    gender: getQueryParam('gender') ? (getQueryParam('gender') as string) : '',
    page: Number(getQueryParam('page', 1)),
    pageSize: HOME_PAGE_SIZE,
    offset: 0
  });

  const [filters, setFilters] = useState(cloneDeep(initialFilters));

  useEffect(() => {
    // Update filters when the drawer is opened
    if (open) {
      setFilters(cloneDeep(initialFilters()));
    }
  }, [open]);

  const handleChangePrice = (value: string) => {
    const priceRange = value.split('-');
    const fromPriceVal = priceRange[0];

    setFilters({
      ...filters,
      fromPrice: fromPriceVal,
      toPrice: priceRange[1],
      page: 1
    });
  };

  const handleChangeAge = (newValue: string) => {
    const ageRange = newValue.split('-');

    setFilters({
      ...filters,
      fromAge: ageRange[0],
      toAge: ageRange[1],
      page: 1
    });
  };

  const handleChangeLanguage = (value: string) => {
    setFilters({
      ...filters,
      language: value,
      page: 1
    });
  };

  const handleChangeStatus = (value: string) => {
    setFilters({
      ...filters,
      isOnline: value,
      page: 1
    });
  };

  const handleChangeGender = (value: string) => {
    setFilters({
      ...filters,
      gender: value,
      page: 1
    });
  };

  const handleClickFilter = useCallback(() => {
    const objParams: { [key: string]: string } = {};
    if (filters.fromAge) objParams.fromAge = filters.fromAge ? filters.fromAge.toString() : '';
    if (filters.toAge) objParams.toAge = filters.toAge ? filters.toAge.toString() : '';
    if (filters.page && filters.page > 1) objParams.page = filters.page ? filters.page.toString() : '1';
    if (filters.fromPrice) objParams.fromPrice = filters.fromPrice ? filters.fromPrice.toString() : '';
    if (filters.toPrice) objParams.toPrice = filters.toPrice ? filters.toPrice.toString() : '-';
    if (filters.language) objParams.language = filters.language ? filters.language.toString() : '';
    if (filters.isOnline) objParams.isOnline = filters.isOnline ? filters.isOnline.toString() : '';
    if (filters.country) objParams.country = filters.country ? filters.country.toString() : '';
    if (filters.sortOrder) objParams.sortOrder = filters.sortOrder ? filters.sortOrder.toString() : '';
    if (filters.sortField) objParams.sortField = filters.sortField ? filters.sortField.toString() : '';
    if (filters.gender) objParams.gender = filters.gender ? filters.gender.toString() : '';

    let filterCount = Object.keys(objParams).length;
    const queryString = new URLSearchParams(objParams).toString();

    if (pathname === '/' && filterCount === 0) router.push('/');
    if (pathname === '/' && filterCount === 1 && objParams.page) return;

    const isDetailsPage = pathname.startsWith('/details/');
    const isMultiple = [
      'language',
      'isOnline',
      'page',
      'fromPrice',
      'fromAge',
      'toPrice',
      'country',
      'sortOrder',
      'sortField',
      'gender'
    ].filter((x) => Object.keys(objParams).includes(x));

    if (filterCount === 0) {
      if (isDetailsPage) {
        router.push(pathname);
      } else {
        router.push('/');
      }
    } else {
      if (isMultiple.length) {
        if (isDetailsPage) {
          router.push(`${pathname}?${queryString}`);
        } else {
          router.push(`/?${queryString}`);
        }
      } else {
        if (isDetailsPage) {
          router.push(`${pathname}?${queryString}`);
        } else {
          router.push(`/${pathname}?${queryString}`);
        }
      }
    }
    handleClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const handleResetFilter = () => {
    setFilters(initialFilters());
    const objParams: { [key: string]: string } = {};
    const queryString = new URLSearchParams(objParams).toString();

    if (pathname === '/' && !queryString) {
      router.push('/');
    } else if (pathname.startsWith('/details/')) {
      router.push(`${pathname}`);
    } else {
      router.push(`/${pathname}?${queryString}`);
    }

    handleClose();
  };

  return (
    <StyledDrawer anchor="right" open={open} onClose={handleClose}>
      <FilterHeader>
        <TitleSerachBox>
          <UINewTypography variant="h3" fontSize={30} color="white.main">
            <FormattedMessage id="SearchFilter" />
          </UINewTypography>
        </TitleSerachBox>
        <IconButton onClick={handleClose}>
          <Close sx={{ color: 'text.primary', height: 40, width: 40 }} />
        </IconButton>
      </FilterHeader>
      <FilterContent>
        <FilterAccordian>
          <StyledAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'text.primary' }} />}>
            <UINewTypography variant="h6" color="text.secondary">
              <FormattedMessage id="Credits" />
            </UINewTypography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <PriceFilter handleChange={handleChangePrice} fromValue={filters?.fromPrice ?? ''} toValue={filters?.toPrice ?? ''} />
          </StyledAccordionDetails>
        </FilterAccordian>
        <FilterAccordian>
          <StyledAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'text.primary' }} />}>
            <UINewTypography variant="h6" color="text.secondary">
              <FormattedMessage id="Age" />
            </UINewTypography>
          </StyledAccordionSummary>
          <AccordionDetails sx={{ p: '16px 10px 0px 10px !important' }}>
            <AgeFilter fromAge={filters?.fromAge ?? 18} toAge={filters?.toAge ?? 60} handleChange={handleChangeAge} />
          </AccordionDetails>
        </FilterAccordian>
        <FilterAccordian>
          <StyledAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'text.primary' }} />}>
            <UINewTypography variant="h6" color="text.secondary">
              <FormattedMessage id="Language" />
            </UINewTypography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <LanguageFilter handleChange={handleChangeLanguage} value={filters.language ?? ''} languages={languages} />
          </StyledAccordionDetails>
        </FilterAccordian>

        <FilterAccordian>
          <StyledAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'text.primary' }} />}>
            <UINewTypography variant="h6" color="text.secondary">
              <FormattedMessage id="Status" />
            </UINewTypography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <StatusFilter handleChange={handleChangeStatus} value={filters.isOnline} />
          </StyledAccordionDetails>
        </FilterAccordian>
        <FilterAccordian>
          <StyledAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'text.primary' }} />}>
            <UINewTypography variant="h6" color="text.secondary">
              <FormattedMessage id="Gender" />
            </UINewTypography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <GenderFilter handleChange={handleChangeGender} value={filters.gender} />
          </StyledAccordionDetails>
        </FilterAccordian>
      </FilterContent>
      <FilterAction>
        <UIThemeButton variant="text" onClick={handleResetFilter}>
          <FormattedMessage id="ResetFilter" />
        </UIThemeButton>
        <UIThemeButton variant="contained" onClick={handleClickFilter}>
          <FormattedMessage id="Apply" />
        </UIThemeButton>
      </FilterAction>
    </StyledDrawer>
  );
};

export default memo(MoreFilters);
