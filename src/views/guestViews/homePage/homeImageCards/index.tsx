import { Grid, Box } from '@mui/material';
import WorkerCard from 'views/guestViews/commonComponents/WorkerCard/WorkerCard';
import { ButtonMainBox, WorkerCardMainBox } from 'views/guestViews/commonComponents/WorkerCard/WorkerCard.styled';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import UIThemeBorderButton from 'components/UIComponents/UIStyledBorderButton';
import { FormattedMessage } from 'react-intl';

const HomeImageCard = () => {
  return (
    <HomeMainContainer>
      <WorkerCardMainBox>
        <Grid container spacing={{ xs: '13px', md: '15px' }} rowGap={{ xs: 0.875, lg: 2.125 }}>
          {Array.from({ length: 24 }, (_, index) => (
            <Grid key={index} item xs={6} sm={4} md={3} lg={3}>
              <Box display="flex" gap={2} flexDirection="column">
                <WorkerCard />
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
