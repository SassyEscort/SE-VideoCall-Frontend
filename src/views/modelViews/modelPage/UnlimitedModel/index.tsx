import Link from 'next/link';
import {
  Banner,
  PhotoshootExpButton,
  PhotoshootExpContainer,
  PhotoshootExpMainContainer,
  PhotoshootExpTitle,
  PhotoshootExpWrap
} from './PhotoshootExperience.styled';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import HomeMainModelContainer from 'views/modelViews/modelLayout/homeModelContainer';
import { Box } from '@mui/material';

const UnlimitedModel = () => {
  return (
    <Box sx={{ mt: 15 }}>
      <HomeMainModelContainer>
        <PhotoshootExpMainContainer>
          <Banner>
            <PhotoshootExpWrap>
              <PhotoshootExpContainer>
                <PhotoshootExpTitle>
                  <UINewTypography
                    variant="h2"
                    sx={{
                      color: 'text.secondary',
                      textAlign: 'center',
                      fontWeight: { xs: 600, sm: 700 }
                    }}
                  >
                    Unlimited Earning Potential
                  </UINewTypography>
                  <UINewTypography
                    variant="bodyRegular"
                    sx={{
                      width: '100%',
                      textAlign: 'center'
                    }}
                  >
                    Turn your talent into earnings with no upper limit. Our platform offers the freedom to earn as much as you want, based
                    on your availability and the effort you put in.
                  </UINewTypography>
                </PhotoshootExpTitle>

                <PhotoshootExpButton>
                  <Link prefetch={false} href="/register">
                    <UIThemeButton variant="contained">Join for FREE</UIThemeButton>
                  </Link>
                </PhotoshootExpButton>
              </PhotoshootExpContainer>
            </PhotoshootExpWrap>
          </Banner>
        </PhotoshootExpMainContainer>
      </HomeMainModelContainer>
    </Box>
  );
};

export default UnlimitedModel;
