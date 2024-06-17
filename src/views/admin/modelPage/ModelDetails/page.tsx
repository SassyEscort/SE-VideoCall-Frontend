'use client';
import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../../views/admin/layouts/AdminLayout/DashboardLayout';
import Container from '@mui/material/Container';
import { useParams } from 'next/navigation';
import { adminModelServices } from 'services/adminModel/adminModel.services';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';

const ModelDetailsPage = () => {
  const { id: modelId } = useParams();
  const [modelData, setModelData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      if (data) {
        setToken({ id: data.id, token: data.token });
      }
    };

    userToken();
  }, []);

  console.log(token);

  const fetchModelData = async () => {
    setIsLoading(false);
    console.log(Number(modelId));
    if (token.token) {
      const data = await adminModelServices.getModelDetails(token.token, Number(modelId));
      console.log(data, 'data');
      console.log(isLoading, 'loading');
      setModelData(data.data);
    }
    setIsLoading(true);
  };
  console.log('modelData', modelData);
  useEffect(() => {
    fetchModelData();
  }, [modelId]);

  return (
    <>
      <DashboardLayout>
        <Container>detais</Container>
      </DashboardLayout>
    </>
  );
};

export default ModelDetailsPage;
