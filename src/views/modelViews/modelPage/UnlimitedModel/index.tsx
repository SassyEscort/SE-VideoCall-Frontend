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
import { Box, useMediaQuery } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import theme from 'themes/theme';

const UnlimitedModel = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box sx={{ mt: isSmDown ? 9 : 15 }}>
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
                      fontSize: isSmDown ? '24px !important' : '48px !important',
                      lineHeight: isSmDown ? '36px !important' : '72px'
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
