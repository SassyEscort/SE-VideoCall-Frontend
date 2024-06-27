import Drawer from '@mui/material/Drawer';
import { FilterAccordian, FilterAction, FilterContent, FilterHeader } from './MoreFilters.styled';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import { FormattedMessage } from 'react-intl';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import Close from '@mui/icons-material/Close';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { memo, useCallback, useMemo, useState } from 'react';
import SliderFilter from './SliderFilter';
import PriceFilter from './priceFilter';
import AccordionDetails from '@mui/material/AccordionDetails';
import StatusFilter from './status';
import LanguageFilter from './languageFilter';
import { MultipleOptionString } from 'views/protectedModelViews/verification/stepOne/VerificationStepOne';
import { usePathname, useSearchParams } from 'next/navigation';
import { getQueryParam } from 'utils/genericFunction';
import { HOME_PAGE_SIZE } from 'constants/common.constants';
import { cloneDeep } from 'lodash';
import { useRouter } from 'next/navigation';
import { ModelListingService } from 'services/modelListing/modelListing.services';

const MoreFilters = ({ open, handleClose, languages }: { open: boolean; handleClose: () => void; languages: MultipleOptionString[] }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const url = `${searchParams}`;

  // const { filter: filterName } = url;
  console.log(url, 'url router');

  const initialFilters = useMemo(
    () => ({
      fromAge: getQueryParam('fromAge') ? (getQueryParam('fromAge') as string) : '',
      toAge: getQueryParam('toAge') ? (getQueryParam('toAge') as string) : '',
      fromPrice: getQueryParam('fromPrice') ? (getQueryParam('fromPrice') as string) : '',
      toPrice: getQueryParam('toPrice') ? (getQueryParam('toPrice') as string) : '',
      language: getQueryParam('language') ? (getQueryParam('language') as string) : '',
      isOnline: getQueryParam('isOnline') ? (getQueryParam('isOnline') as string) : '',
      page: Number(getQueryParam('page', 1)),
      pageSize: HOME_PAGE_SIZE
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [open]
  );

  const [filters, setFilters] = useState(cloneDeep(initialFilters));

  const getModelListingWithParams = useCallback(async () => {
    await ModelListingService.getModelListing(filters);
  }, [filters]);

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

  const handleChangeAge = (event: Event, newValue: number | number[]) => {
    setFilters({
      ...filters,
      fromAge: (newValue as number[])[0].toString(),
      toAge: (newValue as number[])[1].toString(),
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

  const handleClickFilter = useCallback(() => {
    const objParams: { [key: string]: string } = {};
    if (filters.fromAge) objParams.fromAge = filters.fromAge ? filters.fromAge.toString() : '';
    if (filters.toAge) objParams.toAge = filters.toAge ? filters.toAge.toString() : '';
    if (filters.page && filters.page > 1) objParams.page = filters.page ? filters.page.toString() : '1';
    if (filters.fromPrice) objParams.fromPrice = filters.fromPrice ? filters.fromPrice.toString() : '';
    if (filters.toPrice) objParams.toPrice = filters.toPrice ? filters.toPrice.toString() : '-';
    if (filters.language) objParams.language = filters.language ? filters.language.toString() : '';
    if (filters.isOnline) objParams.isOnline = filters.isOnline ? filters.isOnline.toString() : '';

    let filterCount = Object.keys(objParams).length;
    const queryString = new URLSearchParams(objParams).toString();

    if (pathname === '/' && filterCount === 0) router.push('/search');
    if (pathname === '/' && filterCount === 1 && objParams.page) return;

    const isMultiple = ['language', 'isOnline', 'page', 'fromPrice', 'fromAge'].filter((x) => Object.keys(objParams).includes(x));

    if (isMultiple.length) router.push(`/?${queryString}`);
    if (filterCount === 0) {
      router.push('/');
    } else if (filterCount === 1) {
      if ((pathname.startsWith('/') && filterCount > 1) || filterCount > 1) {
        router.push(`/?${queryString}`);
      } else {
        router.push(`/${pathname}?${queryString}`);
      }
    }
    getModelListingWithParams();
    handleClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={handleClose}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          maxWidth: 528,
          backgroundColor: 'secondary.dark'
        }
      }}
    >
      <FilterHeader>
        <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
          <UINewTypography variant="h3" fontSize={30} color="white.main">
            <FormattedMessage id="SearchFilter" />
          </UINewTypography>
        </Box>
        <IconButton onClick={handleClose}>
          <Close sx={{ color: 'text.primary', height: 40, width: 40 }} />
        </IconButton>
      </FilterHeader>
      <FilterContent>
        <FilterAccordian>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'text.primary' }} />}>
            <UINewTypography variant="h6" color="text.secondary">
              <FormattedMessage id="Price" />
            </UINewTypography>
          </AccordionSummary>
          <AccordionDetails sx={{ pb: '20px !important' }}>
            <PriceFilter handleChange={handleChangePrice} fromValue={filters?.fromPrice ?? ''} toValue={filters?.toPrice ?? ''} />
          </AccordionDetails>
        </FilterAccordian>
        <FilterAccordian>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'text.primary' }} />}>
            <UINewTypography variant="h6" color="text.secondary">
              <FormattedMessage id="Age" />
            </UINewTypography>
          </AccordionSummary>
          <SliderFilter
            fromValue={Number(filters?.fromAge) ?? 18}
            toValue={Number(filters?.toAge) ?? 60}
            minValue={18}
            maxValue={70}
            handleChange={handleChangeAge}
          />
        </FilterAccordian>
        <FilterAccordian>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'text.primary' }} />}>
            <UINewTypography variant="h6" color="text.secondary">
              <FormattedMessage id="Language" />
            </UINewTypography>
          </AccordionSummary>
          <AccordionDetails>
            <LanguageFilter languages={languages} handleChange={handleChangeLanguage} value={filters.language ?? ''} />
          </AccordionDetails>
        </FilterAccordian>

        <FilterAccordian>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'text.primary' }} />}>
            <UINewTypography variant="h6" color="text.secondary">
              <FormattedMessage id="Status" />
            </UINewTypography>
          </AccordionSummary>
          <AccordionDetails sx={{ pb: '20px !important' }}>
            <StatusFilter handleChange={handleChangeStatus} value={filters.isOnline} />
          </AccordionDetails>
        </FilterAccordian>
      </FilterContent>
      <FilterAction>
        <UIThemeButton variant="text">
          <FormattedMessage id="ResetFilter" />
        </UIThemeButton>
        <UIThemeButton variant="contained" onClick={handleClickFilter}>
          <FormattedMessage id="Apply" />
        </UIThemeButton>
      </FilterAction>
    </Drawer>
  );
};

export default memo(MoreFilters);
