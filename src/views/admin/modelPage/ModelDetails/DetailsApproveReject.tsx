import Close from '@mui/icons-material/Close';
import Check from '@mui/icons-material/Check';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { adminModelServices } from 'services/adminModel/adminModel.services';
import RejectModal from '../RejectModal';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';
import { MODEL_ACTION } from 'constants/profileConstants';
import { toast } from 'react-toastify';

interface DetailsApproveRejectProps {
  workerId: number;
  fetchModelData: () => void;
}

const DetailsApproveReject = ({ workerId, fetchModelData }: DetailsApproveRejectProps) => {
  const [loading, setLoading] = useState(false);
  const [openReject, setOpenReject] = useState(false);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });

  const handleApproveClick = async () => {
    setLoading(true);
    try {
      await adminModelServices.modelAction(token.token, Number(workerId), MODEL_ACTION.APPROVE, true);
      toast.success('Model Approved');
    } catch (error) {
      toast.error('error');
    } finally {
      setLoading(false);
      handleCloseMenu();
      fetchModelData();
    }
  };

  const handleCloseMenu = () => {
    setOpenReject(false);
    fetchModelData();
  };

  const handleOpenRejectClick = () => {
    setOpenReject(true);
  };

  const handleCloseRejectClick = () => {
    setOpenReject(false);
  };

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      if (data) {
        setToken({ id: data.id, token: data.token });
      }
    };

    userToken();
  }, []);

  return (
    <>
      {loading ? (
        <CircularProgress size={24} />
      ) : (
        <Box>
          <Button variant="outlined" color="success" sx={{ mr: 2 }} startIcon={<Check />} onClick={handleApproveClick}>
            Approve
          </Button>
          <Button variant="outlined" color="error" startIcon={<Close />} onClick={handleOpenRejectClick}>
            Reject
          </Button>
        </Box>
      )}
      <RejectModal
        open={openReject}
        handleClose={handleCloseRejectClick}
        selectedId={workerId as number}
        handleCloseMenu={handleCloseMenu}
      />
    </>
  );
};

export default DetailsApproveReject;
