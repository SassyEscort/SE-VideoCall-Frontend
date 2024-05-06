import { Grid, Box } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import WorkerCard from 'views/guestComponents/commonComponents/WorkerCard/WorkerCard';
import Image from 'next/image';
import { WorkerCardMainBox } from 'views/guestComponents/commonComponents/WorkerCard/WorkerCard.styled';

const HomeImageCard = () => {
  return (
    <WorkerCardMainBox>
      <Grid container maxWidth={1245} spacing={{ xs: 1, md: '15px' }} rowGap={{ xs: 2.5, lg: 4 }}>
        {Array.from({ length: 24 }, (_, index) => (
          <Grid key={index} item xs={6} sm={4} md={3} lg={3}>
            <Box display="flex" gap={2} flexDirection="column">
              <WorkerCard />
              <UIThemeShadowButton
                sx={{
                  padding: 0,
                  maxWidth: { xs: '175px', sm: '100%' },
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
              </UIThemeShadowButton>
            </Box>
          </Grid>
        ))}
      </Grid>
    </WorkerCardMainBox>
  );
};

export default HomeImageCard;
