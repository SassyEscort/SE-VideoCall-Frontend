'use client';
import { useCallback, useEffect, useState } from 'react';
import DashboardLayout from '../../layouts/AdminLayout/DashboardLayout';
import Container from '@mui/material/Container';
import { useParams } from 'next/navigation';
import { adminModelServices } from 'services/adminModel/adminModel.services';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { ModelDetailsRes } from 'services/adminModel/types';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import ProfileCrad from './ProfileCrad';
import { Grid } from '@mui/material';
import UserInformationAccordion from './UserInformationAccordion';
import Box from '@mui/system/Box';
import DetailsApproveReject from './DetailsApproveReject';
import { PAYOUT_ACTION } from 'constants/payoutsConstants';
import StyleBoostAdminButton from 'components/UIComponents/StyleBoostAdminButton';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { adminBoostProfilePlanServices } from 'services/adminBoostProfilePlan/adminBoostProfilePlan.services';

const ModelDetailsPage = () => {
  const { id: modelId } = useParams();
  const [modelData, setModelData] = useState<ModelDetailsRes>();
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });

  const handleModelBoostById = async () => {
    try {
      const res = await adminBoostProfilePlanServices.adminModelBoostById(token.token, Number(modelId));
      if (res.code === 200) {
        toast.success('Free boost added');
        fetchModelData();
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      if (data && token) {
        setToken({ id: data.id, token: data.token });
      }
    };

    userToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchModelData = useCallback(async () => {
    try {
      if (token.token) {
        const data = await adminModelServices.getModelDetails(token.token, Number(modelId));
        if (data) {
          setModelData(data);
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  }, [modelId, token.token]);

  useEffect(() => {
    fetchModelData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.token]);

  const isModelPending = modelData?.data?.profile_status === PAYOUT_ACTION.PENDING;
  const isFreeBoostUsed = modelData?.data?.model_profile_plans?.free_plan_used;

  return (
    <DashboardLayout>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box display="flex" flexDirection="column" gap={3} width="100%">
              <ProfileCrad modelData={modelData as ModelDetailsRes} />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: isModelPending ? 'space-between' : 'end',
                  alignItems: 'center'
                }}
              >
                {isModelPending && <DetailsApproveReject workerId={Number(modelId)} fetchModelData={fetchModelData} />}
                {!isFreeBoostUsed && (
                  <StyleBoostAdminButton onClick={handleModelBoostById}>
                    <UINewTypography variant="buttonLargeMenu">Boost {modelData?.data.name} profile</UINewTypography>
                  </StyleBoostAdminButton>
                )}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <UserInformationAccordion modelData={modelData as ModelDetailsRes} />
          </Grid>
        </Grid>
      </Container>
    </DashboardLayout>
  );
};

export default ModelDetailsPage;
