'use client';
import { useState } from 'react';
import { Box, Button, Grid, Select, Typography, useMediaQuery } from '@mui/material';
import { ChatMessageInput, ComposeMessageControlWrapper } from 'views/guestViews/chat/ChatFeature.styled';
import theme from 'themes/theme';
import { ChatService } from 'services/chatServices/chat.service';
import { useAuthContext } from 'contexts/AuthContext';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';

interface CustomComposerViewProps {
  onSendMessage: (message: string, type: string) => void;
  modelName?: string;
}

export const ChatWidgets = [
  { name: 'Balloon', coins: 20, image: '/images/chatWidgets/Balloon.webp' },
  { name: 'Balloons', coins: 20, image: '/images/chatWidgets/Balloons.webp' },
  { name: 'Candy', coins: 20, image: '/images/chatWidgets/Candy.webp' },
  { name: 'Champagne', coins: 20, image: '/images/chatWidgets/Champagne.webp' },
  { name: 'Kiss', coins: 20, image: '/images/chatWidgets/Kiss.webp' },
  { name: 'Lipstick', coins: 20, image: '/images/chatWidgets/Lipstick.webp' },
  { name: 'Lolipop', coins: 20, image: '/images/chatWidgets/Lolipop.webp' },
  { name: 'Luck', coins: 20, image: '/images/chatWidgets/Luck.webp' },
  { name: 'Ring', coins: 20, image: '/images/chatWidgets/Ring.webp' },
  { name: 'Teddy', coins: 20, image: '/images/chatWidgets/Teddy.webp' }
];

const ChatBarView = ({ onSendMessage, modelName }: CustomComposerViewProps) => {
  const { token } = useAuthContext();
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

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
      <ComposeMessageControlWrapper variant="outlined">
        <Select
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          sx={{
            '&.MuiInputBase-root .MuiSelect-select': {
              display: 'none'
            },
            '&.MuiInputBase-root svg': {
              display: 'none'
            }
          }}
        >
          <Box sx={{ paddingInline: 1, width: isSmDown ? '100%' : 300, height: 300, overflowY: 'auto', scrollbarWidth: 'none' }}>
            <Grid container spacing={2}>
              {ChatWidgets.map((item, index) => (
                <Grid
                  item
                  xs={4}
                  md={4}
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

        <ChatMessageInput
          id="search-input"
          placeholder={`Send a message...`}
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
              <Button className="send-chat-button" variant="contained" onClick={handleSend} sx={{ padding: 0 }}>
                <Box component="img" src="/images/chat/sendChat.svg" width={24} height={24} />
              </Button>
            </Box>
          }
          aria-describedby="send-message"
        />
      </ComposeMessageControlWrapper>
    </>
  );
};

export default ChatBarView;
