'use client';
import { useState } from 'react';
import { Box, Button, Grid, Select, Typography } from '@mui/material';
import { ChatMessageInput, ComposeMessageControlWrapper } from './ChatFeature.styled';
import { ChatWidgets } from '../homePage/homeImageCards/ChatBarView';
import { ChatService } from 'services/chatServices/chat.service';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { useAuthContext } from 'contexts/AuthContext';

interface CustomComposerViewProps {
  onSendMessage: (message: string, type: string) => void;
  modelName?: string;
}

const CustomComposerView = ({ onSendMessage, modelName }: CustomComposerViewProps) => {
  const { token } = useAuthContext();
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message, 'text');
      setMessage('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  const handleFileUpload = async (file: string) => {
    const response = await fetch(file);
    const blob = await response.blob();
    const uploadFile = new File([blob], file.split('/').pop() || '', { type: blob.type });
    const formData = new FormData();
    formData.append('image', uploadFile);
    const uploadFileRes = await ChatService.chatUploadImage(formData, token.token);
    if (uploadFileRes.code === 200) {
      onSendMessage(uploadFileRes.data.link, 'image');
    } else {
      toast.error(ErrorMessage);
    }
    setOpen(false);
  };

  return (
    <>
      <Select
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        sx={{
          '&.MuiPaper-root': {
            top: '560px !important',
            background: 'red'
          },
          '&.MuiInputBase-root .MuiSelect-select': {
            display: 'none'
          },
          '&.MuiInputBase-root svg': {
            display: 'none'
          }
        }}
      >
        <Box sx={{ paddingInline: 1, overflowY: 'auto', scrollbarWidth: 'none' }}>
          <Grid container spacing={2}>
            {ChatWidgets.map((item, index) => (
              <Grid
                item
                xs={4}
                md={2}
                key={index}
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5, cursor: 'pointer' }}
                onClick={() => handleFileUpload(item.image)}
              >
                <Box component="img" src={item.image} width={48} height={48} />
                <Typography variant="SubtitleSmallMedium">{item.name}</Typography>
                <Box sx={{ display: 'flex', gap: 0.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="captionLargeBold" color="#FBE182">
                    {item.coins}
                  </Typography>
                  <Box component="img" src="/images/chatWidgets/Coin.webp" width={20} height={20} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Select>
      <ComposeMessageControlWrapper variant="outlined">
        <ChatMessageInput
          id="search-input"
          placeholder={`Send a message to ${modelName || ''}...`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          endAdornment={
            <Box className="end-adornment-main-box" width={44} height={44}>
              <Button
                className="heart-box"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                onClick={() => setOpen(true)}
              >
                <Box component="img" src="/images/chatWidgets/Luck.webp" width={20} height={20} />
              </Button>
              <Button className="send-button" variant="contained" onClick={handleSend}>
                Send
              </Button>
            </Box>
          }
          aria-describedby="send-message"
        />
      </ComposeMessageControlWrapper>
    </>
  );
};

export default CustomComposerView;
