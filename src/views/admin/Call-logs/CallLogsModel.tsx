/* eslint-disable @typescript-eslint/no-unused-vars */
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { CallLogDataResponse } from 'services/adminServices/call-list/callListDetailsService';
import { formatDuration } from 'utils/dateAndTime';
import Image from 'next/image';
import { Box } from '@mui/material';
import { useState } from 'react';
import { MainScreenshotBox, MainScreenshotBoxChild, MainScreenshotBoxImage, SelectedImageBox } from './CallLogs.styled';

export const DetailRow = ({ label, value }: { label: string; value: string | number }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
    <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 600 }}>
      {label}
    </Typography>
    <Typography variant="body2" color="textPrimary">
      {value || '-'}
    </Typography>
  </Box>
);

const CallLogsModel = ({
  open,
  onClose,
  selectedPayoutData
}: {
  open: boolean;
  onClose: () => void;
  selectedPayoutData: CallLogDataResponse | null;
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleClick = (link: string) => {
    setSelectedImage(link);
  };

  const handleCloseImageDialog = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
        <DialogTitle
          id="responsive-modal-title"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            padding: '16px 24px',
            backgroundColor: '#f5f5f5'
          }}
        >
          <Typography variant="h6" component="div">
            Call Logs History
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <MainScreenshotBox
          sx={{
            flexDirection: { xs: 'column', md: 'row' }
          }}
        >
          <MainScreenshotBoxChild>
            {selectedPayoutData && (
              <>
                <DetailRow label="Model Name" value={selectedPayoutData?.model_name} />
                <DetailRow label="Model Email" value={selectedPayoutData?.model_email} />
                <DetailRow label="Customer Name" value={selectedPayoutData?.customer_name} />
                <DetailRow label="Customer Email" value={selectedPayoutData?.customer_email} />
                <DetailRow label="Status" value={selectedPayoutData?.status} />
                <DetailRow label="Credits Used" value={selectedPayoutData?.credits_used} />
                <DetailRow label="Call Type" value={selectedPayoutData?.call_type} />
                <DetailRow label="Credits Per Minute" value={selectedPayoutData?.credits_per_minute} />
                <DetailRow label="Rate Per Minute" value={selectedPayoutData?.rate_per_minute} />
                <DetailRow label="Amount Earned" value={selectedPayoutData?.amount_earned} />
                <DetailRow label="Time Duration" value={formatDuration(selectedPayoutData?.duration ?? 0)} />
                <DetailRow label="Ended by" value={selectedPayoutData?.ended_by} />
              </>
            )}
          </MainScreenshotBoxChild>
          <MainScreenshotBoxImage>
            {selectedPayoutData?.screenshots && selectedPayoutData?.screenshots.length > 0 ? (
              selectedPayoutData.screenshots.map((e) => (
                <Image
                  key={e.id}
                  src={e.link}
                  alt="Screenshot"
                  width={200}
                  height={200}
                  style={{ objectFit: 'cover', borderRadius: '4px' }}
                  onClick={() => handleClick(e.link)}
                />
              ))
            ) : (
              <Typography variant="body1" color="textSecondary">
                No screenshot available
              </Typography>
            )}
          </MainScreenshotBoxImage>
        </MainScreenshotBox>
      </Dialog>

      <Dialog open={!!selectedImage} onClose={handleCloseImageDialog} maxWidth="md" fullWidth>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Screenshot</Typography>
          <IconButton onClick={handleCloseImageDialog}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <SelectedImageBox>
          {selectedImage && (
            <Image src={selectedImage} alt="Selected Screenshot" width={900} height={450} style={{ maxWidth: '100%', maxHeight: '80vh' }} />
          )}
        </SelectedImageBox>
      </Dialog>
    </>
  );
};

export default CallLogsModel;
