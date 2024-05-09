import { Grid, Box } from '@mui/material';
import WorkerCard from 'views/guestComponents/commonComponents/WorkerCard/WorkerCard';
import { ButtonMainBox, WorkerCardMainBox } from 'views/guestComponents/commonComponents/WorkerCard/WorkerCard.styled';
import HomeMainContainer from 'views/guestComponents/guestLayout/homeContainer';
import UIThemeBorderButton from 'components/UIComponents/UIStyledBorderButton';

const HomeImageCard = () => {
  return (
    <HomeMainContainer>
      <WorkerCardMainBox>
        <Grid container spacing={{ xs: '13px', md: '15px' }} rowGap={{ xs: 2.125, lg: 4 }}>
          {Array.from({ length: 24 }, (_, index) => (
            <Grid key={index} item xs={6} sm={4} md={3} lg={3}>
              <Box display="flex" gap={2} flexDirection="column">
                <WorkerCard />
                {/* <UIThemeShadowButton
                  sx={{
                    padding: 0,
                    maxWidth: '100%',
                    '&.MuiButtonBase-root': { height: { xs: '40px', sm: '44px' } }
                  }}
                  fullWidth
                  variant="contained"
                >
                  <Box display="flex" alignItems="center" gap="10px">
                    <Image src="/images/workercards/video-call.svg" alt="video-call" height={24} width={24} />
                    <UINewTypography color="common.white" variant="bodySemiBold" sx={{ textWrap: 'no-wrap' }}>
                      Start Video Call
                    </UINewTypography>
                  </Box>
                </UIThemeShadowButton> */}
              </Box>
            </Grid>
          ))}
        </Grid>
        <ButtonMainBox>
          <UIThemeBorderButton variant="outlined">Load More</UIThemeBorderButton>
        </ButtonMainBox>
      </WorkerCardMainBox>
    </HomeMainContainer>
  );
};

export default HomeImageCard;
