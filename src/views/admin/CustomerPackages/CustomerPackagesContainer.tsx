'use client';
import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/AdminLayout/DashboardLayout';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Box from '@mui/material/Box';
import Packages from './Packages';
import AddEditCustomerPackages from './AddEditCustomerPackages';
import { adminCustomerPackagesServices, AdminPackagesRes } from 'services/adminCustomerPackages/adminCustomerPackages.services';
import { useAuthContext } from 'contexts/AuthContext';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import DeleteModal from 'components/UIComponents/DeleteModal';
import { MainTitleBox } from './CustomerPackage.styled';

function CustomerPackagesContainer() {
  const [open, setOpen] = useState(false);
  const { token } = useAuthContext();
  const [packages, setPackages] = useState<AdminPackagesRes[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<AdminPackagesRes | null>(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handelFetchPackages = async () => {
    if (token.token) {
      const res = await adminCustomerPackagesServices.getCustomerPackages(token.token);
      setPackages(res?.data?.plans);
    }
  };

  const handelEditPackages = (item: AdminPackagesRes) => {
    setSelectedPackage(item);
    setOpen(true);
  };

  const handelDeletePackages = (item: AdminPackagesRes) => {
    setSelectedPackage(item);
    setOpenDeleteModal(true);
  };

  const handelDeletePackage = async (id: number) => {
    try {
      if (token.token && id) {
        const res = await adminCustomerPackagesServices.deletePackageById(id, token.token);
        if (res) {
          if (res.code === 200) {
            toast.success('Success');
            handelFetchPackages();
          }
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
    setOpenDeleteModal(false);
  };

  const handelClose = () => {
    setOpen(false);
    setSelectedPackage(null);
  };

  useEffect(() => {
    handelFetchPackages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <MainLayout>
      <MainTitleBox>
        <Typography variant="h4" gutterBottom>
          Create and edit packages
        </Typography>
        <Box>
          <Button
            size="large"
            variant="text"
            startIcon={<AddBoxIcon />}
            onClick={() => setOpen(true)}
            sx={{ width: '100%', color: 'primary.400' }}
          >
            Add package
          </Button>
        </Box>
      </MainTitleBox>

      <Packages packages={packages} handelEditPackages={handelEditPackages} handelDeletePackages={handelDeletePackages} />

      <AddEditCustomerPackages
        open={open}
        onClose={handelClose}
        selectedPackages={selectedPackage}
        handelFetchPackages={handelFetchPackages}
      />

      <DeleteModal
        open={openDeleteModal}
        handleClose={() => {
          setOpenDeleteModal(false);
        }}
        handleDeleteClick={() => selectedPackage && handelDeletePackage(selectedPackage?.id)}
      />
    </MainLayout>
  );
}

export default CustomerPackagesContainer;
