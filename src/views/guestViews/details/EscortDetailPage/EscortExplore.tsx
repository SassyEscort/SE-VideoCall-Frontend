import UINewTypography from 'components/UIComponents/UINewTypography';
import Box from '@mui/material/Box';
import HomeImageCard from 'views/guestViews/homePage/homeImageCards';
import theme from 'themes/theme';
import { FormattedMessage } from 'react-intl';
import { HomeExploreBox, SubTitle } from 'views/guestViews/homePage/homeBanner/HomeBanner.styled';
import { DetailsChildTypographyBox, ExploreEscortText, ExploreModelsBox } from './Escort.styled';
import { useState, useEffect, useCallback, useRef } from 'react';
import { ModelHomeListing, ModelListingService } from 'services/modelListing/modelListing.services';
import SearchFilters, { SearchFiltersTypes } from 'views/guestViews/searchPage/searchFilters';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import BackdropProgress from 'components/UIComponents/BackDropProgress';
import { HOME_PAGE_SIZE } from 'constants/common.constants';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useAuthContext } from '../../../../contexts/AuthContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import UIThemeBorderButton from 'components/UIComponents/UIStyledBorderButton';
import { gaEventTrigger } from 'utils/analytics';

const EscortExplore = () => {
  const { isFreeCreditAvailable, fetchPageName } = useAuthContext();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [modelListing, setModelListing] = useState<ModelHomeListing[]>([]);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  // const [filters, setFilters] = useState<SearchFiltersTypes>();
  const [total_rows, setTotalRows] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isUserInteracted, setIsUserInteracted] = useState(false);

  const initialRender = useRef(true);
  const scrollRender = useRef(true);
  const searchFiltersRef = useRef<HTMLDivElement>(null);

  const getInitialFilters = () => ({
    fromAge: searchParams.get('fromAge') ? (searchParams.get('fromAge') as string) : '',
    toAge: searchParams.get('toAge') ? (searchParams.get('toAge') as string) : '',
    fromPrice: searchParams.get('fromPrice') ? (searchParams.get('fromPrice') as string) : '',
    toPrice: searchParams.get('toPrice') ? (searchParams.get('toPrice') as string) : '',
    language: searchParams.get('language') ? (searchParams.get('language') as string) : '',
    isOnline: searchParams.get('isOnline') ? (searchParams.get('isOnline') as string) : '',
    country: searchParams.get('country') ? (searchParams.get('country') as string) : '',
    region: searchParams.get('region') ? (searchParams.get('region') as string) : '',
    sortOrder: searchParams.get('sortOrder') ? (searchParams.get('sortOrder') as string) : '',
    sortField: searchParams.get('sortField') ? (searchParams.get('sortField') as string) : '',
    gender: searchParams.get('gender') ? (searchParams.get('gender') as string) : '',
    page: Number(searchParams?.get('page') || 1),
    pageSize: HOME_PAGE_SIZE,
    offset: (Number(searchParams.get('page') ?? 1) - 1) * HOME_PAGE_SIZE || 0,
    email: searchParams.get('email') ? searchParams?.get('email')?.toString() : ''
  });

  const [filters, setFilters] = useState(getInitialFilters());

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data?.id, token: data?.token });
    };
    userToken();
  }, []);

  const handleCHangeSearchFilter = useCallback(() => {
    const objParams: { [key: string]: string } = {};
    if (filters.fromAge) objParams.fromAge = filters.fromAge ? filters.fromAge.toString() : '';
    if (filters.toAge) objParams.toAge = filters.toAge ? filters.toAge.toString() : '';
    if (filters.page && filters.page > 1) objParams.page = filters.page ? filters.page.toString() : '1';
    if (filters.fromPrice) objParams.fromPrice = filters.fromPrice ? filters.fromPrice.toString() : '';
    if (filters.toPrice) objParams.toPrice = filters.toPrice ? filters.toPrice.toString() : '-';
    if (filters.language) objParams.language = filters.language ? filters.language.toString() : '';
    if (filters.isOnline) objParams.isOnline = filters.isOnline ? filters.isOnline.toString() : '';
    if (filters.country) objParams.country = filters.country ? filters.country.toString() : '';
    if (filters.region) objParams.region = filters.region ? filters.region.toString() : '';
    if (filters.sortOrder) objParams.sortOrder = filters.sortOrder ? filters.sortOrder.toString() : '';
    if (filters.gender) objParams.gender = filters.gender ? filters.gender.toString() : '';
    if (filters.sortField) objParams.sortField = filters.sortField ? filters.sortField.toString() : '';
    if (filters.email) objParams.email = filters.email ? filters.email.toString() : '';

    let filterCount = Object.keys(objParams).length;
    const queryString = new URLSearchParams(objParams).toString();

    if (pathname === '/' && filterCount === 0) {
      router.push('/');
    }
    if (pathname === '/' && filterCount === 1 && objParams.page) return;

    const isDetailsPage = pathname.startsWith('/models/');
    const isMultiple = [
      'language',
      'isOnline',
      'page',
      'fromPrice',
      'fromAge',
      'toPrice',
      'country',
      'region',
      'sortOrder',
      'sortField',
      'gender'
    ].filter((x) => Object.keys(objParams).includes(x));
    if (filterCount === 0) {
      if (isDetailsPage) {
        const credit = searchParams.get('credit');
        if (!credit) router.push(pathname);
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
        } else if (objParams.email) {
          return;
        } else {
          router.push(`/${pathname}?${queryString}`);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, pathname, router]);

  const handelFilterChange = async (values: SearchFiltersTypes | undefined) => {
    setIsLoading(true);
    if (values) {
      const getModel = await ModelListingService.getModelListing(values, token.token);
      setModelListing(getModel?.model_details);
      setTotalRows(getModel?.aggregate?.total_rows);
      if (scrollRender.current === false) {
        scrollToTable();
      } else {
        scrollRender.current = false;
      }
    }
    setIsLoading(false);
  };

  const handleChangePage = useCallback(
    (value: number) => {
      if (filters) {
        const offset = (value - 1) * filters?.pageSize;
        setFilters({ ...filters, page: value, offset: offset });
        handelFilterChange({ ...filters, page: value, offset: offset });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filters]
  );

  const scrollToTable = () => {
    const tableElement = document.getElementById('tableSection');
    if (tableElement) {
      tableElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handelFiltersFormSearch = (value: SearchFiltersTypes) => {
    const newFilters = { ...filters, ...value };
    setFilters(newFilters);
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    }
    handleCHangeSearchFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  useEffect(() => {
    setFilters(getInitialFilters());
    handelFilterChange(getInitialFilters());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  useEffect(() => {
    const handleScroll = () => {
      setIsUserInteracted(true);
      window.removeEventListener('scroll', handleScroll);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <BackdropProgress open={isLoading} />

      <DetailsChildTypographyBox sx={{ gap: 2.25, mt: isSmDown ? 12 : 7 }}>
        <DetailsChildTypographyBox sx={{ gap: 7 }}>
          <ExploreEscortText>
            <HomeExploreBox>
              <UINewTypography
                textAlign="center"
                color="text.secondary"
                sx={{ fontSize: { xs: '24px', sm: '40px' }, fontWeight: 700, lineHeight: { xs: '32px', sm: '52px' } }}
              >
                <FormattedMessage id="ExploreFrom" />
              </UINewTypography>
              <SubTitle id="tableSection">
                <FormattedMessage id="SelectTheCompanion" />
              </SubTitle>
            </HomeExploreBox>
          </ExploreEscortText>
          <HomeMainContainer>
            <SearchFilters isUserInteracted={isUserInteracted} handelFilterChange={handelFiltersFormSearch} ref={searchFiltersRef} />
          </HomeMainContainer>
        </DetailsChildTypographyBox>
        <ExploreModelsBox>
          <Box>
            <UINewTypography variant="body">
              <FormattedMessage id="RelatedModels" />
            </UINewTypography>
          </Box>
          <Box>
            <UIThemeBorderButton
              sx={{ width: { xs: '100%', sm: '300px' } }}
              href="/"
              onClick={() => {
                const data = {
                  pageName: fetchPageName()
                };
                gaEventTrigger('explore-model-button-click', {
                  action: 'explore-model-button-click',
                  category: 'Button',
                  label: 'Explore mmodel button click',
                  value: JSON.stringify(data)
                });
              }}
            >
              <UINewTypography variant="body" color={'text.secondary'}>
                <FormattedMessage id="ExploreModels" />
              </UINewTypography>
            </UIThemeBorderButton>
          </Box>
        </ExploreModelsBox>
        <Box>
          <HomeImageCard
            modelListing={modelListing}
            isFavPage={false}
            token={token}
            filters={filters ?? ({} as SearchFiltersTypes)}
            totalRows={total_rows}
            handleChangePage={handleChangePage}
            isFreeCreditAvailable={isFreeCreditAvailable}
            isLoading={false}
          />
        </Box>
      </DetailsChildTypographyBox>
    </>
  );
};

export default EscortExplore;
