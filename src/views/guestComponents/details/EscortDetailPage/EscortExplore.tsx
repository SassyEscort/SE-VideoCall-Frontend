import UINewTypography from 'components/UIComponents/UINewTypography';
import Box from '@mui/material/Box';
import CountryFilter from 'views/guestComponents/searchPage/searchFilters/CountryFilter';
import AgeFilter from 'views/guestComponents/searchPage/searchFilters/AgeFilter';
import CurrentlyOnline from 'views/guestComponents/searchPage/searchFilters/CurrentlyOnline';
import NewArrivals from 'views/guestComponents/searchPage/searchFilters/NewArrivals';
import HomeImageCard from 'views/guestComponents/homePage/homeImageCards';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import { HomeExploreBox, SubTitle } from 'views/guestComponents/homePage/homeBanner/HomeBanner.styled';
import { FormattedMessage } from 'react-intl';
import { ExploreEscort } from './Escort.styled';

const EscortExplore = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mt: isSmDown ? 12 : 15 }}>
        <ExploreEscort>
          <HomeExploreBox>
            <UINewTypography
              textAlign="center"
              color="text.secondary"
              sx={{ fontSize: { xs: '24px', sm: '40px' }, fontWeight: 700, lineHeight: { xs: '32px', sm: '52px' } }}
            >
              <FormattedMessage id="ExploreYourChoices" />
            </UINewTypography>
            <SubTitle>
              <FormattedMessage id="SelectTheCompanion" />
            </SubTitle>
          </HomeExploreBox>
        </ExploreEscort>
        <Box sx={{ width: '100%', maxWidth: '711px' }}>
          <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={{ xs: 1.5, sm: 4 }}>
            <Box display="flex" gap={{ xs: 1.5, sm: 4 }} width="100%" maxWidth={{ xs: '267px', sm: '305px' }}>
              <CountryFilter />
              <AgeFilter />
            </Box>
            <Box display="flex" gap={{ xs: 1.5, sm: 4 }} width="100%">
              <CurrentlyOnline />
              <NewArrivals />
            </Box>
          </Box>
        </Box>
        <Box>
          <HomeImageCard />
        </Box>
      </Box>
    </>
  );
};

export default EscortExplore;
