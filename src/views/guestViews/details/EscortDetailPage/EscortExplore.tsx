import UINewTypography from 'components/UIComponents/UINewTypography';
import Box from '@mui/material/Box';
import HomeImageCard from 'views/guestViews/homePage/homeImageCards';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import { FormattedMessage } from 'react-intl';
import { HomeExploreBox, SubTitle } from 'views/guestViews/homePage/homeBanner/HomeBanner.styled';
import { DetailsChildTypographyBox, ExploreEscortText } from './Escort.styled';
import { useState, useEffect, useCallback } from 'react';
import { ModelHomeListing, ModelListingService } from 'services/modelListing/modelListing.services';
import SearchFilters, { SearchFiltersTypes } from 'views/guestViews/searchPage/searchFilters';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';

const EscortExplore = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  const [modelListing, setModelListing] = useState<ModelHomeListing[]>([]);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [filters, setFilters] = useState<SearchFiltersTypes>();
  const [total_rows, setTotalRows] = useState(0);

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data?.id, token: data?.token });
    };
    userToken();
  }, []);

  const handelFilterChange = async (values: any) => {
    setFilters(values);
    const getModel = await ModelListingService.getModelListing(values);
    setModelListing(getModel.model_details);
    setTotalRows(getModel.aggregate.total_rows);
  };

  const handleChangePage = useCallback(
    (value: number) => {
      if (filters) {
        const offset = (value - 1) * filters?.pageSize;
        setFilters({ ...filters, page: value, offset: offset });
      }
    },
    [filters]
  );

  useEffect(() => {
    handelFilterChange(filters);
  }, [filters]);

  return (
    <>
      <DetailsChildTypographyBox sx={{ gap: 4.25, mt: isSmDown ? 12 : 15 }}>
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
              <SubTitle>
                <FormattedMessage id="SelectTheCompanion" />
              </SubTitle>
            </HomeExploreBox>
          </ExploreEscortText>
          <HomeMainContainer>
            <SearchFilters handelFilterChange={handelFilterChange} />
          </HomeMainContainer>
        </DetailsChildTypographyBox>
        <Box>
          <HomeImageCard
            modelListing={modelListing}
            isFavPage={false}
            token={token}
            filters={filters ?? ({} as SearchFiltersTypes)}
            totalRows={total_rows}
            handleChangePage={handleChangePage}
          />
        </Box>
      </DetailsChildTypographyBox>
    </>
  );
};

export default EscortExplore;
