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
import { FormattedMessage } from 'react-intl';

const UnlimitedModel = () => {
  return (
    <Box sx={{ mt: 15 }}>
      <HomeMainModelContainer>
        <PhotoshootExpMainContainer>
          <Banner height={'701px'}>
            <PhotoshootExpWrap>
              <PhotoshootExpContainer>
                <PhotoshootExpTitle>
                  <UINewTypography
                    variant="h2"
                    sx={{
                      color: 'text.secondary',
                      textAlign: 'center',
                      fontWeight: { xs: 600, sm: 700 },
                      fontSize: '48px',
                      lineHeight: '150%'
                    }}
                  >
                    <FormattedMessage id="UnlimitedEarningPotential" />
                  </UINewTypography>
                  <UINewTypography
                    variant="bodyRegular"
                    sx={{
                      width: '100%',
                      textAlign: 'center'
                    }}
                  >
                    <FormattedMessage id="TurnYourTalentInto" />
                  </UINewTypography>
                </PhotoshootExpTitle>

                <PhotoshootExpButton>
                  <Link prefetch={false} href="/register">
                    <UIThemeButton variant="contained">
                      <FormattedMessage id="JoinForFREE" />
                    </UIThemeButton>
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
