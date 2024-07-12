'use client';
import Link from 'next/link';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { WorkerNavItemContainer } from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/ProfileMenu.styled';
import DashboadrHeaderAuthComponent from './HeaderAuthComponent';
import { useState, useEffect } from 'react';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import ProfileApproval from '../profileApproval';
import { MODEL_ACTIVE_STEP } from 'constants/workerVerification';

const DashboardNavItem = () => {
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [modelDetails, setModelDetails] = useState<ModelDetailsResponse>();

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data.id, token: data.token });
    };

    userToken();
  }, []);

  useEffect(() => {
    const modelDetails = async () => {
      const modelData = await ModelDetailsService.getModelDetails(token.token);
      setModelDetails(modelData.data);
    };
    if (token.token) {
      modelDetails();
    }
  }, [token.id, token.token]);

  console.log(modelDetails?.verification_step, 'modelDetails?.verification_step');

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: 10,
          backgroundColor: 'secondary.dark',
          pr: '0 !important',
          boxShadow: 'none'
        }}
      >
        <WorkerNavItemContainer disableGutters>
          <Box display="flex" gap={6}>
            <Box
              component={Link}
              prefetch={true}
              shallow={true}
              href="/"
              height={{ xs: '26px', md: '36px', sm: '36px' }}
              width={{ xs: '120px', md: '182px', sm: '182px' }}
              display={'flex'}
            >
              <Image
                src="/images/header/headerlogo.png"
                width={182}
                height={36}
                alt="sassy_logo"
                style={{
                  width: '100%',
                  height: 'auto'
                }}
                priority
              />
            </Box>
          </Box>
          <Box display="flex" gap={2}>
            <DashboadrHeaderAuthComponent />
          </Box>
        </WorkerNavItemContainer>
        {modelDetails?.verification_step === MODEL_ACTIVE_STEP.IN_REVIEW && <ProfileApproval />}
      </AppBar>
    </>
  );
};

export default DashboardNavItem;
