import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { ReactNode } from 'react';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import {
  AuthCommonBox,
  AuthFreeCreditsInnerBoxContainer,
  AuthFreeCreditsMainBoxContainer,
  AuthImageBox,
  BackgroundImageBox,
  DescriptionTextMainBoxContainer,
  HeaderText,
  HeaderTextMainBoxContainer,
  TextInnerBoxContainer,
  TextMainBoxContainer
} from './AuthHomePageFreeSignupCommon.styled';
import Timer from './timer';
import { FormattedMessage } from 'react-intl';
import { ROLE } from 'constants/workerVerification';

const AuthHomePageFreeSignupCommon = ({
  onClose,
  variant,
  children,
  role
}: {
  onClose: () => void;
  variant?: string;
  children: ReactNode;
  role: string;
}) => {
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <AuthCommonBox>
      <AuthFreeCreditsMainBoxContainer>
        <IconButton
          size="large"
          sx={{
            color: 'common.white',
            position: 'absolute',
            top: 0,
            right: { xs: 0, sm: '-84px' }
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </AuthFreeCreditsMainBoxContainer>

      <BackgroundImageBox variant={role}>
        <AuthImageBox variant={role} />
        {isSmUp && role === ROLE.CUSTOMER && (
          <AuthFreeCreditsInnerBoxContainer>
            <Box component="img" src="/images/home/gitftsecond.png" alt="gift_icon" width={170} height={210} />
            <TextMainBoxContainer>
              <TextInnerBoxContainer>
                <Box component="img" src="/images/workercards/coin-1.png" alt="coin_icon" width={20} height={20} />
                <HeaderTextMainBoxContainer>
                  <HeaderText>
                    <FormattedMessage id="FREECall" />
                  </HeaderText>
                </HeaderTextMainBoxContainer>
              </TextInnerBoxContainer>
              <DescriptionTextMainBoxContainer>
                <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                  <FormattedMessage id="JoinNowAndEnjoyAFREEVideo" />
                </UINewTypography>
              </DescriptionTextMainBoxContainer>
            </TextMainBoxContainer>
            <Timer />
          </AuthFreeCreditsInnerBoxContainer>
        )}
        {children}
      </BackgroundImageBox>
    </AuthCommonBox>
  );
};

export default AuthHomePageFreeSignupCommon;
