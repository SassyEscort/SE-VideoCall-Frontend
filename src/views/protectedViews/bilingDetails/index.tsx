'use client';
import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider, useMediaQuery } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';

import theme from 'themes/theme';
import { SecondSubContainerImgWorkerCard } from 'views/guestViews/commonComponents/WorkerCard/WorkerCard.styled';

import {
  DialogTitleContainer,
  MainContainer,
  FirstBox,
  SecondBox,
  ThreeBox,
  ButtonMainContainer,
  BoxImage,
  DialogContentBox,
  DialogBox,
  CreditsMainBox,
  CreditsPriceBox
} from './BillingDetails';
import WorkerCardMobile from 'views/guestViews/commonComponents/mobileWorkerCard';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import { FormattedMessage } from 'react-intl';
import { useCallFeatureContext } from '../../../../context/CallFeatureContext';
import moment from 'moment';
import { CallingService } from 'services/calling/calling.services';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const BillingDetails = ({ open, handleClose, selectDetails }: { open: boolean; handleClose: () => void; selectDetails: any }) => {
  const isSMDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [isCreditAvailable, setIsCreditAvailable] = React.useState(false);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [callTime, setCallTime] = useState(0);
  const [guestData, setguestData] = useState(0);
  const router = useRouter();

  const { handleCallInitiate, call, isCallEnded } = useCallFeatureContext();
  const callDurationString = selectDetails.call_duration;
  const callDuration = moment.duration(callDurationString);
  const hours = Math.floor(callDuration.asHours());
  const minutes = callDuration.minutes();
  const seconds = callDuration.seconds();

  React.useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data.id, token: data.token });
    };

    userToken();
  }, []);
  React.useEffect(() => {
    const getCometChatInfo = async () => {
      if (guestData && token.token) {
        const getInfo = await CallingService.getCometChatInfo(guestData, token.token);
        if (getInfo?.data?.time_unit === 'minutes' && getInfo?.data?.available_call_duration >= 3) {
          const durationInSeconds = moment.duration(getInfo?.data?.available_call_duration, 'minutes').asMilliseconds();
          setCallTime(durationInSeconds);
          setIsCreditAvailable(true);
        }
      }
    };
    getCometChatInfo();
  }, [guestData, token, call, isCallEnded]);
  function formatDuration(hours: number, minutes: number, seconds: number) {
    let message = '';

    if (hours > 0) {
      message += `${hours} hour`;
    }
    if (minutes > 0) {
      if (hours > 0) {
        message += ', ';
      }
      message += `${minutes} minute`;
    }
    if (seconds > 0) {
      if (hours > 0 || minutes > 0) {
        message += ', ';
      }
      message += `${seconds} second`;
    }

    return message;
  }

  const message = formatDuration(hours, minutes, seconds);
  const handelExplore = () => {
    router.push('/');
    handleClose();
  };
  return (
    <DialogBox open={open} onClose={handleClose} fullWidth scroll="body">
      <DialogTitleContainer id="responsive-modal-title">
        <UINewTypography variant="h6" color="secondary.200">
          <FormattedMessage id="Details" />
        </UINewTypography>

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            color: (theme) => theme.palette.text.secondary
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitleContainer>
      <Box>
        <Divider
          sx={{
            border: '1px solid #232027',
            display: { sm: 'block', display: 'none' }
          }}
        />
      </Box>
      <DialogContentBox>
        <MainContainer>
          <WorkerCardMobile modelDetails={selectDetails} />
          <FirstBox>
            <SecondBox>
              <ThreeBox>
                <CreditsMainBox>
                  <UINewTypography variant="buttonLargeMenu" color="secondary.200">
                    <FormattedMessage id=" CreditsUsed" />
                  </UINewTypography>
                  <CreditsPriceBox>
                    <SecondSubContainerImgWorkerCard src="/images/workercards/dollar-img.png" />
                    <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                      {selectDetails.credits}
                    </UINewTypography>
                  </CreditsPriceBox>
                </CreditsMainBox>
                <Box>
                  <UINewTypography variant="SubtitleSmallMedium" color="secondary.200">
                    {moment(selectDetails.created_at).format('hh:mm A, DD MMM YYYY')}
                  </UINewTypography>
                </Box>
              </ThreeBox>
              <Box>
                <UINewTypography variant="SubtitleSmallMedium" color="secondary.200">
                  <FormattedMessage id="Duration" />
                  {message}
                </UINewTypography>
              </Box>
            </SecondBox>
            <ButtonMainContainer>
              <UIThemeShadowButton
                onClick={() => {
                  handleCallInitiate(guestData, isCreditAvailable, callTime, selectDetails.name, selectDetails.link);
                  setguestData(selectDetails.id);
                }}
                sx={{
                  height: 'auto',
                  maxWidth: '100%',
                  '&.MuiButtonBase-root': { height: { xs: '40px', sm: '44px' } }
                }}
                fullWidth
                variant="contained"
              >
                <Box display="flex" alignItems="center" gap="10px">
                  <BoxImage src="/images/workercards/video-call.svg" alt="video-call" />
                  <UINewTypography color="common.white" variant="bodySemiBold" sx={{ whiteSpace: 'nowrap' }}>
                    {isSMDown ? <FormattedMessage id="StartVideoCall" /> : <FormattedMessage id="StartVideoCallAgain" />}
                  </UINewTypography>
                </Box>
              </UIThemeShadowButton>
              <UINewTypography
                onClick={handelExplore}
                variant="bodySemiBold"
                color="#FFFFFF"
                sx={{ textAlign: 'center', cursor: 'pointer' }}
              >
                <FormattedMessage id="ExploreMoreModels" />
              </UINewTypography>
            </ButtonMainContainer>
          </FirstBox>
        </MainContainer>
      </DialogContentBox>
    </DialogBox>
  );
};

export default BillingDetails;
