'use client';
import { useState } from 'react';
import { Box, Button } from '@mui/material';
import { ChatMessageInput, ComposeMessageControlWrapper } from './ChatFeature.styled';

interface CustomComposerViewProps {
  onSendMessage: (message: string) => void;
  modelName?: string;
}

const CustomComposerView = ({ onSendMessage, modelName }: CustomComposerViewProps) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <ComposeMessageControlWrapper variant="outlined">
      <ChatMessageInput
        id="search-input"
        placeholder={`Send a message to ${modelName || ''}...`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        endAdornment={
          <Box className="end-adornment-main-box">
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
