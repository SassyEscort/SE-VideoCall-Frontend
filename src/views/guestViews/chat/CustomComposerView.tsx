'use client';
import { useEffect, useState } from 'react';
import { Box, Button, Grid, Menu, Typography } from '@mui/material';
import { ChatMessageInput, ComposeMessageControlWrapper } from './ChatFeature.styled';
import { ChatGiftData, ChatService } from 'services/chatServices/chat.service';
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [chatGiftList, setChatGiftList] = useState<ChatGiftData[]>([]);
  const isOpen = Boolean(anchorEl);

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

  const handleFileUpload = async (file: string, id: number) => {
    const params = {
      gift_id: id,
      model_user_name: modelName || ''
    };
    const giftSendToModel = await ChatService.chatGiftSendServices(params, token.token);
    if (giftSendToModel.code === 200) {
      onSendMessage(file, 'image');
    } else {
      toast.error(ErrorMessage);
    }
    setAnchorEl(null);
  };

  const hanldeChatGift = async () => {
    const chatGiftRes = await ChatService.chatGiftList(token.token);
    if (chatGiftRes.code === 200) {
      setChatGiftList(chatGiftRes.data);
    } else {
      toast.error(ErrorMessage);
    }
  };

  const handleClose = () => setAnchorEl(null);

  useEffect(() => {
    if (token.token) {
      hanldeChatGift();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <ComposeMessageControlWrapper variant="outlined">
      <ChatMessageInput
        id="search-input"
        placeholder={`Send a message ...`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        endAdornment={
          <Box className="end-adornment-main-box" width={44} height={44}>
            <>
              <Button
                className="heart-box"
                id="long-button"
                aria-controls={isOpen ? 'long-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isOpen ? 'true' : undefined}
                onClick={(e) => setAnchorEl(e.currentTarget)}
              >
                <Box component="img" src="/images/chatWidgets/Luck.webp" width={20} height={20} />
              </Button>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={isOpen}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                sx={{ width: '100%' }}
              >
                <Grid
                  container
                  spacing={2}
                  columnGap={{ sm: 0, md: 4 }}
                  sx={{ marginTop: 0, ml: { md: 2 }, paddingInline: { xs: 2, md: 0 }, maxHeight: 300, overflow: 'auto' }}
                >
                  {chatGiftList.map((item, index) => (
                    <Grid
                      item
                      xs={4}
                      md={2}
                      key={index}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 0.5,
                        cursor: 'pointer'
                      }}
                      onClick={() => handleFileUpload(item.link, item.id)}
                    >
                      <Box component="img" src={item.link} width={48} height={48} />
                      <Box
                        sx={{
                          display: 'flex',
                          gap: 0.5,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Typography variant="captionLargeBold" color="#FBE182">
                          {item.amount}
                        </Typography>
                        <Box component="img" src="/images/chatWidgets/Coin.webp" width={20} height={20} />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Menu>
            </>

            <Button className="send-button" variant="contained" onClick={handleSend}>
              Send
            </Button>
          </Box>
        }
        aria-describedby="send-message"
      />
    </ComposeMessageControlWrapper>
  );
};

export default CustomComposerView;
