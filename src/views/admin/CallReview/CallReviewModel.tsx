/* eslint-disable @typescript-eslint/no-unused-vars */
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import { useState } from 'react';
import {
  DetailRowBox,
  MainScreenshot,
  MainScreenshotBox,
  MainScreenshotBoxChild,
  MainScreenshotBoxImage,
  SelectedImageBox
} from '../Call-logs/CallLogs.styled';
import { CallReviewDataResponse } from 'services/adminServices/call-review/callReviewService';

export const DetailRow = ({ label, value }: { label: string; value: string | number }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
    <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 600 }}>
      {label}
    </Typography>
    <Typography variant="body2" color="textPrimary">
      {value || (typeof value === 'number' ? 0 : '-')}
    </Typography>
  </Box>
);

const CallReviewModel = ({
  open,
  onClose,
  selectedPayoutData
}: {
  open: boolean;
  onClose: () => void;
  selectedPayoutData: CallReviewDataResponse | null;
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
            Call Review History
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
              <DetailRowBox>
                <DetailRow label="Customer Name" value={selectedPayoutData?.customer_name} />
                <DetailRow label="Duration" value={selectedPayoutData?.duration} />
                <DetailRow label="Model Name" value={selectedPayoutData?.model_name} />
                <DetailRow label="Rejected Reason" value={selectedPayoutData?.rejected_reason} />
                <DetailRow label="Review Type" value={selectedPayoutData?.review_type} />
                <DetailRow label="Screenshot Count" value={selectedPayoutData?.screenshots_count} />
                <DetailRow label="Status" value={selectedPayoutData?.status} />
              </DetailRowBox>
            )}
          </MainScreenshotBoxChild>
          <MainScreenshot>
            <MainScreenshotBoxImage>
              {selectedPayoutData?.screenshots && selectedPayoutData?.screenshots.length > 0 ? (
                selectedPayoutData.screenshots.map((e) => (
                  <Box
                    component="img"
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
          </MainScreenshot>
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
            <Box
              component="img"
              src={selectedImage}
              alt="Selected Screenshot"
              width={900}
              height={450}
              style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'scale-down' }}
            />
          )}
        </SelectedImageBox>
      </Dialog>
    </>
  );
};

export default CallReviewModel;
