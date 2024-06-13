import { Grid, Box } from '@mui/material';
import WorkerCard from 'views/guestViews/commonComponents/WorkerCard/WorkerCard';
import { ButtonMainBox, WorkerCardMainBox } from 'views/guestViews/commonComponents/WorkerCard/WorkerCard.styled';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import UIThemeBorderButton from 'components/UIComponents/UIStyledBorderButton';
import { FormattedMessage } from 'react-intl';
import { ModelHomeListing } from 'services/modelListing/modelListing.services';
import Link from 'next/link';

const HomeImageCard = ({ modelListing }: { modelListing: ModelHomeListing[] }) => {
  return (
    <HomeMainContainer>
      <WorkerCardMainBox>
        <Grid container spacing={{ xs: '13px', md: '15px' }} rowGap={{ xs: 0.875, lg: 2.125 }}>
          {modelListing.map((item, index) => (
            <Grid item key={index} xs={6} sm={4} md={3} lg={3}>
              <Box display="flex" gap={2} flexDirection="column">
                <Box
                  component={Link}
                  prefetch={true}
                  shallow={true}
                  href={`/details/${item.user_name}`}
                  sx={{
                    textDecoration: 'none',
                    height: '100%'
                  }}
                >
                  <WorkerCard modelDetails={item} />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <ButtonMainBox>
          <UIThemeBorderButton variant="outlined">
            <FormattedMessage id="LoadMore" />
          </UIThemeBorderButton>
        </ButtonMainBox>
      </WorkerCardMainBox>
    </HomeMainContainer>
  );
};

export default HomeImageCard;
