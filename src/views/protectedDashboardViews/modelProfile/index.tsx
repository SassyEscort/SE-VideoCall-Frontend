'use client';
import { useCallback, useEffect, useState } from 'react';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import DashboardProfile from '..';
import ModelProfileContainer from './ModelProfileContainer';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { getUserDataClient } from 'utils/getSessionData';

const ModelProfile = () => {
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

  const handleModelApiChange = useCallback(() => {
    const modelDetails = async () => {
      const modelData = await ModelDetailsService.getModelDetails(token.token);
      setModelDetails(modelData.data);
    };
    modelDetails();
  }, [token.token]);

  return (
    <DashboardProfile>
      <ModelProfileContainer
        modelDetails={modelDetails ?? ({} as ModelDetailsResponse)}
        token={token}
        handleModelApiChange={handleModelApiChange}
      />
    </DashboardProfile>
  );
};

export default ModelProfile;
