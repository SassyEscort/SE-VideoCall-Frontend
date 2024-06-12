import UINewTypography from 'components/UIComponents/UINewTypography';
import Box from '@mui/material/Box';

import HomeImageCard from 'views/guestViews/homePage/homeImageCards';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import { FormattedMessage } from 'react-intl';
import { HomeExploreBox, SubTitle } from 'views/guestViews/homePage/homeBanner/HomeBanner.styled';
import {
  DetailsChildTypographyBox,
  ExploreEscortText,
  FirstBoxContainer,
  SearchMainContainer,
  SearchSubContainer,
  SecondBoxContainer,
  ThirdBoxContainer
} from './Escort.styled';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';

import NewArrivals from 'views/guestViews/searchPage/searchFilters/NewArrivals';
import CurrentlyOnline from 'views/guestViews/searchPage/searchFilters/CurrentlyOnline';
import CountryFilter from 'views/guestViews/searchPage/searchFilters/CountryFilter';
import AgeFilter from 'views/guestViews/searchPage/searchFilters/AgeFilter';
import Price from 'views/guestViews/searchPage/searchFilters/Price';

const EscortExplore = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobile = useMediaQuery('(max-width:600px)');
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
            <SearchMainContainer>
              <SearchSubContainer>
                <FirstBoxContainer>
                  <NewArrivals />
                  {isMobile && <CurrentlyOnline />}
                </FirstBoxContainer>
                <SecondBoxContainer>
                  <CountryFilter />
                </SecondBoxContainer>
                <ThirdBoxContainer>
                  <AgeFilter />
                  <Price />
                  {!isMobile && <CurrentlyOnline />}
                </ThirdBoxContainer>
              </SearchSubContainer>
            </SearchMainContainer>
          </HomeMainContainer>
        </DetailsChildTypographyBox>
        <Box>
          <HomeImageCard />
        </Box>
      </DetailsChildTypographyBox>
    </>
  );
};

export default EscortExplore;
