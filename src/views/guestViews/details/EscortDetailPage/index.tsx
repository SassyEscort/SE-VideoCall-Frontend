'use client';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { EscortSlider } from './EscortSlider';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import EscortSliderMobile from './EscortSliderMobile';
import EscortPersonalDetail from './EscortPersonalDetail';
import EscortExplore from './EscortExplore';
import { GuestDetailsService } from 'services/guestDetails/guestDetails.services';
import { useEffect, useState } from 'react';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import { WorkerPhotos } from 'views/protectedModelViews/verification/stepThree/uploadImage';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';
import { usePathname } from 'next/navigation';
import Box from '@mui/system/Box';
import { CometChatUIKitConstants } from '@cometchat/uikit-resources';
import { CometChat } from '@cometchat/chat-sdk-javascript';
import CallFeature from 'views/protectedViews/callingFeature';

const EscortDetailPage = () => {
  const path = usePathname();
  const userName = path.split('/')[2];

  const [guestData, setGuestData] = useState<ModelDetailsResponse>();
  const [call, setCall] = useState<CometChat.Call | undefined>(undefined);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });

  const isLgDown = useMediaQuery(theme.breakpoints.down('lg'));

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      if (data) {
        setToken({ id: data.id, token: data.token });
      }
    };

    userToken();
  }, []);

  useEffect(() => {
    const fetchGuestData = async () => {
      try {
        if (userName) {
          const data = await GuestDetailsService.GuestModelDetails(userName);
          if (data.code === 200) {
            setGuestData(data.data);
          } else {
            toast.error(data?.response?.data?.message);
          }
        }
      } catch (error) {
        toast.error(ErrorMessage);
      }
    };

    fetchGuestData();
  }, [userName]);

  const handleCallInitiate = () => {
    if (guestData) {
      const callObject = new CometChat.Call(
        guestData.id,
        CometChatUIKitConstants.MessageTypes.video,
        CometChatUIKitConstants.MessageReceiverType.user
      );
      CometChat.initiateCall(callObject).then((c: any) => {
        setCall(c);
      });
    }
  };

  const handleCancelCall = () => setCall(undefined);

  return (
    <>
      <HomeMainContainer>
        <Box sx={{ px: { xs: '15px', lg: '0' } }}>
          {isLgDown ? (
            <EscortSliderMobile
              workerPhotos={guestData?.photos ?? ([] as WorkerPhotos[])}
              modelId={guestData?.id ?? 0}
              token={token}
              handleCallInitiate={handleCallInitiate}
            />
          ) : (
            <EscortSlider
              workerPhotos={guestData?.photos ?? ([] as WorkerPhotos[])}
              modelId={guestData?.id ?? 0}
              token={token}
              handleCallInitiate={handleCallInitiate}
            />
          )}
          <CallFeature call={call} handleCancelCall={handleCancelCall} />
          <EscortPersonalDetail guestData={guestData ?? ({} as ModelDetailsResponse)} />
          <EscortExplore />
        </Box>
      </HomeMainContainer>
    </>
  );
};

export default EscortDetailPage;
