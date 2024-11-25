'use client';
import ChatSidbar from './ChatSidbar';
import { ChatMainBoxContainer } from './Chat.styled';
import ChatDescription from './ChatDescription';
import { useMediaQuery, useTheme } from '@mui/material';
import { useChatFeatureContext } from 'contexts/chatFeatureContext';

const ChatFeature = () => {
  const { selectedModel, handleModelSelect } = useChatFeatureContext();
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <ChatMainBoxContainer>
      {isSmUp || !selectedModel ? <ChatSidbar onSelectModel={handleModelSelect} /> : <ChatDescription />}
      {isSmUp && <ChatDescription />}
    </ChatMainBoxContainer>
  );
};

export default ChatFeature;
