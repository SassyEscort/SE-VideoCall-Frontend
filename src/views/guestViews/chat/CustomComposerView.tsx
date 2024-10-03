'use client';
import { useState } from 'react';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import { ChatMessageInput, ComposeMessageControlWrapper } from './ChatFeature.styled';

interface CustomComposerViewProps {
  onSendMessage?: (message: string) => void;
  modelName?: string;
}

const CustomComposerView = ({ onSendMessage, modelName }: CustomComposerViewProps) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      // onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <ComposeMessageControlWrapper variant="outlined">
      <ChatMessageInput
        id="search-input"
        placeholder={`Send a message to ${modelName || ''}...`}
        endAdornment={
          <Box className="end-adornment-main-box">
            <Box className="heart-box">
              <Image alt="sticker" src={'/images/icons/heart-icon.png'} height={24} width={24} />
            </Box>
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
