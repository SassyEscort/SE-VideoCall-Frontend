'use client';
import Box from '@mui/material/Box';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import theme from 'themes/theme';
import {
  AVerificationLink,
  CheckYourInbox,
  DialogContentSecondBox,
  DialogtitleContainer,
  EmailText,
  MianDailogConatiner,
  TextContainer
} from './CheckInBox.styled';
import { FormattedMessage } from 'react-intl';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import DialogContent from '@mui/material/DialogContent';

const CheckInboxVerify = ({ onOpen, onClose, email }: { onOpen: boolean; onClose: () => void; email: string }) => {
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <MianDailogConatiner
      open={onOpen}
      onClose={onClose}
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          border: isMdDown ? 'solid 0px' : 'solid 1px #FF68C0A3'
        },
        '& .MuiDialog-container': {
          backgroundColor: isMdDown ? '#07030E' : '#07030e99 !important'
        }
      }}
    >
      <DialogtitleContainer id="responsive-modal-title">
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: (theme) => theme.palette.text.secondary
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogtitleContainer>

      <TextContainer>
        <DialogContent sx={{ p: 0 }}>
          <DialogContentSecondBox>
            <Image loading="lazy" src="/images/auth/check-email.png" width={175} height={123} alt="check-email.png" />
            <CheckYourInbox variant="h2" color="text.secondary">
              <FormattedMessage id="CheckYourInbox" />
            </CheckYourInbox>
            <AVerificationLink variant="bodyRegular" color="secondary.200">
              <FormattedMessage id="AVerificationLink" />
              <Box>
                <EmailText variant="bodySemiBold" color="text.primary">
                  {email}
                </EmailText>
              </Box>
            </AVerificationLink>
          </DialogContentSecondBox>
        </DialogContent>
      </TextContainer>
    </MianDailogConatiner>
  );
};

export default CheckInboxVerify;
