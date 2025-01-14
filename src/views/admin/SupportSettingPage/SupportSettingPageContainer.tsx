'use client';

import MainLayout from '../layouts/AdminLayout/DashboardLayout';
import { useEffect, useState } from 'react';
import { adminSettingsServices } from 'services/adminSettings/adminSettingsServices';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';
import SupportSettingComponet from './SupportSettingComponet';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useAuthContext } from 'contexts/AuthContext';
import { haveUpdatePermission, isPageAccessiable } from 'utils/Admin/PagePermission';
import { SettingsPage } from 'constants/adminUserAccessConstants';

export type AdminSettingData = {
  id: string;
  category: string;
  label: string;
  content: string;
};

function SupportSettingPageContainer() {
  const router = useRouter();
  const { adminUserPermissions, isAdmin } = useAuthContext();
  const UpdatePermission = (adminUserPermissions ? haveUpdatePermission(SettingsPage, adminUserPermissions) : false) || isAdmin;

  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [data, setData] = useState<AdminSettingData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingButtons, setLoadingButtons] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data.id, token: data.token });
    };

    userToken();
  }, []);

  const handleGetAdminSettings = async () => {
    setIsLoading(true);
    if (token.token) {
      const res = await adminSettingsServices.getAdminSettings(token.token);
      if (res && Array.isArray(res.data)) {
        setData(res.data);
      }
    }
    setIsLoading(false);
  };

  const handleUpdateAdminSettings = async (item: AdminSettingData) => {
    setLoadingButtons((prev) => ({ ...prev, [item.id]: true }));
    try {
      if (token.token) {
        const res = await adminSettingsServices.postAdminSettings(item, token.token);
        if (res.code === 200) {
          toast.success('Settings Updated');
        } else {
          toast.error('Something went wrong');
        }
      }
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setLoadingButtons((prev) => ({ ...prev, [item.id]: false }));
    }
  };

  useEffect(() => {
    handleGetAdminSettings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.token]);

  useEffect(() => {
    if (adminUserPermissions) {
      const isAccessiable = isPageAccessiable(SettingsPage, adminUserPermissions) || isAdmin;
      isAccessiable ? '' : router.push('/admin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminUserPermissions, isAdmin]);

  return (
    <MainLayout>
      {isLoading ? (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <CircularProgress />
        </Box>
      ) : (
        <SupportSettingComponet
          UpdatePermission={UpdatePermission}
          supportSettingData={data}
          handleUpdate={handleUpdateAdminSettings}
          loadingButtons={loadingButtons}
        />
      )}
    </MainLayout>
  );
}

export default SupportSettingPageContainer;
